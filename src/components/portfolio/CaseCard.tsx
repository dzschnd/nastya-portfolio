import type { CSSProperties } from "react";
import { ArrowRightIcon } from "../icons/SocialIcons";

interface CaseCardProps {
	title: string;
	description: string;
	tags: string[];
	image: string;
	gradient: string;
	href?: string;
}

export default function CaseCard({
	title,
	description,
	tags,
	image,
	gradient,
	href = "#",
}: CaseCardProps) {
	return (
		<a
			href={href}
			className="group overflow-hidden rounded-[28px] border border-zinc-700 bg-[#111111] transition duration-500 hover:border-zinc-600"
			style={{ backgroundImage: gradient } as CSSProperties}
		>
			<div className="relative aspect-[1.45/1] overflow-hidden">
				<img
					src={image}
					alt={title}
					className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
				/>
			</div>

			<div className="bg-[linear-gradient(180deg,rgba(10,10,10,0.96)_0%,rgba(3,3,3,1)_100%)] px-5 pb-6 pt-5 md:px-6 md:pb-7">
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-white/6 bg-white/4 px-3 py-1 text-[11px] font-medium tracking-[0.03em] text-white/42"
						>
							{tag}
						</span>
					))}
				</div>

				<h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
					{title}
				</h2>
				<p className="mt-2 text-sm leading-6 text-white/46 md:text-[15px]">
					{description}
				</p>

				<div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/62 transition duration-300 group-hover:text-[#ff92ee]">
					<span>Смотреть кейс</span>
					<ArrowRightIcon className="size-4" />
				</div>
			</div>
		</a>
	);
}
