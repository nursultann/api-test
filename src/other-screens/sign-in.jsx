import axios from "axios";
import { useEffect, useState } from "react";

function SignIn(){
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [users,setUsers] = useState([]);

    const fetchUsers = async ()=>{
        const peoples = await axios({
            method:'get',
            url:'https://66fe26996993693089573af6.mockapi.io/users'
        })
        console.log('peoples', peoples);
        if(peoples.status == 200){
            setUsers(peoples.data);
        }else{
            setUsers([]);
        }    
    }
    useEffect(()=>{
        fetchUsers();
    },[]);
    const Login = ()=>{
        if(login != "" && password != ""){
            const user = users.filter( (i)=> i.email == login && i.password == password);
            if(user.length > 0){
                localStorage.setItem('token',user[0].id);
                window.location.href = '/profile';
            }else{
                alert('Login or password incorrect!');
            }
        }else{
            alert('Fields empty!');
        }
    }
    return(
        <>
            <input type="text" onChange={(e)=>setLogin(e.target.value)}/>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={Login}>Login</button>
        </>
    )
}
export default SignIn; 