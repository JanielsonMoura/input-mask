import React, { InputHTMLAttributes, useCallback } from "react";
import { cep, phone } from './masks'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    typeMask: 'cep' | 'phone'
}

const InputMask: React.FC<InputProps> = ({
    typeMask, ...props }) => {
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        switch (typeMask) {
            case 'cep':
                cep(e)
                break;
            case 'phone':
                phone(e)
                break;

            default:
                break;
        }
        phone(e);
    }, [])
    return (
        <input {...props} onKeyUp={handleKeyUp} />
    )
}

export default InputMask;