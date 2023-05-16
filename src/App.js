import './App.css';
import { useState } from 'react';

function App() {

  const [endereco, setEndereco] = useState({})

  function manipulaEndereco (evento){

    const cep = evento.target.value

    setEndereco({
      cep
    })

    if(cep && cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json)
      .then(dados => {
        setEndereco(enderecoAntigo => ({
          ...enderecoAntigo,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }))
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <input onChange={manipulaEndereco} placeholder='Digite o cep'/>
      <ul>
        <li>Cep:{endereco.cep}</li>
        <li>Bairro:{endereco.bairro}</li>
        <li>Cidade:{endereco.cidade}</li>
        <li>Estado:{endereco.estado}</li>
      </ul>
      </header>
    </div>
  );
}

export default App;
