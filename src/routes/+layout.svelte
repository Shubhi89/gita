<script lang="ts">

	let { children } = $props();
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
		<link href="/index.css" rel="stylesheet" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link href="https://fonts.cdnfonts.com/css/edensor" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Noto+Sans+Devanagari&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}
