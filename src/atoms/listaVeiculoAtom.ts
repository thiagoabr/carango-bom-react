import { atom } from 'recoil';
import { Veiculo } from '../types/veiculo.type';

export const listaVeiculoAtom = atom<Veiculo[]>({
  key: 'listaVeiculoAtom',
  default: [],
});
