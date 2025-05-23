"use client";
import { Boxes } from "../ui/background-boxes";
import { FloatingDockDemo } from "./floating-dock";

export function BackgroundBoxesDemo() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-start rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <footer className="w-full z-50 mt-20 text-white py-12 px-8 flex flex-col items-center space-y-12  max-w-5xl mx-auto">
        {/* Branding and Newsletter */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white animate-pulse">
            RAYASTRA
          </h2>
          <p className="text-zinc-300 text-sm md:text-base">Join our newsletter for the latest updates</p>
          <div className="flex w-full gap-4 max-w-md mx-auto mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border w-80  rounded-xl"
            />
            <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 hover:cursor-pointer transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-10 text-sm md:text-base">
          <FloatingDockDemo/>
        </div>

        {/* Footer Note */}
        <div className="text-xs text-zinc-500 mt-4">
          © {new Date().getFullYear()} Rayastra. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
