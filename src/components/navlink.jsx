"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({link}) => {

    const pathName = usePathname();

    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-fusha text-black"}`} href={link.url}>
            {link.title}
        </Link>
    )
}

export default Navlink;