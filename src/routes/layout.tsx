import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/Footer/Footer";
import Header from "../components/header/header";

export default component$(() => {
	return (
		<div class="container">
			<Header />
			<main class="grow">
				<Slot />
			</main>
			<Footer />
		</div>
	);
});
