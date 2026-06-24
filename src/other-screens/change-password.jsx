import axios from "axios";
import { useEffect, useState } from "react";

function ChangePassword() {
    const id = localStorage.getItem('token');
    const [user, setUser] = useState(null);
    const [password,setPassword] = useState("");
    const [newPassword,setNewpassword] = useState("");

    const fetchUser = async ()=> {
        const personData = await axios({
            method: 'get',
            url: 'https://66fe26996993693089573af6.mockapi.io/users/' + id
        })
        console.log('peoples', personData);
        if (personData.status == 200) {
            setUser(personData.data);
        } else {
            setUser(null);
        }
    }
    useEffect(() => {
        if (id != null) {
            fetchUser();
        }else{
            window.location.href = '/'        
        }
    }, [])

    const updatePassword = async ()=>{
        if(user.password == password){
            const personData = await axios({
                method: 'put',
                url: 'https://66fe26996993693089573af6.mockapi.io/users/' + id,
                data:{
                    password:newPassword
                }
            })
            console.log('peoples', personData);
            if (personData.status == 200) {
                alert('Password has changed!');
            } else {
                alert('Something went wrong!');
            }
        }else{
            alert('Old password is incorrect!');
        }
    }
    return (
        <>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} /> <br />
        <input type="text" onChange={(e)=>setNewpassword(e.target.value)} /> <br />
        <button onClick={updatePassword}>Update password</button>


        </>
    )
}
export default ChangePassword;