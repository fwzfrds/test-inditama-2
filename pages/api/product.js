import instance from '../../utils/axios/instance'

export const index = async () => {
    // localStorage.setItem('authToken', 'Bearer 128|MYuWj6Qsxk91SH2fGSpo5bl5bh1a2AcjzUVaJ7eD')
    const response = await instance({
        url: "product",
        method: "GET"
    })

    return response
}

export const detail = async (productID) => {
    // localStorage.setItem('authToken', 'Bearer 128|MYuWj6Qsxk91SH2fGSpo5bl5bh1a2AcjzUVaJ7eD')
    const response = await instance({
        url: `product/show?product_id=${productID}`,
        method: "GET"
    })

    return response
}

export const addProduct = async (data) => {
    // localStorage.setItem('authToken', 'Bearer 128|MYuWj6Qsxk91SH2fGSpo5bl5bh1a2AcjzUVaJ7eD')
    const response = await instance({
        url: "product/store",
        method: "POST",
        data: data
    })

    return response
}

export const update = async (data) => {
    localStorage.setItem('authToken', 'Bearer 128|MYuWj6Qsxk91SH2fGSpo5bl5bh1a2AcjzUVaJ7eD')
    const response = await instance({
        url: "product/update",
        method: "POST",
        data: data
    })

    return response
}

export const delProduct = async (productID) => {
    localStorage.setItem('authToken', 'Bearer 128|MYuWj6Qsxk91SH2fGSpo5bl5bh1a2AcjzUVaJ7eD')
    const response = await instance({
        url: `product/${productID}`,
        method: "DELETE"
    })

    return response
}