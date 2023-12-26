import validator from 'is_js'



const checkEmpty = (value,key) => {
    if (validator.empty(value)) {
        return `${key} is required`
    }
    else {
        return null
    }
}

const checkMinLength = (value,key,minLength) => {
    if (value.length < minLength) {
        return `${key} must be at least ${minLength} characters`
    }
    else {
        return null
    }
}



export default (data) => {
    const { email, password } = data

    if(email !== undefined){
        let emptyValidationText = checkEmpty(email,"Email")
        if(emptyValidationText !== null){
            return emptyValidationText
        }
        else if(!validator.email(email)){
            return "Email is not valid"
        }

    }

    if(password !== undefined){
        let emptyValidationText = checkEmpty(password,"Password")
        if(emptyValidationText !== null){
            return emptyValidationText
        }
        else {
            let minLengthValidationText = checkMinLength(password,"Password",6)
            if(minLengthValidationText !== null){
                return minLengthValidationText
            }
     
        }
        

    }
}