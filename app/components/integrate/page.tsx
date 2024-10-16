import img1 from "./illustration.svg";
import img2 from "./illustration (1).svg";
import Image from "next/image";
const Integrate = () => {
    return (
        <div className="flex flex-col md:px-16 px-8 gap-8 md:py-32 py-16 items-center">
            <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl md:text-5xl font-semibold text-center" style={{ color: "rgba(7, 13, 37, 1)" }}>Doesn&apos;t
                replace but Integrate.</h1>
            <p className="text-base md:text-xl font-normal text-center" style={{ color: "rgba(67, 81, 105, 1)" }}>We understand
                the importance of physical Madrasah. That&apos;s why
                we integrate virtual learning environment for personal improvement.</p>
          </div>
            <Image src={img1} alt="img" className="md:block hidden" />
            <Image src={img2} alt="img" className="md:hidden block"/>
        </div>
    )
}
export default Integrate;
