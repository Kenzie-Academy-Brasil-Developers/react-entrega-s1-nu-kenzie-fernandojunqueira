import './styles.css'
import { useState } from 'react'

const Form = ({listTransactions,setListTransaction}) => {


    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setTyp] = useState('entrada')

    function handleSubmit (e){
        e.preventDefault()
    
        setListTransaction([...listTransactions,{ description: description, type: type, value: Number(value) }])
        setDescription('')
        setValue('')
    
      }


    return (
        <form onSubmit={handleSubmit}>
        <label >Descrição</label>
        <input type="text" placeholder='Digite aqui sua descrição' name='descrição' onChange={event => setDescription(event.target.value)} value={description} />
        <span>Ex: Compra de roupas</span>
        <div className="values">
          <div className="value">
            <label >Valor</label>
            <input type="text" placeholder='1' name='valor' onChange={event => setValue(event.target.value)} value = {value} /><span>R$</span>
          </div>
          <div className="type__of__value">
            <label > Tipo de valor</label>
            <select  onChange={event => setTyp(event.target.value)} >
              <option value="entrada">Entrada</option>
              <option value="saída">Despesa</option>
            </select>
          </div>
        </div> 
        <button type='submit'>Inserir Valor</button>
      </form>
    )
}

export default Form