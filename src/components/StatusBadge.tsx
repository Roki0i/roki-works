type StatusBadgeProps = {
	label: string;
};

export default function StatusBadge({ label }: StatusBadgeProps) {
	return (
		<span className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.06] px-3 py-1 text-xs font-medium text-sky-100">
			<span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]" />
			{label}
		</span>
	);
}
