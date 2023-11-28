import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='menu'>
        <h1>React TS</h1>
      </header>
      <main className='container'>
        <div className='Form'>
          <div className='agrupar'>
            <h2>Tarefas em Breve</h2>

          </div>
          <div className='agrupar'>
            <label>Titulo:</label>
            <input id='titulo' type='text' placeholder='Titulo da Tarefa'/>

          </div>
          <div className='agrupar'>
            <label>Dificuldade:</label>
            <input id='Dificuldade' type='number' placeholder='0' />
            
          </div>
          <div className='agrupar'>
            <button id='confirmacao' className='butao'>Criar Tarefa</button>

          </div>

        </div>

      </main>
      <footer>
        <h3>Tarefas - React &copy;  2023</h3>
      </footer>

    </div>
  );
}

export default App;
