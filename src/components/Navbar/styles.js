import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        },
    button: {
        background: 'linear-gradient(45deg, #2193b0 30%, #6dd5ed 90%)',
        border: 0,
        borderRadius: 50,
        boxShadow: '0 8px 24px rgba(149, 157, 165, 0.2)',
        color: '#e0e0e0',
        height: 48,
        padding: '0 30px',

    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
        }));
