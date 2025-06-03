import { StickyScrollRevealDemo } from "./ScrollRevealDemo";

export default function Testimonials() {
  return (
    <section
      id="who-are-we"
      className="w-full  py-20 bg-gradient-to-b from-yellow-50 via-rose-50 to-sky-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 transition-colors"
    >
      <div className="w-full px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-pink-600 dark:text-pink-300 drop-shadow-sm">
          Who Are We??
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          At Rayastra, we are dreamers, explorers, and passionate educators on a mission to transform curiosity into clarity. Founded with the belief that learning should be fun, engaging, and limitless, we create a space where young minds can discover the universe of knowledge at their own pace.
        </p>

        {/* Full width/height reveal component */}
        
      </div>
      <div className="w-full min-h-screen">
          <StickyScrollRevealDemo />
        </div>
    </section>
  );
}
