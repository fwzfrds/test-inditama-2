import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@/components/base/button'
import Input from '@/components/base/input'
import { index } from '../../api/product'
import Container from '@mui/material/Container';
import ProductsTable from '@/components/module/productsTable';
import CircularLoading from '@/components/base/circularLoading';
import AddIcon from '@mui/icons-material/Add';
import Navbar from '@/components/module/navbar'
import Layout from '@/components/layout/layout'
import Head from 'next/head'

const List = () => {
    const router = useRouter()

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await index()
            if (response.data.data && response.data.data.length > 0) {
                const data = response.data.data;
                setProducts(data)
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    const handleToAdd = () => {
        router.push('/products/add')
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <Layout>
            <Head>
                <title>
                    Tienda | Products
                </title>
            </Head>
            <Navbar />
            <Container>
                {loading ?
                    <CircularLoading />
                    :
                    <>
                        <Button
                            size="small"
                            color="success"
                            style={{
                                color: "#fff",
                                marginTop: 15
                            }}
                            onClick={() => handleToAdd()}
                        >
                            <AddIcon />
                            <span>
                                Tambah Data
                            </span>
                        </Button>
                        <ProductsTable
                            style={{
                                marginTop: 50
                            }}
                            products={products}
                            fetchProducts={fetchProducts}
                        />
                    </>
                }
            </Container>
        </Layout>
    )
}

export default List