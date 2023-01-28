import React from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import Button from '../base/button'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ProductNav = () => {
    const router = useRouter()
    const { detail: productID } = router.query

    const handleBack = () => {
        router.push('/')
    }

    const handleToEdit = () => {
        router.push(`/products/edit/${productID}`)
    }

    return (
        <Grid container>
            <Grid
                item
                xs={12}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleBack()}
                >
                    <KeyboardBackspaceIcon />
                </Button>
                {router.pathname.includes('edit') || router.pathname.includes('add') ?
                    <></>
                    :
                    <Button
                        variant="text"
                        color="success"
                        onClick={() => handleToEdit()}
                    >
                        Edit Product
                    </Button>
                }
            </Grid>
        </Grid>
    )
}

export default ProductNav