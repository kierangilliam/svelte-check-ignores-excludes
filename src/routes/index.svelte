<script>
	export let a
	export let n = 2;
	// Should not show error
	n = '3'
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- Also, is there a way to now show an error for the following? -->
<style global src="test.css"></style>