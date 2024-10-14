import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import img1 from "./image.svg";

export interface Course {
  title: string,
  image: string,
  price: string,
  details: string,
  id: string,
  category: "All" | "new" | "old"
}
interface Coursestorage{
  courses: Course[],
  category: string,
  setCategory: (category: string) => void;
}
export const useCourseStore = create<Coursestorage>()(
  persist(
    (set) => ({
      courses: [
        {
          title: "tuhfatu atfal",
          image: img1,
          price: "#5000",
          details: "Memorize the Quran with proper Tajweed",
          id: "1",
          category: "new"
        },
        {
          title: "tuhfatu atfal",
          image: img1,
          price: "#5000",
          details: "Memorize the Quran with proper Tajweed",
          id: "1",
          category: "new"
        },
        {
          title: "tuhfatu atfal",
          image: img1,
          price: "#5000",
          details: "Memorize the Quran with proper Tajweed",
          id: "1",
          category: "new"
        },
        {
          title: "tuhfatu atfal",
          image: img1,
          price: "#5000",
          details: "Memorize the Quran with proper Tajweed",
          id: "1",
          category: "new"
        }
      ],
      category: "new",
      setCategory: (category) => set({category})
    }),
    {
      name: 'course-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
