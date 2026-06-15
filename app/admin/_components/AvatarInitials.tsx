"use client";
export default function AvatarInitials({
  initials,
  gradient = "from-purple-500 to-cyan-500",
}: {
  initials: string;
  gradient?: string;
}) {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/70 shadow-sm grid place-items-center text-white font-semibold text-base select-none">
      <div
        className={`w-full h-full grid place-items-center ${gradient}`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))",
        }}>
        {initials}
      </div>
    </div>
  );
}
