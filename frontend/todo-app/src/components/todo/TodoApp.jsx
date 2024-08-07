
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'


export default function TodoApp() {
    function AuthenticatedRoute({children}) {
        const authContext = useAuth()
        
        if(authContext.isAuthenticated)
            return children
    
        return <Navigate to="/" />
    }

    return(
        <div className="TodoApp">
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent /> 
                <Routes>              
                    <Route path='*' element={<ErrorComponent /> }></Route>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                            <WelcomeComponent />
                        </AuthenticatedRoute> 
                    } />

                    <Route path='/todos' element={
                        <AuthenticatedRoute>
                            <ListTodosComponent /> 
                        </AuthenticatedRoute>
                    } />

                    <Route path='/todo/:id' element={
                        <AuthenticatedRoute>
                            <TodoComponent /> 
                        </AuthenticatedRoute>
                    } />

                    <Route path='/logout' element={
                        <AuthenticatedRoute>
                            <LogoutComponent /> 
                        </AuthenticatedRoute>
                    } />

                </Routes>
                
            </BrowserRouter>
            </AuthProvider>
        </div>
    )
}