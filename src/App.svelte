<script>
	export let name;

	export function sayHello () {
		alert('hello');
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1 on:click={sayHello}>Hello {name}!</h1>
