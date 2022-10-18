import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<header class='sticky bg-gray-100/40 backdrop-blur-sm px-4 py-4 mt-4 rounded-xl'>
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
					<button>theme</button>
				</div>
			</nav>
		</header>
	);
});
