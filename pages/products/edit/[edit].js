import React, { useEffect, useState } from 'react'
import EditProductForm from '@/components/module/editProductForm'
import Navbar from '@/components/module/navbar'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import CircularLoading from '@/components/base/circularLoading'
import { detail } from '../../api/product'
import ProductNav from '@/components/module/productNav'
import Head from 'next/head'

const EditProduct = () => {

    const router = useRouter()
    const { edit: productID } = router.query

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await detail(productID)
                if (response.data.data) {
                    const data = response.data.data;
                    setProduct(data)
                }
                setLoading(false)
            } catch (error) {
                console.log(error);
                if (error.response.data.data == null) {
                    router.push("/404")
                }
            }
        }

        if (productID) {
            fetchProduct();
        }

    }, [productID])

    return (
        <>
            <Head>
                <title>
                    Tienda | Edit Product
                </title>
            </Head>
            <Navbar />
            <Container>
                {loading ?
                    <CircularLoading />
                    :
                    <>
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
                            <EditProductForm
                                product={product}
                            />
                        </div>
                    </>
                }
            </Container>
        </>
    )
}

export default EditProduct