import '../styles/PainelAssunto.css';
import {useState, useEffect} from 'react';
import Assunto from './Assunto';

function PainelAssunto(props) {
    const [assuntos, setAssuntos] = useState();

    useEffect(() => {
        fetch(`http://localhost:3333/curso/${props.cursoId}/assunto`)
            .then(response => response.json())
            .then(data => setAssuntos(data));
    }, [props.cursoId]);

    let assuntoTags = '';
    if (assuntos)
        assuntoTags = assuntos.map(assunto => <Assunto key={assunto.id} assunto={assunto}></Assunto>);

    return(
        <div id="painel-assunto">
            <div id="div-branco">
                {assuntoTags}
            </div>
        </div>
    )
}

export default PainelAssunto;