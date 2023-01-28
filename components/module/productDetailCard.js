import React from 'react'
import Image from 'next/image'
import { Grid, Typography } from '@mui/material'
import { NumericFormat } from 'react-number-format';

const ProductDetailCard = ({ product }) => {
    return (
        <Grid container
            style={{
                marginTop: 30
            }}
        >
            <Grid
                item xs={12}
                md={12}
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        width: 800,
                        height: 375,
                        position: 'relative'
                    }}
                >
                    <Image src='https://fakeimg.pl/800x450/?text=product' priority alt='product' fill />
                </div>
            </Grid>
            <Grid item xs={12} md={12}>
                <div
                    style={{
                        marginTop: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 50
                    }}
                >
                    <Typography variant="h6">
                        {product.name}
                    </Typography>
                    <Typography variant="h6">
                        <NumericFormat
                            value={product.price}
                            prefix="Rp. "
                            allowLeadingZeros
                            thousandSeparator="."
                            decimalSeparator=","
                            displayType="text"
                        />
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default ProductDetailCard