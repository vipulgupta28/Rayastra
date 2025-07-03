
import { StickyScroll } from "../ui/scroll-reveal";


const content = [
  {
    title: "Traditional Technology",
    description:
      "We are here to expand the learning possibilities for the young minds, we blend in together the offline experience into the online learning, by frequently conducting offline follow ups, PTMs, sessions and workshops for the kids and the parents in your cities.",
    content: (
     
       <img src="https://unsplash.com/photos/a-group-of-people-standing-around-a-wooden-bench-EUN-KwdZayg"
        className="w-full h-full object-cover"
        alt="" />
     
    ),
  },
  {
    title: "Turning Curiosity into Clarity",
    description:
      "At Rayastra, we believe every child is born curious — it's the spark that drives discovery. Our mission is to guide that spark through the vast galaxy of learning, helping kids connect the dots between questions and understanding. We turn “Why?” into “Wow!” with fun, personalized, and meaningful education.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="
https://unsplash.com/photos/boy-in-white-long-sleeve-shirt-holding-red-and-clear-plastic-tool-CgIFBwOkApI"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Learning That Feels Like an Adventure",
    description:
      "We blend real life experience with education. Whether it’s through interactive videos, 1:1 mentorship, or engaging activities, our platform transforms everyday learning into a journey through the stars. Kids don’t just study here — they explore, create, and grow.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img src="https://unsplash.com/photos/boys-eating-candies-while-sitting-on-floor-wE1_kGQHplQ" alt="" />
      </div>
    ),
  },
  {
    title: "A Galaxy of Possibilities for Every Child",
    description:
      "We imagine a future where education is limitless — not locked in textbooks, but open like the night sky. Our vision is to build a world where every child, no matter where they come from, can reach for the stars and achieve their full potential. With Rayastra, every child’s path is lit with possibility.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img src="https://unsplash.com/photos/a-small-boy-with-model-of-solar-system-indoors-working-on-school-project-9xzQl_W9u6o" alt="" />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
