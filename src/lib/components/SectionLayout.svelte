<script lang="ts">
	import { SITE_TITLE, SITE_URL } from '$lib/siteConfig';
	import { capitalize } from '$lib/util';

	export let section: string = '';
	export let title = capitalize(section);
	export let pageTitle = `${title} | ${SITE_TITLE}`;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={`${SITE_URL}/${section}`} />
	<meta property="og:title" content={pageTitle} />
</svelte:head>

<div class="section-outer">
	<div class="section">
		<h1 class="section-header" style="background-color: var(--{section}-section-color);">{title}</h1>
		<slot />
	</div>
</div>

<style lang="postcss">
	.section-outer {
		z-index: 3;
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.section {
		padding: 0 1.5rem 1.5rem 1.5rem;
	}

	.section-header {
		font-family: 'Roboto Mono', menlo, consolas, monospace;
		font-size: 1.7rem;
		line-height: 1.5;
		color: var(--page-bg-color);
		padding: 0 0.25rem;
		font-weight: 500;
		width: 100%;
		margin: 1.5rem 0 2rem 0;
	}

	@media (min-width: 640px) {
		.section-header {
			font-size: 2rem;
		}
	}

	@media (min-width: 768px) {
		.section {
			padding: 0 0 3rem 0;
		}
	}
</style>
