
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
  const [filter,setFilter] = useState("")

  const newListTransaction = listTransactions.filter(transaction => filter === '' ? true : transaction.type === filter)

  

  const sum = listTransactions.reduce((act,acc) => act + acc.value,0)

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
        <aside className='first'>

       <Form listTransactions={listTransactions} setListTransaction={setListTransaction}/>
        <section className='total__money'>
          <div className='total__money--div'>
            <h2>Valor total: </h2>
            <span>R$ {sum}</span>
          </div>
          <p>O valor se refere ao saldo</p>
        </section>
        </aside>
        <aside className='second'>
        <div className='menu'>
          <h2>Resumo financeiro</h2>
          <nav>
            <button type='button' onClick={() => setFilter('')}>Todos</button>
            <button type = 'button' onClick={() => setFilter('entrada')}>Entradas</button>
            <button type = 'button' onClick={() => setFilter('saída')}>Despesas</button>
          </nav>
        </div>
        <List newListTransactions = {newListTransaction} setListTransaction = {setListTransaction} filter = {filter} setFilter = {setFilter}/>
        </aside>

      </main>
      </>
  }
  </>
    
  );
}

export default App;
