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
                InputProps={{
                    classes: {
                        notchedOutline: classes.notchedOutline
                    }
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
    notchedOutline: {
        borderColor: "#3071b4  "
    },
}));