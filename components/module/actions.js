import React from 'react'
import { useRouter } from 'next/router'
import Button from '../base/button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { delProduct } from '../../pages/api/product'
import swal from 'sweetalert';

const Actions = ({ productID, fetchProducts }) => {
    const router = useRouter()

    const handleDetail = () => {
        router.push(`/products/detail/${productID}`)
    }

    const handleEdit = () => {
        router.push(`/products/edit/${productID}`)
    }

    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: `This product will be deleted`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(async (isOkay) => {
            if (isOkay) {
                try {
                    const response = await delProduct(productID)
                    console.log(response);
                    swal({
                        title: "Succes",
                        text: "Delete Successful",
                        icon: "success",
                        timer: 2000
                    })

                    fetchProducts()
                } catch (error) {
                    swal({
                        title: "Error",
                        text: `Error while deleting data`,
                        icon: "error",
                        timer: 2000
                    });
                }
            }
        })
    }

    return (
        <div
            style={{
                display: 'flex',
                gap: 15
            }}
        >
            <Button
                color="primary"
                size="small"
                onClick={() => handleDetail()}
            >
                <VisibilityIcon />
            </Button>
            <Button
                style={{ color: '#fff' }}
                color="success"
                size="small"
                onClick={() => handleEdit()}
            >
                <EditIcon />
            </Button>
            <Button
                style={{ color: '#fff' }}
                color="error"
                size="small"
                onClick={() => handleDelete()}
            >
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default Actions