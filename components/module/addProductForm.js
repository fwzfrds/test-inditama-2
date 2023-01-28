import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { addProduct } from '../../pages/api/product'
import swal from 'sweetalert'
import { Typography } from '@mui/material'
import Input from '../base/input'
import InputPrice from '../base/inputPrice'
import { validateAddForm } from '../../utils/validation'
import Button from '../base/button'

const AddProductForm = () => {
    const router = useRouter()

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [formErrors, setFormErrors] = useState({})

    const handleChange = (e) => {
        const target = e.target

        if (target.name === "name") {
            setName(target.value)
        } else if (target.name === "price") {
            let price = target.value

            price = price.replaceAll("Rp.", "")
            price = price.replaceAll(".", "")
            price = price.replace(/ +/g, "");

            setPrice(price)
        }
    }

    const handleAdd = async () => {
        let errorDataForms = {}
        let formData = new FormData()
        const data = {
            name, price
        }

        errorDataForms = validateAddForm(data)
        if (Object.keys(errorDataForms).length > 0) {
            setFormErrors(errorDataForms)
            swal({
                title: "error",
                text: 'Error while adding data, please check the fields!',
                icon: "error",
                timer: 2000
            });
            return
        }

        formData.append('name', data.name)
        formData.append('price', data.price)

        try {
            const response = await addProduct(formData)
        
            router.push('/')
            
            swal({
                title: "Success",
                text: `${response.data.message}`,
                icon: "success",
                timer: 2000
            });

        } catch (error) {
            console.log(error);
            swal({
                title: "error",
                text: 'Error while adding data, please check the fields!',
                icon: "error",
                timer: 2000
            });
        }
    }

    return (
        <>
            <Typography variant="h5">
                Add New Product
            </Typography>
            <Input
                label="Product Name"
                name="name"
                placeholder="Ex: Gaming Chair"
                style={{
                    width: 350
                }}
                onChange={(e) => handleChange(e)}
                errors={formErrors}
            />
            <InputPrice
                label="Product Price"
                name="price"
                placeholder='Ex: Rp. 150.000'
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
                onChange={(e) => handleChange(e)}
                errors={formErrors}
            />
            <Button
                onClick={() => handleAdd()}
            >
                Add Product
            </Button>
        </>
    )
}

export default AddProductForm