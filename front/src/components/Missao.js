import check from '../assets/check.png';
import checkverde from '../assets/checkverde.png';
import '../styles/Missao.css';
import {useState, useEffect} from 'react';

function Missao(props) {
    let completed = props.missao.completed;
    const [image, setImage] = useState(props.missao.completed ? checkverde : check);
    const [alt, setAlt] = useState(props.missao.completed ? "Tarefa concluída" : "Tarefa não concluída");

    useEffect(() => {
        fetch(`http://localhost:3333/assunto/${props.missao.AssuntoId}/missao/${props.missao.id}`)
        .then(response => response.json())
        .then(data => completed = data[0].completed);
    }, [props.pctChanged]);

    function updateCompleted() {
        let body = {
            missao_id: props.missao.id,
            assunto_id: props.missao.AssuntoId,
            completed: completed
        }
        let formBody = [];
        for (let item of Object.entries(body)) {
            let encodedKey = encodeURIComponent(item[0]);
            let encodedValue = encodeURIComponent(item[1]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*'
            },
            body: formBody
        };
        fetch('http://localhost:3333/missao', requestOptions);
    }
    
    const changeImage = () => {
        if (completed) {
            setImage(check);
            setAlt("Tarefa não concluída");
        }
        else {
            setImage(checkverde);
            setAlt("Tarefa concluída");
        }
        completed = !completed;
        updateCompleted();
        props.setpctChanged(!(props.pctChanged));
    };

    return (
        <div className="missaodiv">
            <p>{props.missao.text}</p>
            <input type="image" src={image} alt={alt} onClick={() => changeImage()}/>
        </div>
    )
}

export default Missao;