import { useEffect } from 'react';
import style from './Usuario.module.scss';
import { useRecoilState } from 'recoil';
import { listaDashboardAtom } from '../../atoms/listaDashboard';
import { listarDashboard } from '../../services/dashboard.service';

export default function Dashboard() {
  const [dashboard, setDashboard] = useRecoilState(listaDashboardAtom);

  useEffect(() => {
    async function carregarDashboard() {
      try {
        const response = await listarDashboard();
        setDashboard(response);
      } catch (error) {
        alert('Erro ao carregar usuários');
        console.error(error);
      }
    }

    carregarDashboard();
  }, [setDashboard]);

  return (
    <div className={style.listaDashboard}>
      <h1>Dashboard - Carango Bom</h1>
      {dashboard.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Quantidade</th>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {dashboard.map((dashboard: any) => (
              <tr key={dashboard.id}>
                <td>{dashboard.marca}</td>
                <td>{dashboard.quantidade}</td>
                <td>{dashboard.valorTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={style.emptyState}>Nenhuma informação cadastrada.</p>
      )}
    </div>
  );
}
