import { useEffect } from 'react';
import style from './Marca.module.scss';
import { useRecoilState } from 'recoil';
import { listaMarcaAtom } from '../../atoms/listaMarcaAtom';
import { listarMarcas } from '../../services/marca.service';

export default function ListaMarcas() {
  const [marcas, setMarcas] = useRecoilState(listaMarcaAtom);

  useEffect(() => {
    async function carregarMarcas() {
      try {
        const response = await listarMarcas();
        setMarcas(response);
      } catch (error) {
        alert('Erro ao carregar marcas');
        console.error(error);
      }
    }

    carregarMarcas();
  }, [setMarcas]);

  return (
    <div className={style.listaMarcas}>
      <h1>Lista de Marcas</h1>
      {marcas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {marcas.map((marcas: any) => (
              <tr key={marcas.id}>
                <td>{marcas.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={style.emptyState}>Nenhuma marca cadastrada.</p>
      )}
    </div>
  );
}
