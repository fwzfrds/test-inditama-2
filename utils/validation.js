export const validateLogin = (values) => {
    const errors = {}
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!values.email) {
        errors.email = 'email is required!'
    } else if (!regEx.test(values.email)) {
        errors.email = 'email is invalid!'
    }

    if (!values.password) {
        errors.password = 'password is required!'
    } else if ((values.password).length < 5) {
        errors.password = 'password must be at least 5 characters!'
    }

    return errors
}

export const validateAddForm = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Name is required!'
    }

    if (!values.price) {
        errors.price = 'Price is required!'
    } else if (parseInt(values.price) < 0) {
        errors.price = 'Price should be more than Rp. 0'
    }

    return errors
}