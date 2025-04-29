import api from './api.service';
import { getTokenAcesso } from '../utils/tokenAcesso';
import { Dashboard } from '../types/dashboard.type';

export async function listarDashboard(): Promise<Dashboard[]> {
  const response = await api.get('/dashboard',
    {
      headers: {
        Authorization: `Bearer ${getTokenAcesso()}`
      }
    });
  return response.data;
}
