import api from './api.service';
import { Marca } from '../types/marca.type';
import { getTokenAcesso } from '../utils/tokenAcesso';

export async function listarMarcas(): Promise<Marca[]> {
  const response = await api.get('/marcas',
    {
      headers: {
        Authorization: `Bearer ${getTokenAcesso()}`
      }
    });
  return response.data;
}
  
export async function cadastrarMarca(marca: Marca): Promise<void> {
  await api.post('/marcas', marca,
    {
      headers: {
        Authorization: `Bearer ${getTokenAcesso()}`
      }
    });
}