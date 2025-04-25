import React from 'react';
import FormularioBase from '../../components/FormularioBase';
import { CampoFormulario } from '../../types/formularioBase.type';
import { useRecoilState } from 'recoil';
import { cadastrarMarca } from '../../services/marca.service';
import { marcaAtom } from '../../atoms/marcaAtom';
import { Marca } from '../../types/marca.type';


const campos = [
  { nome: 'nome', tipo: 'text', label: 'nome', placeholder: 'Digite a Marca', required: true },
];

export default function CadastroMarca() {
  const [marca, setMarca] = useRecoilState(marcaAtom);

  const handleSubmit = async (evento: React.FormEvent) => {
    evento.preventDefault();
    try {
      await cadastrarMarca(marca);
      alert('Marca cadastrada!');
      setMarca({ nome: '' });
    } catch (err) {
      alert('Erro ao cadastrar veículo');
    }
  };

  return (
    <FormularioBase<Marca>
      campos={campos as CampoFormulario<Marca>[]}
      valores={marca}
      setValores={setMarca}
      onSubmit={handleSubmit}
      tituloBotao="Cadastrar Marcas"
    />
  );
}