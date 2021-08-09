import React from 'react'
import { makeStyles, TextField } from "@material-ui/core";


const Input = ({ ...rest }) => {

    const classes = useInputStyles();
    return (
        <>
            <TextField
                variant="outlined"
                className={classes.input}
                required
                InputLabelProps={{
                    shrink: true,
                }}
                {...rest}
            />
        </>
    )
}

export default Input;


const useInputStyles = makeStyles((theme) => ({
    input: {


    },
    innerContainer: {
        borderRadius: '10px',
        border: 'solid #000',

        "&$error": {
            borderColor: 'red',
        }
    },
    error: {},
}));