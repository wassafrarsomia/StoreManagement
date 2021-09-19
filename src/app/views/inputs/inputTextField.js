
import { TextField } from "@material-ui/core";
import React from "react";

const InputTextField = ({
    field,
    form: { touched, errors, handleChange, values },
    ...props
}) => (
    <TextField
        id={field.name}
        variant='outlined'
        size='small'
        fullWidth
        error={Boolean(touched[field.name] && errors[field.name])}
        helperText={touched[field.name] && errors[field.name]}
        onChange={handleChange}
        value={values[field?.name]}
        // {...field}
        {...props}
    />
);
export default InputTextField;
