import axios, { AxiosResponse } from "axios";
import { Cep } from "../@types/cep";

const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const getInfoCep = (cep: string): Promise<AxiosResponse<Cep>> =>
  apiCep.get(`${cep}/json/`);
