import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="mt-4 sm:mt-8 sm:space-y-16 space-y-8">
			<div class="intro space-y-4">
				<h1>
					<span class="highlight">Hello </span>there.
				</h1>
				<h1>
					Welcome to <span class="highlight">my website</span>.
				</h1>
        <h1>I am <span class='highlight'>Tanishq</span></h1>
			</div>
			<div class='about-me'>
				<h3 class='underline'>About me</h3>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Tanishq Singla",
};
