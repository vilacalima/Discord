import './Header.scss';
import '../../common/fonts/fonts.scss';
import image1 from '../../assets/images/header-image1.svg';
import image2 from '../../assets/images/header-image2.svg';
import lupa from '../../assets/images/lupaPequena.svg';

export default function HeaderSuporte(props) { 
    return (
        <div className="field">
                
            <img className="f1-img1" src={image1} />
            <img className="f1-img2" src={image2} /> 
        
            <h2>{props.titulo}</h2>
    
            <div className="f1-search">
                <input>
                {/* <img src={lupa}></img>
                {props.searchImg} */}
                
                </input>
            </div>
        </div>
    
    ); 
}