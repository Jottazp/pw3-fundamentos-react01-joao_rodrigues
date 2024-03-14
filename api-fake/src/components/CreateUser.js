import {useState} from "react";
import axios from "axios";

function CreateUser(){
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    function createuser(event){

        event.preventDefault();

        let user = JSON.stringify({name:name, job:job});
        console.log(user);

        // axios aqui
        axios.post('https://reqres.in/api/users', user)
            .then((response)=>{
                // alert(response);
                console.log(response);
            })
            .catch((error)=>{
                // alert(error);
                console.log(error);
            })
    }

    return(

        <form onSubmit={createuser} className="form">
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