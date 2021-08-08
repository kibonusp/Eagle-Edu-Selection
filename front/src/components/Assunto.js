import '../styles/Assunto.css';
import capelo from '../assets/capelo.png';
import check from '../assets/check.png';
import Missao from './Missao';
import {useState, useEffect} from 'react';

function Assunto(props) {
    let imageName = props.assunto.percentage === 100 ? check : capelo;
    let imageAlt = props.assunto.percentage === 100 ?
    "Check sinalizando que as tarefas estão feitas" : "Capelo sinalizando que há tarefas pendentes";
    const [pct, setPct] = useState(props.assunto.percentage);

    const [pctChanged, setpctChanged] = useState();
    const [missoes, setMissoes] = useState();
    
    useEffect(() => {
        fetch(`http://localhost:3333/assunto/${props.assunto.id}/missao`)
            .then(response => response.json())
            .then(data => setMissoes(data));
    });

    useEffect(() => {
        fetch(`http://localhost:3333/curso/${props.assunto.CursoId}/assunto/${props.assunto.id}`)
            .then(response => response.json())
            .then(data => setPct(data[0].percentage));
    });
    
    let missaoTags = '';
    if (missoes)
        missaoTags = missoes.map(missao => <Missao key={missao.id} missao={missao} setpctChanged={setpctChanged} pctChanged={pctChanged}></Missao>);

    const openMissoes = () => {
        document.getElementById("content-assunto" + props.assunto.id).classList.toggle("show");
    }

    return (
        <div className="dropdown-assunto">
            <button id="assunto" onClick={() => openMissoes()}>
                <img className="assunto-image" src={imageName} alt={imageAlt}></img>
                <div className="assunto-nome">
                    <p>{props.assunto.name}</p>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{width: `${pct}%`}}>
                        &nbsp;
                    </div>
                </div>
            </button>
            <div className="content-assunto" id={"content-assunto" + props.assunto.id}>
                {missaoTags}
            </div>
        </div>
    )
}

export default Assunto;