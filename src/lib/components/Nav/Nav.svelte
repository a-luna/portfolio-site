<script lang="ts">
	import MenuButton from '$lib/components/Nav/MenuButton.svelte';
	import NavBrand from '$lib/components/Nav/NavBrand.svelte';
	import NavItems from '$lib/components/Nav/NavItems.svelte';
	import NavSideBar from '$lib/components/Nav/NavSideBar.svelte';
	import SocialLinks from '$lib/components/Nav/SocialLinks.svelte';

	let open = false;
</script>

<div class="nav-wrapper">
	<div class="nav-container">
		<NavBrand />
		<NavItems />
		<SocialLinks mobile={false} {open} />
		<MenuButton bind:open />
		<NavSideBar bind:open />
	</div>
</div>

<style lang="postcss">
	.nav-wrapper {
		width: 100%;
		max-width: var(--max-width);
		padding: 0;
		margin: 0 auto;
		background-color: inherit;
	}

	.nav-container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1.5rem;
		background-color: inherit;
		margin: 0 auto;
		padding: 1rem 1.5rem;
	}

	@media (min-width: 640px) {
		.nav-container {
			margin: 0;
		}
	}

	@media (min-width: 768px) {
		.nav-container {
			justify-content: flex-start;
			align-items: flex-end;
			padding: 1.5rem 0;
			margin: 0;
		}
	}
</style>
