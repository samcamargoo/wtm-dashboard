import Image from "next/image";
import Picture from "@/assets/Picture.svg";
import { Button } from "@/components/ui/button";

export const AboutUs = () => {
  return (
    <section className="flex text-white py-32 items-center bg-[#1E1E1E]">
      <div className="px-6 sm:px-32 flex flex-col-reverse sm:flex-row sm:items-center justify-between w-full gap-10 sm:gap-0">
        <div className="sm:w-[700px] flex flex-col gap-4">
          <p className="text-[#466DF7] text-[60px] font-extrabold">Sobre Nós</p>
          <p className="text-justify">
            A Big Bang Academy é um grupo de entusiastas de tecnologia com foco
            em grupos minoritários, mas aberto para todas as pessoas que tiverem
            interesse em um futuro mais consciente e sustentável, prezando
            sempre pela segurança individual, coletiva e da inovação a partir de
            uma cultura centrada em pessoas e cultura..
          </p>
          <p className="text-justify">
            Temos foco em desenvolvimento, elevamos a barra de todos com
            estímulo à criatividade, não temos pressa pois sabemos que cada um
            tem a sua curva de aprendizado, mas sabemos que o tempo é precioso,
            por isso nos dedicamos ao máximo com nossos colegas e parceiros,
            aqui ninguém faz nada sozinho.
          </p>
          <Button className="bg-[#5B78DD] w-max rounded-[20px] font-bold px-14 text-[24px] hover:bg-[#5B78DD] mt-4">Inscreva-se</Button>
        </div>
        <Image alt="image" src={Picture} className="h-[200px] sm:h-[400px]" />
      </div>
    </section>
  );
};
