import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
	return {
		fill: "none",
		viewBox: "0 0 24 24",
		...props,
	};
}

export function ResumeIcon(props: IconProps) {
	return (
		<svg {...baseProps(props)}>
			<path
				d="M8 3.75h5.5L18.25 8.5V19A1.25 1.25 0 0 1 17 20.25H8A1.25 1.25 0 0 1 6.75 19V5A1.25 1.25 0 0 1 8 3.75Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.6"
			/>
			<path
				d="M13.5 3.75V8.5h4.75"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.6"
			/>
			<path
				d="M9.5 12h5M9.5 15.5h5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.6"
			/>
		</svg>
	);
}

export function TelegramIcon(props: IconProps) {
	return (
		<svg {...baseProps(props)}>
			<path
				d="m20.6 5.43-2.4 11.32c-.18.8-.65 1-1.32.62l-3.66-2.7-1.76 1.7c-.2.19-.36.35-.73.35l.26-3.76 6.84-6.18c.3-.27-.06-.42-.46-.16L8.9 11.95 5.25 10.8c-.8-.25-.82-.8.17-1.18L19.7 4.12c.67-.25 1.25.16.9 1.31Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function LinkedinIcon(props: IconProps) {
	return (
		<svg {...baseProps(props)}>
			<path
				d="M8 9.75V18"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.8"
			/>
			<path
				d="M12.5 18v-4.75c0-1.25 1-2.25 2.25-2.25S17 12 17 13.25V18"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
			<circle cx="8" cy="6.75" r="1.25" fill="currentColor" />
		</svg>
	);
}

export function DribbbleIcon(props: IconProps) {
	return (
		<svg {...baseProps(props)}>
			<circle
				cx="12"
				cy="12"
				r="8.25"
				stroke="currentColor"
				strokeWidth="1.6"
			/>
			<path
				d="M8.2 8.1c3.45 2.35 5.63 6 6.63 10.15"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.6"
			/>
			<path
				d="M6 15.2c2.95-1.45 6.7-1.8 10.9-.75"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.6"
			/>
			<path
				d="M7.1 7.6c3.75 1.15 7.75 1.05 10.95-.4"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.6"
			/>
		</svg>
	);
}

export function ArrowRightIcon(props: IconProps) {
	return (
		<svg {...baseProps(props)}>
			<path
				d="M5.75 12h12.5M13.25 6.75 18.5 12l-5.25 5.25"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}
