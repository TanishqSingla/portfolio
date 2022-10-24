import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<>
			<h1>Blogs</h1>
		</>
	);
});

export const head: DocumentHead = {
	title: "Tanishq Singla | Blog",
};
