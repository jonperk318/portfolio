"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded-xl p-3 hover:bg-purple hover:ring-space-cadet hover:ring-1 hover:scale-110 ${pathName === link.url && "bg-fuchsia text-black ring-space-cadet ring-1"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
