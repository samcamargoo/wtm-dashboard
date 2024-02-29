import { Button } from "@/components/ui/button";
import { GrLinkNext } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";

import { PlansProps } from "./Plans";
interface PlanCardProps {
  plan: PlansProps;
}
export const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div className="flex flex-col max-h-[350px] min-h-[350px]  max-w-[300px] min-w-[300px] justify-between mt-16">
      <div className="bg-black p-4 flex justify-center">
        <p className="text-white font-bold">{plan.tipo}</p>
      </div>
      <div className="p-4">
        <ul className="flex flex-col gap-4">
          {plan.beneficios.map((beneficio) => (
            <li className="flex items-center gap-2 font-semibold">
              <FaCheck />
              {beneficio}
            </li>
          ))}
        </ul>
      </div>
      <Button className="bg-[#466DF7] py-10 text-start">
        <div className="flex flex-col">
          {plan.valor == 0 && <p>Gratuito</p>}
          {plan.valor > 0 && (
            <p>
              {plan.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )}

          <div className="flex items-center">
            <p>Crie sua conta </p>
            <GrLinkNext className="ml-4" />
          </div>
        </div>
      </Button>
    </div>
  );
};
