import img1 from "./solar_round-arrow-left-linear (1).svg"
import img2 from "../header/solar_round-arrow-left-linear.svg"
import Image from "next/image";

const Enrol = () => {
    return (
        <div className="flex md:flex-row flex-col md:px-16 px-8 w-full md:py-16 py-8 gap-6 ">
            <div className="md:w-1/2 w-full flex flex-col p-4 md:p-6 h-56 md:h-44 rounded-xl md:rounded-3xl justify-between" style={{background: "linear-gradient(to bottom right, rgba(236, 252, 203, 1), rgba(240, 243, 255, 1) )"}}>
                <h1 className="text-2xl font-bold" style={{color: "rgba(7, 13, 37, 1)"}}>Enrol now</h1>
                <div className="flex md:flex-row flex-col gap-6">
                    <p className="text-base font-normal" style={{color: "rgba(83, 81, 78, 1)"}}>Enroll for our treated books now and start learning in a virtual environment at your pace</p>
                    <div className="flex justify-center gap-4 px-2 w-full h-14 rounded-lg border items-center" style={{backgroundColor: "rgba(4, 50, 223, 1)"}}>
                        <p className="text-base font-medium text-white">Enroll now</p>
                        <Image src={img2} alt="img"/>
                    </div> 
                </div>
            </div>




            <div className="md:w-1/2 w-full flex flex-col p-4 md:p-6 h-56 md:h-44 rounded-xl md:rounded-3xl justify-between" style={{background: "linear-gradient(to bottom right, rgba(236, 252, 203, 1), rgba(255, 249, 243, 1) )"}}>
                <h1 className="text-2xl font-bold" style={{color: "rgba(7, 13, 37, 1)"}}>Join us</h1>
                <div className="flex md:flex-row flex-col gap-6">
                    <p className="text-base font-normal" style={{color: "rgba(83, 81, 78, 1)"}}>Join a community of young schorlars impacting knowledge in digital environment</p>
                    <div className="flex justify-center gap-4 px-2 w-full h-14 rounded-lg border items-center" style={{borderColor: "rgba(4, 50, 223, 1)"}}>
                        <p className="text-base font-medium" style={{color: "rgba(4, 50, 223, 1)"}}>Join us now</p>
                        <Image src={img1} alt="img"/>
                    </div>     
                </div>
            </div>
        </div>
    )
}
export default Enrol;