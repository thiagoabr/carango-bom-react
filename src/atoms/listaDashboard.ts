import { atom } from 'recoil';
import { Dashboard } from '../types/dashboard.type';

export const listaDashboardAtom = atom<Dashboard[]>({
  key: 'listaDashboardAtom',
  default: [],
});
