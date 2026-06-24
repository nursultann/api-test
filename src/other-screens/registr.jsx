import axios from "axios";
import { useEffect, useState } from "react";

function Registr(){
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [avatar,setAvatar] = useState("");
    const [description,setDescription] = useState("");
    const [users,setUsers] = useState([]);
    const Register = async ()=>{
        if(name != "" && password != "" && email != "" && avatar != "" && description != ""){
            const response = await axios({
                method:'post',
                url:'https://66fe26996993693089573af6.mockapi.io/users',
                data:{
                    name:name,
                    email:email,
                    password:password,
                    avatar:avatar,
                    description:description
                }
            });
            console.log('data',response);      
            if(response.status == 201){
                alert('Success!');
                fetchUsers();
            }else{
                alert('Error!');
            }
        }else{
            alert('Some fields empty!');
        }
    }
    const fetchUsers = async ()=>{
        const response = await axios({
            method:'get',
            url:'https://66fe26996993693089573af6.mockapi.io/users',
        });
        console.log('data users',response);      
        if(response.status == 200){
            setUsers(response.data);
        }else{
            setUsers([]);
        }
    }
    const deleteUser = async (id)=>{
        const response = await axios({
            method:'delete',
            url:'https://66fe26996993693089573af6.mockapi.io/users/'+id,
        });
        console.log('data users',response);      
        if(response.status == 200){
            alert('Success!')
            fetchUsers();
        }else{
            alert('Something went wrong!')
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[])
    return(
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <br />
            <input type="text" onChange={(e)=>setPassword(e.target.value)} />
            <br />
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <input type="text" onChange={(e)=>setAvatar(e.target.value)} />
            <br />
            <textarea name="" id="" onChange={(e)=>setDescription(e.target.value)}></textarea>
            <br />
            <button onClick={Register}>Register</button>
            <br />
            <div className="col-12">
            {users.length > 0 ?
                <>
                {users.map((i)=>
                    <div className="text-dark">
                        <p>{i.email}</p>
                        <button onClick={()=>deleteUser(i.id)}>del</button>
                    </div>
                )
                }
                </>
                    :
                <>
                Empty
                </>
            }
            </div>
        </div>

    )
}
export default Registr;