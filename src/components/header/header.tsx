import {
	$,
	component$,
	useClientEffectQrl,
	useStore,
	useStylesScoped$,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Moon, Sun } from "../icons";
import styles from "./header.css";

export default component$(() => {
	const store = useStore({ isDark: true });
	useStylesScoped$(styles);

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
		<header class="bg-gray-200/40 dark:bg-stone-700/40 dark:text-white">
			<nav class="flex items-center">
				<ul class="flex gap-4 grow">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
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
						{store.isDark ? (
							<Sun color="black" size="20px" />
						) : (
							<Moon color="white" size="2rem" />
						)}
					</button>
				</div>
			</nav>
		</header>
	);
});
