import { tutorialSections } from '$lib/stores';
import type { TutorialSection } from '$lib/types';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	let allTutorialSections: TutorialSection[];
	const storedValue = get(tutorialSections);
	if (!storedValue || !storedValue.length) {
		allTutorialSections = await fetch('/series/flask-api-tutorial.json').then((r) => r.json());
		tutorialSections.set(allTutorialSections);
	} else {
		allTutorialSections = storedValue;
	}
	return { allTutorialSections };
};
