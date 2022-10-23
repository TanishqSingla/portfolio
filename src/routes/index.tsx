import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	useStylesScoped$('./index.css');

	return (
		<div class="sm:space-y-8 space-y-4">
			<div class="intro space-y-4">
				<h1>
					<span class="highlight">Hello </span>there.
				</h1>
				<h1>
					Welcome to <span class="highlight">my website</span>.
				</h1>
				<h1>
					I am <span class="highlight">Tanishq</span>
				</h1>
			</div>
			<div class="about-me py-2">
				<h3 class="underline">About me</h3>
				<p class='indent-4'>
					I develop websites and webapps ✌.
				</p>
			</div>
			<div class='social'>
				<div class='social-links'></div>
				<div class='social-links'></div>
			</div>
			<div class='downloads'>
				
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Tanishq Singla",
};
