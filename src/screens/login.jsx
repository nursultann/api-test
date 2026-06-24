import { useNavigate } from "react-router-dom";

const LoginPage = () =>{
    const navigate = useNavigate();
    const Login = () =>{
        navigate('/products-lists');
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="col-4 bg-white">
                            <input type="text" placeholder="Email" /> <br />
                            <input type="text" placeholder="Password" />
                            <button className="btn btn-primary" onClick={Login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;