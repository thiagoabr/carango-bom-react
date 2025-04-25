import { atom } from 'recoil';
import { Veiculo } from '../types/veiculo.type';

export const veiculoAtom = atom<Veiculo>({
  key: 'veiculoAtom',
  default: {
    modelo: '',
    ano: '',
    valor: 0,
    marcaId: '',
  },
});
