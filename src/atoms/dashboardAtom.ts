import { atom } from 'recoil';
import { Dashboard } from '../types/dashboard.type';

export const dashboardAtom = atom<Dashboard>({
  key: 'dashboarAtom',
  default: {
    marca: '',
    quantidade: 0,
    valorTotal: 0,
  },
});
