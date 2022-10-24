import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Download from "~/components/icons/download";
import Github from "~/components/icons/github";
import Linkedin from "~/components/icons/linkedin";
import Twitter from "~/components/icons/twitter";

export default component$(() => {
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
				<h3>About me</h3>
				<p class="indent-4">I develop websites and webapps ✌.</p>
			</div>
			<div class="social">
				<h3>Find me on</h3>
				<div class="social-links">
					<a href="https://www.github.com/TanishqSingla">
						<Github color="#344E41" size="24" />
						Github
					</a>
					<a href="https://www.twitter.com/TanishqSingla_">
						<Twitter color="#344E41" size="24" />
						Twitter
					</a>
					<a href="https://www.linkedin.com/in/tanishqsingla">
						<Linkedin color="#344E41" size="18" />
						Linkedin
					</a>
				</div>
			</div>
			<div class="downloads">
				<h3>Download my resume</h3>
				<div class="social-links">
					<a
						href="https://drive.google.com/file/d/1PbIfBANDUYlghoSRYx-4rEOi239JYUcj/view?usp=sharing"
						class="px-4"
					>
						<Download color="#344E41" size="24" />
						Resume
					</a>
				</div>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Tanishq Singla",
};
