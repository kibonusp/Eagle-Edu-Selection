import livro from '../assets/livro.png';
import seta from '../assets/seta.png';
import '../styles/PainelControle.css';

import React, {useState} from 'react';

function PainelControle() {

    const [curso, setCurso] = useState();

    const showCursos = () => {
        document.getElementById("seta").classList.toggle("setaRotate");
        document.getElementById("dropbtn").classList.toggle("changeBtnColor");
        document.getElementById("content-ctrl").classList.toggle("show");
    };

    const selectCurso = id => {
        if (curso === undefined) {
            setCurso(id);
            document.getElementById(id).classList.toggle("selectCurso");
        }
        else {
            document.getElementById(curso).classList.toggle("selectCurso");
            setCurso(id);
            document.getElementById(id).classList.toggle("selectCurso");
        }
    }

    return(
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
                    <button id="curso1" onClick={() => selectCurso("curso1")}>Curso 1</button>
                    <button id="curso2" onClick={() => selectCurso("curso2")}>Curso 2</button>
                    <button id="curso3" onClick={() => selectCurso("curso3")}>Curso 3</button>
                </div>
            </div>
        </div>
    )
}




export default PainelControle;