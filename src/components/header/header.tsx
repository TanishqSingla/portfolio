import { $, component$, useClientEffectQrl, useStore } from "@builder.io/qwik";
import { Moon, Sun } from "../icons";

export default component$(() => {
	const store = useStore({ isDark: true });

	const toggleTheme = $(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
			store.isDark = false;
		}
	});

	useClientEffectQrl(toggleTheme);

	return (
		<header class="sticky bg-gray-100/40 dark:bg-gray-600/40 backdrop-blur-sm px-4 py-4 mt-4 rounded-xl dark:text-white">
			<nav class="flex items-center">
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
							store.isDark = !store.isDark;
							localStorage.theme = store.isDark ? "dark" : "light";
							toggleTheme();
						}}
					>
						{/* {store.isDark ? (
							<Sun color="white" size="32px" />
						) : (
							<Moon color="white" size="32px" />
						)} */}
						<Sun color={store.isDark ? 'black' : 'white'} size="1rem" />
					</button>
				</div>
			</nav>
		</header>
	);
});
