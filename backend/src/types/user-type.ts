//import { User } from "./../../node_modules/.prisma/client/index"; //testando mudar depois

export type User = {
  email: string;
  password: string;
  name: string;
  cpf: string;
  birthday: string;
  phone: string;
  street: string;
  city: string;
  complement: string;
  state: string;
  number: string;
  cep: string;
  avatar: string;
}