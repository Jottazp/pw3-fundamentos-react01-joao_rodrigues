import './App.css';
import { useState } from 'react';

function App() {

  /*ESTADO DE DADOS DE NOME*/
  const [nome, setNome] = useState("");

  /*ESTADO DE DADOS DE E-MAIL*/
  const [email, setEmail] = useState("");

  /*ESTADO DE DADOS DE SENHA*/
  const [senha, setSenha] = useState("");

  /*FUNÇÃO DE CADASTRAR*/
  function cadastrarUsuario(event){
    event.preventDefault();
    //alert('TESTE DE SUBMIT');
    alert(`NOME: ${nome} E-MAIL: ${email} SENHA: ${senha} `)
  }

  return (
    <div className="App">
     
      <form onSubmit={cadastrarUsuario} className='form'>
        <h1>FORMUÁRIO DE CADASTRO</h1>

        <input
          type='text'
          placeholder='DIGITE SEU NOME'
        required
        value={nome}
        onChange={(event)=>{setNome(event.target.value)}}
        />

        <input
          type='email'
          placeholder='DIGITE SEU E-MAIL'
        required
        value={email}
        onChange={(event)=>{setEmail(event.target.value)}}
        />

        <input
          type='password'
          placeholder='DIGITE SUA SENHA'
        required
        value={senha}
        onChange={(event)=>{setSenha(event.target.value)}}
        />

        <button type='submit'>CADASTRAR</button>

      </form>

    </div>
  );
}

export default App;
