import Link from "next/link"

const Learn = () => {
    return (
        <div className="w-full flex flex-col items-center md:py-16 py-8 text-white">
            <div className="w-5/6 flex flex-col items-center md:rounded-3xl rounded-xl justify-between md:py-10 py-5 gap-8" style={{backgroundColor: "rgba(4, 50, 223, 1)"}}>
                <div className="flex flex-col md:gap-2 gap-1 items-center font-medium">
                <h1 className="md:text-5xl text-2xl">Learn &amp; Memorize Qur&apos;an</h1>
                <h2 className="text-base">Find the right plan for yourself</h2>
                </div>
                <div className="flex gap-16 md:flex-row flex-col">
                    <div className="border rounded-xl w-72 h-72 flex flex-col justify-between p-8" style={{ borderColor: "rgba(205, 214, 249, 1)" }}>
                        <h1 className="text-2xl font-semibold">Basic</h1>
                        <h2 className="text-lg font-medium">2days/week one-on-one Qur&apos;an memorization class </h2>
                        <p className="text-xl font-semibold">#1200/month</p>
                        <Link href={"/"} className="py-4 w-32 rounded-lg border border-white text-center">Get started</Link>
                    </div>
                    <div className="rounded-xl w-72 h-72 flex flex-col justify-between p-8" style={{ backgroundColor: "rgba(27, 75, 255, 1)" }}>
                    <h1 className="text-2xl font-semibold">Basic</h1>
                        <h2 className="text-lg font-medium">2days/week one-on-one Qur&apos;an memorization class </h2>
                        <p className="text-xl font-semibold">#1200/month</p>
                        <Link href={"/"} className="py-4 w-32 rounded-lg text-center bg-white" style={{color: "rgba(4, 50, 223, 1)"}}>Get started</Link> 
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Learn;