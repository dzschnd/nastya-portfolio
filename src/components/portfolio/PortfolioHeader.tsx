import profileImage from "../../assets/portfolio/afc6c6ff25807132cfdfc963daaed0cc14a23859.png";
import {
	DribbbleIcon,
	LinkedinIcon,
	ResumeIcon,
	TelegramIcon,
} from "../icons/SocialIcons";
import SocialChip from "./SocialChip";

const socialLinks = [
	{ label: "CV", href: "#", Icon: ResumeIcon },
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
		label: "dprofile",
		href: "https://dprofile.ru/anastasiia.shtots",
		Icon: DribbbleIcon,
	},
];

export default function PortfolioHeader() {
	return (
		<header className="relative overflow-hidden px-6 pb-14 pt-10 md:px-10 md:pb-18 md:pt-14 lg:px-16 lg:pt-16">
			<div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:gap-12">
				<div className="relative shrink-0">
					<div className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle,rgba(255,120,233,0.32),transparent_65%)] blur-2xl" />
					<div className="relative size-28 overflow-hidden rounded-full ring-1 ring-white/10 shadow-[0_0_40px_rgba(255,120,233,0.22)] md:size-32 lg:size-36">
						<img
							src={profileImage.src}
							alt="Анастасия Штоц"
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>

				<div className="flex-1">
					<div className="mb-5 flex flex-col gap-1.5">
						<h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
							Анастасия Штоц
						</h1>
						<div className="flex items-center gap-3">
							<div className="h-px w-9 bg-gradient-to-r from-[#ff78e9] to-transparent" />
							<p className="text-sm font-medium uppercase tracking-[0.28em] text-[#ff92ee] md:text-[15px]">
								Product Designer
							</p>
						</div>
					</div>

					<p className="max-w-2xl text-base leading-7 text-white/68 md:text-[17px]">
						Продуктовый дизайнер с опытом в AI-платформах, web-сервисах и
						digital-продуктах. Проектирую интерфейсы, пользовательские
						сценарии и визуальные системы, превращая сложные идеи в понятные
						и цельные решения.
					</p>

					<div className="mt-6 flex flex-wrap gap-2.5">
						{socialLinks.map((link) => (
							<SocialChip key={link.label} {...link} />
						))}
					</div>
				</div>

				<div className="inline-flex self-start rounded-full border border-white/10 bg-white/4 p-1 shadow-[0_0_24px_rgba(255,120,233,0.08)] backdrop-blur md:self-start">
					<button
						type="button"
						className="rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#111111]"
					>
						RU
					</button>
					<button
						type="button"
						className="rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/45"
					>
						EN
					</button>
				</div>
			</div>
		</header>
	);
}
