import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Input from '../base/input'
import { NumericFormat } from 'react-number-format'
import Button from '../base/button'
import { update } from '../../pages/api/product'
import swal from 'sweetalert'

const EditProductForm = ({ product }) => {
    const router = useRouter()

    const [updatedName, setUpdatedName] = useState(product.name);
    const [updatedPrice, setUpdatedPrice] = useState(product.price);

    const handleChange = (e) => {
        const target = e.target

        if (target.name === "name") {
            setUpdatedName(target.value)
        } else if (target.name === "price") {
            let price = target.value

            price = price.replaceAll("Rp.", "")
            price = price.replaceAll(".", "")
            price = price.replace(/ +/g, "");

            setUpdatedPrice(price)
        }
    }

    const handleUpdate = async () => {
        let formData = new FormData()

        formData.append('product_id', product.id)
        formData.append('name', updatedName)
        formData.append('price', updatedPrice)

        try {
            const response = await update(formData)
        
            router.push(`/products/detail/${product.id}`)

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
                text: 'Error while updating data, please check the fields!',
                icon: "error",
                timer: 2000
            });
        }
    }

    return (
        <>
            <Input
                label="Product Name"
                name="name"
                placeholder="Product Name"
                defaultValue={product.name}
                style={{
                    width: 350
                }}
                onChange={(e) => handleChange(e)}
            />
            <NumericFormat
                name="price"
                value={product.price}
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
            />
            <Button
                onClick={() => handleUpdate()}
            >
                Save changes
            </Button>
        </>
    )
}

export default EditProductForm