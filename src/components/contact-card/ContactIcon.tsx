import type { ReactNode } from "react";

type Props = {
  children: ReactNode; // the icon(s) passed in
};

export default function ContactIcon({ children }: Props) {
  return (
    <div className="rounded-[10px] h-15 w-15 mb-2.5 bg-white flex items-center justify-center">
      {children} {/* render whatever is passed, e.g., a React Icon */}
    </div>
  );
}
