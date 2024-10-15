import Image from "next/image";
import img1 from "./WhatsApp Image 2024-09-26 at 15.04.08_471356ac 1.svg"
import Link from "next/link";

const Becomeatechie = () => {
    return (
        <div className="w-full flex justify-between md:px-16 px-8 md:flex-row flex-col-reverse font-medium gap-6 md:gap-16 items-center">
                
                    <Image src={img1} alt="img" className="h-1/2 w-1/2 rounded-full"/>
           
            <div className="flex flex-col md:gap-4 gap-2">
                <h1 className="text-2xl md:text-4xl" style={{background: "linear-gradient(to bottom right, rgba(255, 121, 0, 1), rgba(1, 29, 13, 0.6) )", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "11%"}}>Become a techie</h1>
                <h2 className="text-2xl md:text-5xl ">And deepening faith in a consistent, bite-sized manner.</h2>
                <Link href={"/"} style={{color: "rgba(63, 135, 254, 1)"}} className="text-sm md:text-2xl font-normal">Enrol for a tech skill now &rarr;</Link>
            </div>
        </div>
    )
}
export default Becomeatechie;
