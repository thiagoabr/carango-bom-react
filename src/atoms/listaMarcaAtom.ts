import { atom } from 'recoil';
import { Marca } from '../types/marca.type';

export const listaMarcaAtom = atom<Marca[]>({
  key: 'listaMarcaAtom',
  default: [],
});
