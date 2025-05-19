import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "@context/auth-context.tsx";
import { AuthLoginButton } from './components/auth/auth-login-button/AuthLoginButton';

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AuthProvider>


)
