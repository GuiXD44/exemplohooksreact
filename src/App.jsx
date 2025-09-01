import { useState } from 'react';
import './App.css'

function App() {

  var nome = "Guilherme ";
  var sobrenome = "Mergen";

  const [name, setName] = useState()
  const [sobrenomes, setSobrenome] = useState()

  function mudarNome(event){
    nome = event.target.value;
    setName(event.target.value)
  }
    function adicionarSobrenome(event){
      sobrenome = event.target.value;
      setSobrenome(event.target.value)
    }


  return (
    <>
      <p>Informe seu nome</p>
      <input onChange={mudarNome}/>
      <p>Informe seu sobrenome</p>
      <input onChange={adicionarSobrenome} />
      <p>{nome}</p>
      <p>Agora via useState : {name}</p>
      <p>{sobrenomes}</p>
    </>
  )
}

export default App
