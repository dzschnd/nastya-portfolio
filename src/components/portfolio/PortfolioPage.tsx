import caseOne from "../../assets/portfolio/4b262b3322df4cdbb9c8e6913ced65f5cd1396cb.png";
import caseTwo from "../../assets/portfolio/bd501ec81e1d8da37cd5381dcb4debcff48f1521.png";
import caseThree from "../../assets/portfolio/5a863362054eae4bef26d7f08d1b4cd0155eebec.png";
import CaseCard from "./CaseCard";
import PortfolioFooter from "./PortfolioFooter";
import PortfolioHeader from "./PortfolioHeader";

const caseStudies = [
	{
		title: "DubSmart",
		description:
			"Самокат. Редизайн процесса сборки заказов для сотрудников даркстора: меньше ошибок, быстрее сценарии, спокойнее рабочий ритм.",
		tags: ["#b2b", "#мобильное приложение", "#логистика"],
		image: caseOne.src,
		gradient:
			"linear-gradient(147deg, rgba(252, 231, 243, 1) 0%, rgba(243, 232, 255, 1) 100%)",
	},
	{
		title: "Voice Tools",
		description:
			"Концепт продуктовой страницы для AI dubbing-сервиса с упором на ясную иерархию, промо-атмосферу и ощущение технологичности.",
		tags: ["#ai", "#landing", "#marketing"],
		image: caseTwo.src,
		gradient:
			"linear-gradient(147deg, rgba(228, 247, 255, 1) 0%, rgba(226, 235, 255, 1) 100%)",
	},
	{
		title: "Ops Dashboard",
		description:
			"Сложный внутренний интерфейс для операционной команды: чистая сетка, приоритет ключевых действий и аккуратная работа с плотным контентом.",
		tags: ["#dashboard", "#ux", "#operations"],
		image: caseThree.src,
		gradient:
			"linear-gradient(147deg, rgba(252, 231, 243, 1) 0%, rgba(243, 232, 255, 1) 100%)",
	},
	{
		title: "Mobile Experience",
		description:
			"Мобильный продуктовый сценарий с фокусом на быстрые решения, эмоционально мягкую визуальную подачу и аккуратные CTA.",
		tags: ["#mobile", "#product design", "#cases"],
		image: caseOne.src,
		gradient:
			"linear-gradient(147deg, rgba(248, 238, 255, 1) 0%, rgba(255, 236, 244, 1) 100%)",
	},
];

export default function PortfolioPage() {
	return (
		<div className="min-h-screen bg-[#1a1a1a] text-white">
			<PortfolioHeader />

			<div className="mx-auto mb-8 h-px max-w-7xl bg-gradient-to-r from-transparent via-[#ff78e9]/20 to-transparent px-6 md:px-10 lg:px-16" />

			<main className="px-6 pb-14 md:px-10 md:pb-16 lg:px-16 lg:pb-20">
				<div className="mx-auto mb-8 flex max-w-7xl items-end justify-between gap-4">
					<div>
						<h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
							Кейсы
						</h2>
					</div>
					<p className="hidden max-w-md text-sm leading-6 text-white/44 md:block">
						Сетка, карточки и общая атмосфера перенесены из Figma Make, но
						теперь это уже нормальная структура для Astro-проекта.
					</p>
				</div>

				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2">
					{caseStudies.map((study) => (
						<CaseCard key={`${study.title}-${study.description}`} {...study} />
					))}
				</div>
			</main>

			<PortfolioFooter />
		</div>
	);
}
