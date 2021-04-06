export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rule) => {
    let isValid = false;
    if(rule.required){
        isValid = value.trim() !== '';
    }
    if(rule.minLength){
        isValid = value.length>=rule.minLength
    }
    return isValid;
}