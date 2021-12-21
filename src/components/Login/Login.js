import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError, logout } = useFirebase();

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    const handleGoogleSignOut = () => {
        logout();
    }

    return (
        <>
            {
                !user?.email && <Button sx={{ width: '75%', m: 1 }} onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            }
            

            {
                user?.email && <Button sx={{ width: '75%', m: 1 }} onClick={handleGoogleSignOut} variant="contained">Sign Out</Button>
            }
        </>
    );
    
                
}

export default Login;