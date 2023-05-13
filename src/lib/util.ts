import { REPO_NAMES, TECH_LIST } from '$lib/constants';
import type { LanguageOrTech, RepoName } from '$lib/types/types';
import { format } from 'date-fns';

export const formatDateString = (date: Date) => format(date, 'PPP');

export const getRandomHexString = (length: number): string =>
	Array.from({ length }, () => Math.floor(Math.random() * 16))
		.map((n) => Number(n).toString(16))
		.join('');

export const getRandomArrayItem = <T>(array: readonly T[], defaultValue: T): T =>
	array.at(Math.floor(Math.random() * array.length)) ?? defaultValue;

export const getCSSPropValue = (element: HTMLElement, propName: string): string =>
	getComputedStyle(element).getPropertyValue(propName);

export const isUserRepo = (repoName: string): repoName is RepoName => REPO_NAMES.includes(repoName as RepoName);

export const isValidLanguage = (language: string): language is LanguageOrTech =>
	TECH_LIST.includes(language as LanguageOrTech);

export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();

export const slugify = (text: string): string =>
	text
		.normalize('NFKD')
		.toLowerCase()
		.trim()
		.replace(/[\s_]+/g, '-')
		.replace(/([^A-Za-z0-9-])+/g, '')
		.replace(/--+/g, '-')
		.replace(/(^-|-$)/g, '');

export function getScrollbarWidth() {
	if (typeof window === 'undefined') return;
	const outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.overflow = 'scroll';
	document.body.appendChild(outer);
	const inner = document.createElement('div');
	outer.appendChild(inner);
	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
	outer?.parentNode?.removeChild(outer);
	return scrollbarWidth;
}

export const normalize = (s: string): string => s.replaceAll(/[\s-_]/g, '').toLowerCase();
export const getVariableName = (x: object) => Object.keys(x)[0];

export function groupByProperty<T>(array: T[], property: keyof T): { [k: string]: T[] } {
	return array.reduce((grouped, item) => {
		const groupVal = item[property] as string;
		grouped[groupVal] = grouped[groupVal] || [];
		grouped[groupVal]?.push(item);
		return grouped;
	}, {} as { [k: string]: T[] });
}

export function clickOutside(node: HTMLElement, { enabled: initialEnabled, cb }: { enabled: boolean; cb: () => void }) {
	const handleOutsideClick = ({ target }: { target: EventTarget | null }) => {
		if (target instanceof Node) {
			if (!node.contains(target)) {
				cb();
			}
		}
	};

	function update({ enabled }: { enabled: boolean }) {
		if (enabled) {
			window.addEventListener('click', handleOutsideClick);
		} else {
			window.removeEventListener('click', handleOutsideClick);
		}
	}

	update({ enabled: initialEnabled });
	return {
		update,
		destroy() {
			window.removeEventListener('click', handleOutsideClick);
		},
	};
}

