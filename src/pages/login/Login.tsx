import React, { FC, FormEvent, useState } from "react";
import { Box, Button, IconButton, InputAdornment, Paper, Typography } from "@mui/material";
import { flexCenter, flexStyles, standardShadow } from "../../utils/styleUtils";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AppTextField } from "../../components/UI/AppInput";
import { authApi } from "../../services/authService";

const Login: FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [fetchLogin] = authApi.useFetchLoginMutation();

    const onLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetchLogin({ email, password }).unwrap();
    };

    return (
        <Box
            sx={ {
                width: 1,
                height: "100vh",
                backgroundColor: theme => theme.appPalette.container,
                ...flexCenter
            } }
        >
            <Paper
                elevation={ 0 }
                sx={ {
                    p: theme => theme.spacing(5),
                    borderRadius: theme => theme.spacing(3),
                    transition: "all 1s ease-out",
                    ...standardShadow
                } }
            >
                <Box
                    component={ "form" }
                    sx={ flexStyles("center", "center", "column") }
                    onSubmit={ onLogin }
                >
                    <Typography variant={ "h5" } sx={ { fontWeight: 400, color: theme => theme.appPalette.mainColor, my: 2 } }>
                        Вход
                    </Typography>
                    <AppTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        name="email"
                        placeholder="Почта"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                        autoFocus
                        autoComplete="email"
                        size={ "small" }
                        sx={ { maxWidth: 400 } }
                    />
                    <AppTextField
                        sx={ { maxWidth: 400 } }
                        variant="outlined"
                        margin="normal"
                        size={ "small" }
                        fullWidth
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        type={ showPassword ? "text" : "password" }
                        InputProps={ {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ () => setShowPassword(!showPassword) }
                                        onMouseDown={ e => e.preventDefault() }
                                        sx={ { color: theme => theme.appPalette.mainColor } }
                                    >
                                        { showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        } }
                        value={ password }
                        onChange={ e => setPassword(e.target.value) }
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        variant="text"
                        color="primary"
                        sx={ { mt: 2 } }
                    >
                        Войти
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;