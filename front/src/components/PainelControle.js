import livro from '../assets/livro.png';
import seta from '../assets/seta.png';
import '../styles/PainelControle.css';
import {useState, useEffect} from 'react';
import PainelAssunto from './PainelAssunto';

const PainelControle = () => {

    const [cursoId, setCursoId] = useState(undefined);
    const [cursos, setCursos] = useState();

    useEffect(() => {
        fetch('http://localhost:3333/curso')
        .then(response => response.json())
        .then(data => setCursos(data));
    }, []);

    const showCursos = () => {
        document.getElementById("seta").classList.toggle("setaRotate");
        document.getElementById("dropbtn").classList.toggle("changeBtnColor");
        document.getElementById("content-ctrl").classList.toggle("show");
    };

    const selectCurso = id => {
        if (cursoId === undefined) {
            setCursoId(id);
            document.getElementById(id).classList.toggle("selectCurso");
        }
        else {
            document.getElementById(cursoId).classList.toggle("selectCurso");
            setCursoId(id);
            document.getElementById(id).classList.toggle("selectCurso");
        }
    };

    let cursosJSX = "";
    let painel_assunto = "";
    if (cursos){
        cursosJSX = cursos.map(curso => <button id={curso.id} key={curso.id} onClick={() => selectCurso(curso.id)}>{curso.name}</button>);
        painel_assunto = <PainelAssunto cursoId={cursoId}></PainelAssunto>
    }

    return(
        <div className="paineis">
            <div id="ctrl">
                <p>PAINEL DE CONTROLE</p>
                <div className="dropdown-ctrl">
                    <button className="dropbtn-ctrl" id="dropbtn" onClick={() => showCursos()}>
                        <div className="dropbtn-left">
                            <img src={livro} id="livro" alt="Ícone de um livro"></img>
                            <p>Cursos</p>
                        </div>
                        <img src={seta} id="seta" alt="Seta indicando lista de cursos"></img>
                    </button>
                    <div id="content-ctrl" className="dropdown-content-ctrl">
                        {cursosJSX}
                    </div>
                </div>
            </div>
            {painel_assunto}
        </div>
    )
}

export default PainelControle;