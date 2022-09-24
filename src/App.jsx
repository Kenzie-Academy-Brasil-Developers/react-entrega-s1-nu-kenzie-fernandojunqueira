
import { useState } from 'react';
import './App.css';
import trash from './components/ButtonTrash/img/trashBlack.png'
import logo from './NuKenzie.png'
import Form from './components/Forms';
import List from './components/List';
import LandPage from './components/landPage'

function App() {

  const [listTransactions,setListTransaction] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

  const sum = listTransactions.reduce((act,acc) => act + acc.value,0)

  function all(){
    setListTransaction(listTransactions.filter(transaction => typeof(transaction.type) === 'string'))
  }

  function filterEntry(){
    setListTransaction(listTransactions.filter(transaction => transaction.type === 'entrada'))
  }
  function filterOut(){
    setListTransaction(listTransactions.filter(transaction => transaction.type === 'saída'))
  }

  const [isLandPage,setIsLandPage] = useState(true)
 

  return (
    <>
    {isLandPage ? 
      <LandPage setIsLandPage = {setIsLandPage} isLandPage={isLandPage}/>
      :
      <> 
      <header>
        <div className="container">
          <img src={logo} alt="" />
          <button type='button' onClick={() => setIsLandPage(!isLandPage)}>Inicio</button>
        </div>
      </header>
      <main>
        <aside>

       <Form um={listTransactions} dois={setListTransaction}/>
        <section className='total__money'>
          <div className='total__money--div'>
            <h2>Valor total: </h2>
            <span>R$ {sum}</span>
          </div>
          <p>O valor se refere ao saldo</p>
        </section>
        </aside>
        <aside>
        <div className='menu'>
          <h2>Resumo financeiro</h2>
          <nav>
            <button type='button' onClick={all}>Todos</button>
            <button type = 'button' onClick={filterEntry}>Entradas</button>
            <button type = 'button' onClick={filterOut}>Despesas</button>
          </nav>
        </div>
        <List listTransactions = {listTransactions} setListTransaction = {setListTransaction}/>
        </aside>

      </main>
      </>
  }
  </>
    
  );
}

export default App;
