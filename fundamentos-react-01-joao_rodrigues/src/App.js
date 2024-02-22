import logo from './logo.svg';
import Livro from './components/Livro';
import './App.css';

import cavernas from './livros/cavernas_aco.jpg';
import sol from './livros/sol_desvelado.jpg';
import alvorada from './livros/robos_alvorada.jpg';

const desc = 'As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.'

function App() {
  return (
    <div className='App'>
      <Livro
        titulo="As Cavernas de Aço"
        autor="Isaac Asimov"
        imagem={cavernas}
        descricao={desc}
      />

      <Livro
        titulo="Sol Desvelado"
        autor="Isaac Asimov"
        imagem={sol}
        descricao={desc}
      />

      <Livro
        titulo="Robôs da Alvorada"
        autor="Isaac Asimov"
        imagem={alvorada}
        descricao={desc}
      />
    </div>
  );
}

export default App;
