"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Credential } from "../interfaces/Credential";
import { useToast } from "@/components/ui/use-toast";
import { AnimatedDots } from "../components/AnimatedDots";

export default function Login() {
  const { handleLogin, isLoading } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Credential>();

  const onLoginClick = (credentials: Credential) => {
    handleLogin(credentials);
  };

  return (
    <div className="flex min-h-screen items-center p-4  w-full justify-around gap-4">
      <Card className="">
        <CardHeader>
          <CardTitle>Bem-vindo(a)</CardTitle>
          <CardDescription>
            Entre usando seu email ou crie uma nova conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">E-mail:</Label>
              {errors.email && (
                <span className="text-[12px] text-red-500">
                  {errors.email?.message}
                </span>
              )}
              <Input
                type="email"
                {...register("email", {
                  required: { value: true, message: "Campo obrigatorio" },
                })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="flex justify-between items-center">
                <Label htmlFor="name">Senha:</Label>

                <Link
                  href="/forgot-password"
                  className="text-[14px] text-blue-500 hover:underline"
                >
                  Esqueci minha senha
                </Link>
              </div>
              {errors.password && (
                <span className="text-[12px] text-red-500">
                  {errors.password?.message}
                </span>
              )}
              <Input
                type="password"
                {...register("password", {
                  required: { value: true, message: "Campo obrigatorio" },
                })}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            className={`w-full ${
              isLoading ? "cursor-not-allowed" : "cursor-auto"
            }`}
            disabled={isLoading}
            onClick={handleSubmit(onLoginClick)}
          >
            {isLoading && <AnimatedDots />}
            {!isLoading && <p>Entrar</p>}
          </Button>
          <div className="flex gap-2 items-center">
            <p className="text-[14px] text-muted-foreground">
              Novo na nossa plataforma?
            </p>
            <Link
              href="/register"
              className="text-blue-500 hover:underline text-[14px]"
            >
              Crie sua conta
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
