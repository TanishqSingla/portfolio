import { SVGProps } from ".";

export default function ({ size, color }: SVGProps) {
	return (
		<svg
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
		>
			<path d="M17 13h6l-11 11-11-11h6v-13h10z" />
		</svg>
	);
}
