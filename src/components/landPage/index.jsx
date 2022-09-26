import './styles.css'
import logo from './NuKenzieWhite.png'
import image from './illustration.svg'


const LandPage = (props) => {
    return (
     <div className="land">
        <div className='div__land__page'>
            <div className='inicio'>
                <img src={logo} alt="" />
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <button type='button' onClick={() => props.setIsLandPage(!props.isLandPage)} >Iniciar</button>
            </div>
            <figure>
                <img src={image} alt="" />
            </figure>
        </div>
     </div>   
    )
}
export default LandPage