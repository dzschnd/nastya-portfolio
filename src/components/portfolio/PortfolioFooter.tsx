import {
	DribbbleIcon,
	LinkedinIcon,
	ResumeIcon,
	TelegramIcon,
} from "../icons/SocialIcons";
import SocialChip from "./SocialChip";

const socialLinks = [
	{ label: "CV", href: "#", Icon: ResumeIcon },
	{ label: "Telegram", href: "#", Icon: TelegramIcon },
	{ label: "LinkedIn", href: "#", Icon: LinkedinIcon },
	{ label: "Dribbble", href: "#", Icon: DribbbleIcon },
];

export default function PortfolioFooter() {
	return (
		<footer className="border-t border-white/8 px-6 py-10 md:px-10 md:py-12 lg:px-16">
			<div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<p className="text-base font-semibold tracking-[-0.02em] text-white/82">
					Анастасия Штоц
				</p>
				<div className="flex flex-wrap gap-2.5">
					{socialLinks.map((link) => (
						<SocialChip key={link.label} {...link} />
					))}
				</div>
			</div>
		</footer>
	);
}
