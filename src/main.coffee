import App from './App.svelte';

app = new App({
	target: document.body,
	props: {
		name: 'OK'
	}
});

export default app;