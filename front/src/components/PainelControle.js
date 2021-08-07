import livro from '../assets/livro.png';
import seta from '../assets/seta.png';
import '../styles/PainelControle.css';
import React, {useState, useEffect} from 'react';

const PainelControle = () => {

    const [cursoId, setCursoId] = useState();
    const [cursos, setCursos] = useState();

    useEffect(() => {
        const url = "http://localhost:3333/curso";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const cursos = []
                for (let curso of json)
                    cursos.push({id: curso.id, name: curso.name});
                setCursos(cursos);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
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
    if (cursos)
        cursosJSX = cursos.map(curso => <button id={curso.id} key={curso.id} onClick={() => selectCurso(curso.id)}>{curso.name}</button>);

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
                    {cursosJSX}
                </div>
            </div>
        </div>
    )
}

export default PainelControle;