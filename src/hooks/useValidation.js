import {useEffect, useState} from 'react';

export const useValidation = (value, validations) => {
    let error;
    const [isEmpty, setEmpty] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        for (let validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'minLength':
                    (value.length >= validations[validation]) ? setMinLengthError(false) : setMinLengthError(true)
                    break
                case 'maxLength':
                    (value.length <= validations[validation]) ? setMaxLengthError(false) : setMaxLengthError(true)
                    break
            }
        }
    },[value])

    if (isEmpty) {
        if (validations?.inputName === 'city') {
            error = `Выберите город`
        } else {
            error = 'Поле не может быть пустым'
        }
    } else if (minLengthError) {
        if (validations?.inputName === 'name') {
            error = `Имя должно содержать минимум ${validations['minLength']} символов`
        } else if (validations?.inputName === 'surname') {
            error = `Фамилия должна содержать минимум ${validations['minLength']} символов`
        } else if (validations?.inputName === 'age') {
            error = `Возраст должен содержать минимум ${validations['minLength']} цифр`
        } else {
            error = `Должно быть не менее ${validations['minLength']} символов`
        }
    } else if (maxLengthError) {
        if (validations?.inputName === 'name') {
            error = `Имя должно содержать максимум ${validations['minLength']} символов`
        } else if (validations?.inputName === 'surname') {
            error = `Фамилия должна содержать максимум ${validations['minLength']} символов`
        } else if (validations?.inputName === 'age') {
            error = `Возраст должен содержать максимум ${validations['minLength']} цифр`
        } else {
            error = `Должно быть не более ${validations['maxLength']} символов`
        }
    } else {
        error = ''
    }

    useEffect(()=>{
        if (isEmpty || minLengthError || maxLengthError) {
            setValid(false)
        } else {
            setValid(true)
        }
    },[isEmpty, minLengthError, maxLengthError])

    return {
        isValid,
        error
    };
}
