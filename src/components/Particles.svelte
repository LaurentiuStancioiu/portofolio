<script lang="ts">
	import { onMount } from 'svelte';
	import Particles, { initParticlesEngine } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';
	import { particlesOptions } from '$lib/particles';

	let ready = $state(false);

	onMount(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			ready = true;
		});
	});
</script>

{#if ready}
	<Particles
		id="tsparticles"
		options={particlesOptions}
		class="absolute inset-0 w-full h-full"
	/>
{/if}
