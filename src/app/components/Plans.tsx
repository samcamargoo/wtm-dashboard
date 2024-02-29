"use client";
import { PlanCard } from "./PlanCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsDownload,
} from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
export interface PlansProps {
  tipo: string;
  beneficios: string[];
  valor: number;
}
const plans: PlansProps[] = [
  {
    tipo: "voluntários",
    beneficios: [
      "participação em um projeto",
      "acesso à comunidade",
      "networking com profissionais seniores",
    ],
    valor: 0,
  },
  {
    tipo: "oficiais",
    beneficios: ["voluntário", "participação ilimitada nos projetos"],
    valor: 144.99,
  },
  {
    tipo: "startups",
    beneficios: ["voluntário", "membro", "criação ilimitada em projetos"],
    valor: 1499.99,
  },
  {
    tipo: "empresas",
    beneficios: ["voluntário", "membro", "criação ilimitada em projetos"],
    valor: 1499.99,
  },
];

export const Plans = () => {
  const [index, setIndex] = useState(0);
  const currentPlan = plans.at(index);

  const isMobile = (): boolean => {
    const userAgent = navigator.userAgent;
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(userAgent);
  };

  const handleNextPlan = () => {
    const lastPlan = index === plans.length - 1;
    const newIndex = lastPlan ? 0 : index + 1;
    setIndex(newIndex);
  };

  const handlePreviousPlan = () => {
    const firstPlan = index === 0;
    const newIndex = firstPlan ? plans.length - 1 : index - 1;
    setIndex(newIndex);
  };
  return (
    <section className="flex py-32 flex-col relative">
      <div className="px-4 sm:px-32 flex flex-col">
        <p className="text-[34px] font-bold">Escolha o plano ideal para você</p>
        <p className="font-bold">
          os valores são revertidos para a manutenção da qualidade de nossa
          plataforma
        </p>
      </div>

      {isMobile() && (
        <div className="flex justify-center">
          <PlanCard plan={currentPlan!} key={index} />

          <div
            className="absolute top-[65%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2  text-black cursor-pointer"
            onClick={handlePreviousPlan}
          >
            <BsChevronCompactLeft size={30} />
          </div>
          <div
            className="absolute top-[65%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2  text-black cursor-pointer"
            onClick={handleNextPlan}
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      )}

      {!isMobile() && (
        <div className="flex justify-between flex-wrap px-32 ">
          {plans.map((plan, index) => (
            <PlanCard plan={plan} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};
