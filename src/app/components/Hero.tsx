"use client";
import { Button } from "@/components/ui/button";
import { setCookie } from "nookies";

import { useWebsiteContext } from "../context/WesiteContext";

export const Hero = () => {
  const { isAthlet, setIsAthlet, loading } = useWebsiteContext();

  const setCookies = () => {
    setCookie(null, "isAthlete", "true", {
      maxAge: 10 * 24 * 60 * 60,
      path: "/",
    });
    setIsAthlet(true);
  };

  return (
    <div
      className={`relative flex items-center justify-center md:justify-normal h-[100dvh] bg-cover bg-center bg-[url('/background.svg')]`}
    >
      {!isAthlet && (
        <div className="flex flex-col px-32 mt-[96px] gap-6 z-10">
          <p className="md:text-[64px] text-white max-w-[600px] leading-none font-light">
            VOCÊ PRATICA ALGUM ESPORTE?
          </p>
          <div className="flex gap-4">
            <Button
              className="px-32 py-4 rounded-[20px] bg-[#5B78DD] hover:bg-[#5B78DD]"
              onClick={setCookies}
            >
              sim
            </Button>
            <Button className="px-32 py-4 rounded-[20px] bg-[#5B78DD61] hover:bg-[#5B78DD61]">
              não
            </Button>
          </div>
        </div>
      )}
      {isAthlet && (
        <div className="flex flex-col px-6 md:px-32 gap-6 z-10">
          <div className="flex flex-col gap-2">
            <p className="text-[44px] md:text-[64px] max-w-[700px] text-white  leading-none font-light">
              Tenha sede de gol e não apenas de cerveja.
            </p>

            <p className="font-light text-white">
              pare de assistir inovação e comece a fazer, mas ao lado de quem
              bebe dessa água no café da manhã.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="px-14 py-4 rounded-[20px] bg-[#5B78DD] hover:bg-[#5B78DD] font-bold text-[24px]"
              onClick={setCookies}
            >
              seja atleta
            </Button>
            <Button className="px-14 py-4 rounded-[20px] bg-[#5B78DD61] hover:bg-[#5B78DD61] font-bold text-[24px]">
              organize jogos
            </Button>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-black opacity-90"></div>
    </div>
  );
};
