"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCurrentPage = href === pathname;
  const isActive = isCurrentPage || pathname.startsWith(href + "/");
  const ariaCurrent = isCurrentPage ? "page" : undefined;
  return (
    <Link
      className={cn(isActive && "underline")}
      href={href}
      aria-current={ariaCurrent}
    >
      {children}
    </Link>
  );
}
