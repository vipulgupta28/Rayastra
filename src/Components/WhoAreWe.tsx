import { TabsDemo } from "./TabsDemo";

export default function WhoAreWeSection() {
  return (
    <section
      id="who-are-we"
      className="w-full py-20 bg-gradient-to-b from-yellow-50 via-rose-50 to-sky-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-pink-600 dark:text-pink-300 drop-shadow-sm">
          Who Are We?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We’re a team of educators, designers, and technologists building joyful learning experiences for kids — powered by creativity and care.
        </p>

        {/* Tabs component */}
        <div className="rounded-3xl shadow-xl border-4 border-dashed border-pink-300 dark:border-pink-500 bg-white dark:bg-zinc-900 p-4 md:p-8">
          <TabsDemo />
        </div>
      </div>
    </section>
  );
}
