"use client"

import Image from "next/image";
import img1 from "./Logo (5).svg";
import img2 from "./solar_round-arrow-left-linear.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import img3 from "./menu.svg"

export const Header = () => {
    const pathname = usePathname()
    const getClassname = (path: string) => ` ${pathname === path ? "rgba(0, 30, 154, 1)" : "rgba(51, 51, 51, 0.7)"}` 
    return (
        <div className="sticky top-0 z-20 flex justify-between md:h-28 h-20 bg-transparent backdrop-blur items-center md:px-16 px-8 text-base font-medium">
            <div className="flex gap-2 items-center">
                <Image src={img1} alt="img" />
                <h1 className="" style={{color: "rgba(7, 13, 37, 1)"}}>Techeeroh Academy</h1>
            </div>
            <div className="md:flex gap-4 items-center text-sm font-normal hidden">
                <Link href={"/"} style={{color: getClassname("/")}}>Home</Link>
                <Link href={"/book"} style={{color: getClassname("/book")}}>Treated Books</Link>
                <Link href={"/training"} style={{color: getClassname("/training")}}>Trainings</Link>
                <Link href={"/contact"} style={{color: getClassname("/contact")}}>Contact us</Link>
            </div>
            <Link href={"/enrol"} className="md:flex gap-2 items-center px-6 py-2 rounded-lg hidden" style={{backgroundColor: "rgba(4, 50, 223, 1)"}}>
                <p className="text-white">Enrol</p>
                <Image src={img2} alt="img"/>
            </Link>
            <Image src={img3} alt="img" className="md:hidden block"/>
        </div>
    )
}
