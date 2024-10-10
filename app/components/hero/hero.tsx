import Image from "next/image";
import img1 from "./hero-img.svg";
import Link from "next/link";
import img2 from "../header/solar_round-arrow-left-linear.svg";
import img3 from "./quill_link-out.svg"

const Hero = () => {
    return(
        <div className="flex justify-between md:px-16 px-8 w-full md:flex-row flex-col items-center">
            <div className="md:w-1/2 w-full flex gap-2 flex-col mb-6">
                <h1 style={{color: "rgba(255, 121, 0, 1)"}} className="text-base font-bold">Faith and Future</h1>
                <h1 style={{color: "rgba(7, 13, 37, 1)"}} className="font-medium md:text-5xl text-3xl">Enhance your Islamic Knowledge in a Virtual Environment</h1>
                <p style={{color: "rgba(67, 81, 105, 1)"}} className="text-xl font-normal">Every day brings with it a fresh set of learning possibilities. Elevate your Islamic knowledge today!</p>
                <div className="flex md:flex-row flex-col gap-4 mt-4 text-base">
                    <Link href={"/explore"} className="md:w-52 w-full h-14 flex items-center justify-center gap-2 rounded-lg" style={{backgroundColor: "rgba(4, 50, 223, 1)"}}>
                        <p className="text-white">Explore courses</p>
                        <Image src={img2} alt="img"/>
                    </Link>
                    <Link href={"/about"} className="md:w-52 w-full h-14 flex items-center justify-center gap-2 rounded-lg" style={{backgroundColor: "rgba(238, 238, 238, 1)", color:"rgba(76, 82, 106, 1)"}}>
                        <p>About us</p>
                        <Image src={img3} alt="img"/>
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                    <Image src={img1} alt="img" className="w-full"/>
            </div>
        </div>
    )
}
export default Hero;