import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ValidMessage from './validMessage';

const Input = ({
    type,
    id,
    name,
    errors,
    onChange,
    placeholder,
    value,
    label,
    style,
    styleContainer,
    className,
    defaultValue,
    variant,
    children }) => {

    return (
        <div>
            <FormControl variant="standard">
                <label htmlFor={id}>
                    {label ? label : 'Text Field'}
                </label>
                <TextField
                    variant="outlined"
                    type={type}
                    id={id}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    style={style}
                    className={className}
                    defaultValue={defaultValue}
                >
                    {children}
                </TextField>
                {errors && Object.keys(errors).length > 0 ?
                    <ValidMessage
                        style={{ color: "red", margin: 0 }}
                        text={errors[`${name}`]}
                    />
                    :
                    <></>
                }
            </FormControl>
        </div>
    )
}

export default Input