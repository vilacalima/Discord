import './Card.scss';

export default function Card(props) { 
    return (
    
    <div className="card-conteudo">
    
        <img src={props.imagem} />
        <h1>{props.titulo} </h1>
        
        <div className="card-separator"></div>
        
        <p>{props.conteudo}</p>
    </div>
    ); 
}

