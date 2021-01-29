import React, { useState } from 'react';
import axios from 'axios'
import { CepDados } from './types/BuscaCep'


function App() {
  const [campoCep, setCampoCep] = useState<string>('');
  const [cep, setCep] = useState<CepDados>();

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${campoCep}/json/`)
      .then(respostaAPI => setCep(respostaAPI.data))
  }

  return (
    <div className="App">
      <h2>Digite o CEP</h2>
      <input type="text" onChange={(event) => setCampoCep(event.target.value)} />
      <button onClick={getCep}>Ver Dados CEP</button>
      <p>Bairro: {cep?.bairro}</p>
      <p>CEP: {cep?.cep}</p>
      <p>Complemento: {cep?.complemento}</p>
      <p>DDD: {cep?.ddd}</p>
      <p>GIA: {cep?.gia}</p>
      <p>IBGE: {cep?.ibge}</p>
      <p>Localidade: {cep?.localidade}</p>
      <p>Logradouro: {cep?.logradouro}</p>
      <p>Siafi: {cep?.siafi}</p>
      <p>Estado: {cep?.uf}</p>
    </div>
  );

}

export default App;
