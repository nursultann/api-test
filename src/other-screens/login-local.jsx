import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
export function LoginLocal() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const handleLogin = () => {
            const user = users.filter((u) => u.email == email && u.password == password);
            console.log(user);
            if (user.length > 0) {
                localStorage.setItem('token', user[0].id);
                // userDetail();
                navigate('/main');
            } else {
                alert('Invalid email or password');
            }
       
    }
    const userDetail = () => {
        const data = users.filter((u) => u.id == localStorage.getItem('token'));
        if(data.length > 0){
            setUser(data[0]);
        }else{
            setUser(null);
        }
    }
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    }
    useEffect(()=>{
        userDetail();
    },[])
    return (
        <div>
            {
                user != null ?
                    <div>
                        <h2>Welcome, {user.email}</h2>
                        <button onClick={() => logout()}>Logout</button>
                    </div>
                    :
                    <div>
                        <h1>Local Login</h1>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                        <button onClick={handleLogin}>Login</button>
                    </div>
            }

        </div>
    )
}
