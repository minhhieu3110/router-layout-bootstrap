import '../Style/Login-Register.css'
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
export default function Login(){
    const navigate = useNavigate();
    const [account, setAccount] = useState([]);
    const [dataLogin, setDataLogin] = useState({username: '', password: ''});
    const [notice, setNotice] = useState('')
    useEffect(() => {
        axios.get('http://localhost:4000/account').then((res)=>{
            setAccount(res.data)
            console.log(res.data)
        })
    }, []);
    const login = () =>{
        const verifyAccount = account.find((acc) => acc.username === dataLogin.username && acc.password === dataLogin.password);
        verifyAccount ? navigate('/'): setNotice('Username or Password Invalid')
    }
    return(
        <div className='container'>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 login">
                    <center>
                        <h2>Login</h2>
                        <br/>
                        <input onChange={(e) =>{
                            setDataLogin({...dataLogin, username: e.target.value})
                        }} placeholder={'Username'}/><br/><br/>
                        <input type='password' onChange={(e)=>{
                            setDataLogin({...dataLogin, password: e.target.value})
                        }} placeholder={'Password'}/><br/><br/>
                        <button className='btn-action' onClick={login}>Login</button>
                        <button className='btn-action' onClick={()=>navigate('/register')}>Register</button>
                        {notice && <center><p style={{color:'red'}}>{notice}</p></center>}
                    </center>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}