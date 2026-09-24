import { NavLink } from "@/components/layout/nav-link";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex gap-3">
      <Link href="/">Game Catalog</Link>
      <nav className="flex justify-between gap-3">
        <NavLink href="/games">Games</NavLink>
      </nav>
    </header>
  );
}
