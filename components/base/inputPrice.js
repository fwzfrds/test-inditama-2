import React from 'react'
import { NumericFormat } from 'react-number-format'
import FormControl from '@mui/material/FormControl';
import ValidMessage from './validMessage';

const InputPrice = ({ id, name, label, value, placeholder, onChange, errors }) => {

    return (
        <div>
            <FormControl variant="standard">
                <label htmlFor={id}>
                    {label ? label : 'Text Field'}
                </label>
                <NumericFormat
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    prefix="Rp. "
                    allowLeadingZeros
                    thousandSeparator="."
                    decimalSeparator=","
                    style={{
                        width: 350,
                        height: 56,
                        padding: 15,
                        outlineColor: "#2196F3",
                    }}
                    onChange={onChange}
                />
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

export default InputPrice