import { useNavigate, Link } from "react-router-dom";
import { users } from "../data/users";
import { useEffect,useState } from "react";


const LeftSidebar = () => {
    const[user, setUser] = useState(null);
    const navigate = useNavigate();
    const LinkTo = (path) =>{
        navigate(path)
    }
    const UserDetail = ()=>{
        const data = users.filter((u) => u.id == localStorage.getItem('token'));
        if(data.length > 0){
            setUser(data[0])
        }else{
            setUser(null);
            navigate('/login');
        }
    }
    useEffect(()=>{
        UserDetail();
    },[]);
    const LogOut = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    }
    return(
        <div className="col-12">
            <p>{user != null ? user.email : 'User'}</p>
            <button onClick={LogOut}>LogOut</button>
            <Link to={'/products-lists'}>Products</Link> <br />
            <button onClick={() => LinkTo('/users')}>Users</button> <br />
            <button onClick={() => LinkTo('/help')}>Help</button>
        </div>
    )
}
export default LeftSidebar;