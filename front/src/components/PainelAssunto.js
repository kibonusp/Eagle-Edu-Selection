import '../styles/PainelAssunto.css';
import React, {useState, useEffect, useRef} from 'react';
import Assunto from './Assunto';

function PainelAssunto(props) {

    const [assuntos, setAssuntos] = useState();

    const updateTimer = useRef(null);

    function setAssuntosFromJson(json) {
        const assuntos = [];
        for (let assunto of json)
            assuntos.push({
                id: assunto.id, 
                name: assunto.name, 
                percentage: assunto.percentage
            });
        setAssuntos(assuntos);
    }

    useEffect(() => {
        if(!updateTimer.current) {
            const url = `http://localhost:3333/curso/${props.cursoId}/assunto`;

            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    setAssuntosFromJson(json);
                } catch (error) {
                    console.log("error", error);
                }
            };
            fetchData();
        }
    }, [props.cursoId]);

    useEffect(()=> {
        return () => {
            if (updateTimer.current) {
            clearTimeout(updateTimer.current);
            }
        };
    }, []);

    let assuntoTags = '';
    if (assuntos)
        assuntoTags = assuntos.map(assunto => <Assunto className="assunto" key={assunto.id} assunto={assunto}></Assunto>);

    return(
        <div id="painel-assunto">
            <div id="div-branco">
                {assuntoTags}
            </div>
        </div>
    )
}

export default PainelAssunto;