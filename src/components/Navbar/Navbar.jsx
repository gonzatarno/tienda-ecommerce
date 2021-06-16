import React from 'react';
import { AppBar, Toolbar, Button} from '@material-ui/core';
import { CartWidget } from './CartWidget';
import useStyles from './styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        primary: {
        main: "#0288d1"
        },
        secondary: {
        main: "#e0e0e0"
        }
    }
});

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
            <AppBar position="fixed" color="secondary">
                <Toolbar className={classes.toolbar}>
                    <img src="/imagenes/logo.svg" alt="Logo" height="40px" />
                        <Button className={classes.button} color="inherit">
                            <CartWidget />
                        </Button>                        
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default Navbar

