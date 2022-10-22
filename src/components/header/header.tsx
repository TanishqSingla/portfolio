import { $, component$, useClientEffectQrl, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
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
