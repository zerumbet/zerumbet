<script type="text/coffeescript">
	export name = null;
	export sayHello = () => alert('hello ' + name);
</script>

<style type="text/stylus">
	h1
		color: purple;
</style>

<template lang="pug">
	h1(on:click="{sayHello}") Hello {name}!
</template>
