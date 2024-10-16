import Image from "next/image";
import img1 from "./Logo (6).svg";
import img2 from "./Frame 2087325276.svg";
import img3 from "./2.svg";
import img4 from "./Frame 2087325275.svg";
import img5 from "./Frame 2087325134.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col justify-between md:p-10 p-5 md:h-64 h-96 text-base font-normal" style={{backgroundColor: "rgba(2, 13, 55, 1)", color: "rgba(172, 175, 184, 1)"}}>
            <div className="flex flex-col md:flex-row md:justify-between justify-normal md:gap-0 gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <Image src={img1} alt="img"/>
                        <h1 className="font-medium text-white">Techeeroh Academy</h1>
                    </div>
                    <h1>Bridging the gap between faith and future</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-semibold text-white">Links</h1>
                    <div className="flex md:gap-4 gap-0 justify-between md:justify-normal">
                        <Link href={"/books"}>Treated books</Link >
                        <Link href={"/tech"}>Tech skills</Link >
                        <Link href={"/faq"}>FAQ</Link >
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-semibold text-white">Social media</h1>
                    <div className="flex md:gap-2 gap-0 justify-between md:justify-normal">
                        <Image src={img2} alt="twitter" />
                        <Image src={img3} alt="facebook" />
                        <Image src={img4} alt="instagram" />
                        <Image src={img5} alt="email"/>
                    </div>
                </div>
            </div>
            <p className="w-full" style={{ backgroundColor: "rgba(172, 175, 184, 1)", height: "2px" }}></p>
            <h1 className="self-center text-sm">Techeeroh Academy &copy;2024, All rights reserved</h1>
        </div>
    )
}
export default Footer;