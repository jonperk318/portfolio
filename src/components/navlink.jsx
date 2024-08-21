"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({link}) => {

    const pathName = usePathname();
    console.log(pathName)

    return (
        <div className="" href={link.url}>
            {link.title}
        </div>
    )
}

export default Navlink;