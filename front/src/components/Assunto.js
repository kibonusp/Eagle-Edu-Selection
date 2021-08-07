import '../styles/Assunto.css';
import capelo from '../assets/capelo.png';
import check from '../assets/check.png';

function Assunto(props) {
    let imageName = props.assunto.percentage === 100 ? check : capelo;
    let imageAlt = props.assunto.percentage === 100 ? 
    "Check sinalizando que as tarefas estão feitas" : "Capelo sinalizando que há tarefas pendentes";

    return (
        <div id="assunto">
            <img className="assunto-image" src={imageName} alt={imageAlt}></img>
            <div className="assunto-nome">
                <p>{props.assunto.name}</p>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{width: `${props.assunto.percentage}%`}}>
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default Assunto;