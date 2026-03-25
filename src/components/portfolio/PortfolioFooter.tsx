import {
	DprofileIcon,
	LinkedinIcon,
	ResumeIcon,
	TelegramIcon,
} from "../icons/SocialIcons";
import SocialChip from "./SocialChip";

const socialLinks = [
	{
		label: "CV",
		href: "https://drive.google.com/file/d/1er6KaFUhehusmBUCHQTsf-X5gsSJIixx/view?usp=sharing",
		Icon: ResumeIcon,
	},
	{
		label: "Telegram",
		href: "https://t.me/NastyaSchtoz",
		Icon: TelegramIcon,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/anastasiia-shtots/",
		Icon: LinkedinIcon,
	},
	{
		label: "Dprofile",
		href: "https://dprofile.ru/anastasiia.shtots",
		Icon: DprofileIcon,
	},
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
