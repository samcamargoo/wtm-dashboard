import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Register() {
  return (
    <main className="flex min-h-screen items-center p-4 w-full justify-around gap-4">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Torne-se membro</CardTitle>
          <CardDescription>Acesse projetos e conteúdo premium.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome Completo:</Label>
                <Input />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email:</Label>
                <Input type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Senha:</Label>
                <Input type="password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Sexo:</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="feminino">Feminino</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Especialidade:</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="masculino">Backend</SelectItem>
                      <SelectItem value="feminino">Frontend</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="flex w-full">Cadastrar</Button>
          <div className="flex gap-2 items-center">
            <p className="text-[14px] text-muted-foreground">
              Já tem uma conta?
            </p>
            <Link
              href="/"
              className="text-blue-500 hover:underline text-[14px]"
            >
              Entrar
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
