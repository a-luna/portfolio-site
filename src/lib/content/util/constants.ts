export const CODE_FENCE_START_REGEX =
	/```(?<lang>[\w-]+)(?:\s{)?(?:(?<linenos>linenos)=table)?(?:,)?(?:linenostart=(?<start1>[\d]+)|hl_lines=\[(?<highlight1>.+)\])?(?:,)?(?:hl_lines=\[(?<highlight2>.+)\]|linenostart=(?<start2>[\d]+))?(?:})?/g;

export const CODE_FENCE_END_REGEX = /\n```\n/g;

export const INFO_BOX_REGEX =
	/{{< info_box >}}(?:\s)?(?:<p>)?([\s\S][^{]*)(?:<\/p>)?(?:\s)?{{< \/info_box >}}/g;

export const ALERT_BOX_REGEX =
	/{{< alert_box >}}(?:\s)?(?:<p>)?([\s\S][^{]*)(?:\s)?(?:<p>)?{{< \/alert_box >}}/g;

export const LINKED_IMAGE_REGEX = /{{< linked_image (?<name>.+) >}}/g;

export const VIDEO_REGEX =
	/{{< autoplay_video video="(?<video>[\w]+)"(?: device="(?<device>mobile|desktop)")?(?: width="(?<width>[\d]+)px")? >}}/g;

export const HTML_HEADING_REGEX =
	/<h(?<level>2|3|4|5|6) id="(?<slug>[0-9a-z-_]+)">(?<text>.+)<\/(?:h2|h3|h4|h5|h6)>/g;

export const TOX_TEST_RESULTS_REGEX = /test session starts [=]{50,50}([\s\S][^=]*)[=]+/g;

export const CODE_BLOCK_START_REGEX =
	/<pre(?: class="(?<shiki>shiki)" style="background-color: (?<bgColor>#[A-Fa-f0-9]{6,6})")?>?(?:<code(?:>)?)?/g;

export const CODE_BLOCK_END_REGEX = /<\/pre>/g;

export const FA_BULLET_LIST_REGEX = /<div class="fa-bullet-list">/g;

export const FA_BULLET_REGEX =
	/<p class="fa-bullet-list-item(?: complete)?(?: in-progress)?"><span class="fa (?<star>(?:fa-star)(?:-o)?(?:-half-o)?) fa-bullet-icon"><\/span>(?<text>.+)<\/p>/g;

const svgIconMap: { [k: string]: { svg: string; height: number } } = {
	alert: {
		svg: '<path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>',
		height: 576
	},
	copy: {
		svg: '<path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>',
		height: 448
	},
	fullStar: {
		svg: '<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>',
		height: 576
	},
	halfStar: {
		svg: '<path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path>',
		height: 576
	},
	note: {
		svg: '<path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path>',
		height: 512
	},
	star: {
		svg: '<path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>',
		height: 576
	}
};

export function getSvgIcon(icon: string): string {
	const { svg, height } = svgIconMap[icon] ?? { svg: '', height: 0 };
	const svgOpenTag = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${height} 512" stroke="currentColor" fill="currentColor" style="stroke-width: 0; padding: 0;">`;
	return `${svgOpenTag}${svg}</svg>`;
}
