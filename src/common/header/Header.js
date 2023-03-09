import './Header.scss';
import '../../common/fonts/fonts.scss';
import image1 from '../../assets/images/header-image1.svg';
import image2 from '../../assets/images/header-image2.svg';

import logo from '../../assets/images/Logo/Logo.svg';

export default function Header(props) { 
    return (
    <div className="field">
                
        <img className="f1-img1" src={image1} />
        <img className="f1-img2" src={image2} /> 
       
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
 
        <div className="f1-button">
            <a>
                {props.buttonImg}
                {props.buttonText}
            </a>
            <a className="f1-button-black" > {props.button2}</a>
        </div>
    </div>
    
    ); 
}