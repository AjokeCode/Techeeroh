"use client";

import Image from "next/image";
import { useCourseStore } from "../store/coursestore";
import img1 from "./fixed-width fixed-height sec-.svg";

const Treatedbooks = () => {
    const courses = useCourseStore((state) => state.courses);

    // Filter courses based on the category
    const newCourses = courses.filter((course) => course.category === "new");

    return (
        <div className="flex flex-col md:gap-6 gap-3 items-center px-8 md:px-16">
            <h1 className="text-2xl md:text-5xl font-medium" style={{color: "rgba(7, 13, 37, 1)"}}>Available treated books</h1>
            <h2 className="text-base md:text-xl font-normal text-center" style={{color: "rgba(67, 81, 105, 1)"}}>Explore the available treated books and get started with your learning journey.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newCourses.map((course) => (
            <div
            className="flex flex-col justify-between max-w-96 h-80 border rounded-3xl py-8 px-8"
            style={{ borderColor: "rgba(0, 0, 0, 0.08)" }}
            key={course.id}
            >
            <div className="flex items-center justify-between">
                <Image
                    src={course.image}
                    alt="course image"
                    width={100}
                    height={100}
                />
                <p className="md:text-3xl text-xl font-semibold" style={{color: "rgba(63, 135, 254, 1)"}}>{course.price}</p>
            </div>
            <p className="md:text-2xl text-xl font-semibold" style={{color: "rgba(1, 29, 13, 1)"}}>{course.title}</p>
            <Image src={img1} alt="decorative image" />
            <p className="text-sm md:text-xl font-normal">{course.details}</p>
        </div>
    ))}
</div>

        </div>
    );
};

export default Treatedbooks;
