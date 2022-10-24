import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<footer class="py-4">
			<p class="text-center text-black/40 dark:text-gray-50/50">
				&copy; Made with{" "}
				<span class="text-highlight underline">
					<a target="_blank no-referrer" href="https://qwik.builder.io/">
						Qwik
					</a>
				</span>
			</p>
		</footer>
	);
});
