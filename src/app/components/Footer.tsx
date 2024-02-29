"use client";
import { Button } from "@/components/ui/button";
export const Footer = () => {
  return (
    <>
      <div className="bg-cover md:bg-center bg-[url('/mobilefooterimage.svg')] md:bg-[url('/footer.svg')] flex  justify-center items-center min-h-[900px] relative">
        <div className="flex flex-col gap-2 text-white items-center z-10 w-full">
          <p className="text-[20px] md:text-[32px] font-thin">
            Se tiver dúvidas, manda uma mensagem
          </p>
          <Button className="w-max px-14 py-10 bg-[#466DF7] hover:bg-[#466DF7] text-[32px] rounded-[12px] font-bold">
            WhatsApp
          </Button>
          <p className="text-[16px] md:text-[24px] font-thin">
            aqui não ignoramos ninguém
          </p>
        </div>

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="flex flex-col md:flex-row px-6 w-full bg-black text-white md:px-32 gap-10 pb-20 pt-10">
        <div className="flex flex-col  gap-4">
          <p className="font-bold">Academy</p>
          <ul className="font-light">
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="flex flex-col  gap-4">
          <p className="font-bold">Plataforma</p>
          <ul className="font-light">
            <li>Trabalhe Conosco</li>
            <li>Privacidade</li>
          </ul>
        </div>
        <div className="flex flex-col  gap-4">
          <p className="font-bold">Negociações</p>
          <ul className="font-light">
            <li>Regras de Negociação</li>
            <li>Conheça nossas Startups</li>
          </ul>
        </div>

        <div className="flex flex-col  gap-4">
          <p className="font-bold">Parcerias</p>
          <ul className="font-light">
            <li>Conheça nossos valores</li>
            <li>Seja um parceiro</li>
          </ul>
        </div>
      </div>
    </>
  );
};
