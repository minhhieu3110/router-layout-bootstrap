import '../Style/Login-Register.css'
import {useNavigate} from "react-router";
import {useState} from "react";
import axios from "axios";
export default function Register(){
    const navigate = useNavigate();
    const [dataRegister, setDataRegister] = useState({username: "", password: ""});
    const [notice, setNotice] = useState('')
    const register = async () =>{
        try {
            await axios.post('http://localhost:4000/register', dataRegister).then((res) => {
                console.log(res.data)
                setNotice('Register Success!!!')
            })
        }catch {
            setNotice('Register Unsuccessful!!!')
        }
    }
    return(
        <div className='container'>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 register">
                    <center>
                        <h2>Register</h2>
                        <br/>
                        <input onChange={(e)=>{
                            setDataRegister({...dataRegister, username: e.target.value})
                        }} placeholder={'Username'}/><br/><br/>
                        <input type='password' onChange={(e)=>{
                            setDataRegister({...dataRegister, password: e.target.value})
                        }} placeholder={'Password'}/><br/><br/>
                        <button className='btn-action' onClick={register}>Register</button>
                        <button className='btn-action' onClick={()=>navigate('/login')}>Login</button>
                        {notice && <center><p style={{color:'red'}}>{notice}</p></center>}
                    </center>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}