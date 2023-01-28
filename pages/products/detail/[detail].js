import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/module/navbar'
import Head from 'next/head'
import { Container } from '@mui/material'
import ProductDetailCard from '@/components/module/productDetailCard'
import { detail } from '../../api/product'
import CircularLoading from '@/components/base/circularLoading'
import ProductNav from '@/components/module/productNav'

const ProductDetail = () => {

    const router = useRouter()
    const { detail: productID } = router.query

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
                    Tienda | {product?.name}
                </title>
            </Head>
            <Navbar />
            <Container>
                {loading ?
                    <CircularLoading />
                    :
                    <>
                        <ProductNav />
                        <ProductDetailCard
                            product={product}
                        />
                    </>
                }
            </Container>
        </>
    )
}

export default ProductDetail