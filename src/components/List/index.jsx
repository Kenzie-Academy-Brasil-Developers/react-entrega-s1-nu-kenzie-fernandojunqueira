import { FaTrash } from "react-icons/fa";
import './styles.css'

const List = ({newListTransactions,setListTransaction,filter,setFilter}) => {

    function btnTrash(id){

        setListTransaction((prev) => prev.filter((transaction,index) => index !== id ))
       
    }
    

    return (
        <ul>
          
          { newListTransactions.map((transaction,index) => {

            
            const colorBorder = transaction.type === 'entrada' ? "green" : ''

            return (
            <li  className={`${colorBorder}`} key={index}>
              <div className='description'>
                <h2>{transaction.description}</h2>
                <p>{transaction.type}</p>
              </div>
              <div className='show__values'>
                <p>R$ {transaction.value}</p>
                <button className='trashGray' onClick={() => btnTrash(index)}>
                    <span className="teste"><FaTrash className="oi"/></span>
                    </button>
              </div>
            </li>
           
            ) 
          })}
         



          
        </ul>
    )
}

export default List