import {useState} from "react";
import axios from "axios";

function CreateUser(){
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    function CreateUser(){

        let user = JSON.stringify({name:'', job:''});
        alert(user);

        //axios aqui;
        axios.post('https://reqres.in/api/users', user)
        .then((response)=>{
            console.log(response);
            alert(response);
        })
        .catch((error)=>{
            console.log(error);
            alert(error);
        })
    }

    return(

        <form onSubmit={CreateUser} className="form">
                <h1> FORMULÁRIO DE CADASTRO</h1>
                <input
                type="Text" 
                placeholder='DIGITE SEU NOME AQUI'
                value={name}
                onChange={(event)=>{setName(event.target.value)}}
                />

                <input
                type="Text"
                placeholder='DIGITE SUA PROFISSÃO'
                value={job}
                onChange={(event)=>{setJob(event.target.value)}}
                />

                <button tipe="submit">Cadastrar</button>


        </form>        
    );
}
export default CreateUser;