import { $, component$, useClientEffectQrl, useStore } from "@builder.io/qwik";

export default component$(() => {
	const themes = ["dark", "light"];

	const store = useStore({ themeIndex: 0 });

	const toggleTheme = $(() => {
		// I WANTED TO TRY SOMETHING SO LET ME BE
		localStorage.theme = themes[store.themeIndex];
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
			store.themeIndex = 1;
		}
	});

	useClientEffectQrl(toggleTheme);

	return (
		<header class="sticky bg-gray-100/40 backdrop-blur-sm px-4 py-4 mt-4 rounded-xl">
			<nav class="flex">
				<ul class="flex gap-8 grow">
					<li>
						<a href="/"></a>
					</li>
					<li>
						<a href="">Projects</a>
					</li>
					<li>
						<a href="">Blog</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
				</ul>
				<div class="theme-switcher">
					<button
						onClick$={() => {
							store.themeIndex = store.themeIndex ^ 1;
              toggleTheme();
						}}
					>
						theme
					</button>
				</div>
			</nav>
		</header>
	);
});
