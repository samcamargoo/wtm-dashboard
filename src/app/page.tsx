"use client";
import Image from "next/image";
import Picture from "@/assets/Picture.svg";
import { Articles } from "./components/Articles";
import { AboutUs } from "./components/AboutUs";
import { Plans } from "./components/Plans";
import { Hero } from "./components/Hero";
import { useWebsiteContext } from "./context/WesiteContext";
import { AnimatedDots } from "./components/AnimatedDots";
import { Button } from "@/components/ui/button";
import { Footer } from "./components/Footer";
export default function Home() {
  const { loading, isAthlet } = useWebsiteContext();
  if (loading) {
    return (
      <main className="flex items-center justify-center h-[100dvh] w-full gap-4 bg-[#1E1E1E]">
        <AnimatedDots />
      </main>
    );
  }
  return (
    <>
      {!isAthlet && <Hero />}
      {isAthlet && (
        <>
          <Hero />
          <AboutUs />
          {/* <Articles /> */}
          {/* <Plans /> */}
          <Footer />
        </>
      )}

      {/* <div className="relative flex items-center h-screen bg-cover bg-center bg-[url('/background.svg')]">
      <div className="flex flex-col px-32 mt-[96px] gap-6 z-10">
          <p className="text-[64px] text-white max-w-[600px] leading-none font-light">
            VOCÊ PRATICA ALGUM ESPORTE?
          </p>
          <div className="flex gap-4">
            <Button
              className="px-32 py-4 rounded-[20px] bg-[#5B78DD] hover:bg-[#5B78DD]"
             
            >
              sim
            </Button>
            <Button className="px-32 py-4 rounded-[20px] bg-[#5B78DD61] hover:bg-[#5B78DD61]">
              não
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </div> */}
      {/* {!isAthlet && (
        <main className="bg-cover bg-center flex items-center bg-[url('/background.svg')] relative -mt-28 min-h-screen">
         <div className="flex flex-col px-32 mt-[96px] gap-6 z-10">
          <p className="text-[64px] text-white max-w-[600px] leading-none font-light">
            VOCÊ PRATICA ALGUM ESPORTE?
          </p>
          <div className="flex gap-4">
            <Button
              className="px-32 py-4 rounded-[20px] bg-[#5B78DD] hover:bg-[#5B78DD]"
             
            >
              sim
            </Button>
            <Button className="px-32 py-4 rounded-[20px] bg-[#5B78DD61] hover:bg-[#5B78DD61]">
              não
            </Button>
          </div>
        </div>
        </main>
      )}
      {isAthlet && (
        <main className="flex flex-col h-[100dvh] w-full gap-4 bg-[#1E1E1E]">
          <Hero /> <AboutUs />
          <Articles />
          <Plans />
        </main>
      )} */}
    </>
  );
}
