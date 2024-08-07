import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent() {

    const navigate = useNavigate()

    const authContext = useAuth()

    const [username, setusername] = useState('in28minutes')

    const [password, setpassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)


    function handleUsernameChange(event){
        setusername(event.target.value)
    }

    function handlePasswordChange(event){
        setpassword(event.target.value)
    }

    async function handleSubmit() {
        if(await authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    // function handleSubmit(){
    //     if(authContext.login(username, password)){
    //         //authContext.setAuthenticated(true)
    //         setShowSuccessMessage(true)
    //         setShowErrorMessage(false)
    //         navigate(`/welcome/${username}`)
    //     }else{
    //         //authContext.setAuthenticated(false)
    //         setShowSuccessMessage(false)
    //         setShowErrorMessage(true)
    //     }
    // }

    // function SuccessMessageComponent() {
    //     if(showSuccessMessage){
    //         return <div className="successMessage">Authenticated successfully!</div>
    //     }
    //     return null
    // }
    
    // function ErrorMessageComponent(){
    //     if(showErrorMessage){
    //         return <div className="errorMessage">Authenticated failed. Please check your credentials.</div>
    //     }
    //     return null
    // }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {/* <SuccessMessageComponent/>
            <ErrorMessageComponent/> */}
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. 
                                                Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>

                <div>
                    <button type="submit" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}