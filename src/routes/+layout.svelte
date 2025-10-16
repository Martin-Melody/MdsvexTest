<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import Header from '$lib/components/header/header.svelte';

	import '../app.css';
</script>

<div class="layout">
	<Header />
	<slot />
</div>
