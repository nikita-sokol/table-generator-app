import {useState} from 'react';
import {useValidation} from "./useValidation";

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        if (validations?.inputName === 'age') {
            const regexp = (/\D/g);
            if (!regexp.test(e.target.value)) {
                setValue(e.target.value)
            }
        } else {
            setValue(e.target.value)
        }
    }

    const onBlur = () => {
        setDirty(true)
    }

    const changeValue = val => {
        setValue(val)
        setDirty(false)
    }

    return {
        value,
        changeValue,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
}
