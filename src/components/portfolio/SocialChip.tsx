import type { ComponentType, SVGProps } from "react";

interface SocialChipProps {
	label: string;
	href: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function SocialChip({ label, href, Icon }: SocialChipProps) {
	return (
		<a
			href={href}
			className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/72 transition duration-300 hover:border-[#ff78e9]/35 hover:bg-[#ff78e9]/10 hover:text-[#ffb7f3] hover:shadow-[0_0_24px_rgba(255,120,233,0.12)]"
		>
			<Icon className="size-4 text-white/60 transition duration-300 group-hover:text-[#ff92ee]" />
			<span className="font-medium tracking-[0.01em]">{label}</span>
		</a>
	);
}
