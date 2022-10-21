import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="mt-4 sm:mt-8">
			<div class="intro space-y-4">
				<h1>
					<span class="highlight">Hello </span>there.
				</h1>
				<h2>
					Great! So you've found <span class="highlight">my website</span>.
				</h2>
        <h2>I am <span class='highlight'>Tanishq</span></h2>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Tanishq Singla",
};
