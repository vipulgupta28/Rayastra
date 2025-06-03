import { AnimatedPinDemo } from "./3d";



export default function Contact() {
  return (
    <section
      id="who-are-we"
      className="w-full h-auto py-20 bg-gradient-to-b from-yellow-50 via-rose-50 to-sky-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 transition-colors"
    >
       
      <div className="max-w-6xl mx-auto px-6 text-center">
        
      
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-pink-600 dark:text-pink-300 drop-shadow-sm">
          Contact the Creator
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We’re a team of educators, designers, and technologists building joyful learning experiences for kids — powered by creativity and care.
        </p>

    <AnimatedPinDemo/>
       
      </div>
    </section>
  );
}
