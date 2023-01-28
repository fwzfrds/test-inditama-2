import AddProductForm from '@/components/module/addProductForm'
import Navbar from '@/components/module/navbar'
import ProductNav from '@/components/module/productNav'
import { Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const Index = () => {
    return (
        <>
            <Head>
                <title>
                    Tienda | Add Product
                </title>
            </Head>
            <Navbar />
            <Container>
                <ProductNav />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <AddProductForm />
                </div>
            </Container>
        </>
    )
}

export default Index