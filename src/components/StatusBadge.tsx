type StatusBadgeProps = {
	label: string;
};

export default function StatusBadge({ label }: StatusBadgeProps) {
	return (
		<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-neutral-200">
			<span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
			{label}
		</span>
	);
}
