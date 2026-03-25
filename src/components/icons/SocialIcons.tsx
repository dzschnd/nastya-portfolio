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

export function DprofileIcon(props: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 685 685" {...props}>
			<path
				d="M331.496 0.281799C384.81 -2.54336 438.56 15.9704 478.511 51.4351C489.053 60.7937 499.71 72.0078 509.677 81.9771L560.557 132.856L603.482 175.786C614.732 187.025 627.274 198.897 637.32 211.067C664.931 244.761 681.151 286.345 683.639 329.837C686.926 384.434 668.407 438.105 632.152 479.057C622.88 489.428 611.41 500.361 601.435 510.333L550.704 561.059L507.655 604.121C497.333 614.439 486.06 626.353 475.017 635.634C440.59 664.612 397.612 681.504 352.669 683.728L351.803 683.79C300.367 687.165 243.782 667.081 205.638 632.747C194.961 623.136 183.828 611.574 173.59 601.335L121.162 548.895L80.1641 507.92C69.5333 497.29 57.1544 485.556 47.6455 474.139C19.6761 440.49 3.13867 398.817 0.426758 355.149C-3.09106 300.454 15.2695 246.604 51.4668 205.452C60.6803 195.049 72.7643 183.555 82.7715 173.549L135.531 120.798L176.934 79.3795C187.175 69.1384 198.421 57.2838 209.409 48.0816C243.682 19.3973 286.353 2.63544 330.986 0.324768C331.156 0.310266 331.326 0.296301 331.496 0.281799ZM292.648 99.0269C281.834 99.0243 269.114 98.447 258.534 99.2047C213.95 101.594 172.508 119.722 142.467 153.205C118.35 179.571 103.405 213.028 99.8584 248.584C98.6724 260.982 98.9995 274.286 98.999 286.8L99.0049 334.53L99.0107 392.125C99.0015 403.629 98.6943 416.914 99.3223 428.26C101.74 471.7 121.142 512.451 153.342 541.714C179.664 565.739 213.037 580.628 248.498 584.169C261.094 585.382 274.245 585.044 286.942 585.04L332.177 585.031L392.395 585.036C402.911 585.04 415.338 585.659 425.617 584.864C441.534 583.989 454.924 581.784 470.037 576.95C532.202 557.078 578.23 500.282 584.181 435.23C585.328 422.684 585.016 409.949 585.016 397.293L585.007 349.387L585.003 292.146C585.012 280.289 585.323 266.773 584.655 255.077C582.041 211.527 562.362 170.764 529.882 141.635C504.508 118.779 472.696 104.317 438.792 100.229C425.846 98.7081 413.247 99.0207 400.243 99.022L353.139 99.0328L292.648 99.0269Z"
				fill="currentColor"
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
