import React from "react";
import {ProductConsumer} from "../../context";
import {useForm} from 'react-hook-form';

export default function Order() {
    const {register, handleSubmit} = useForm();

    return (
        <ProductConsumer>
            {value => {
                const {cart, info} = value;
                return <div className="text-center">
                    <button className="btn btn-outline-danger
                     text-capitalize mb-4" type="submit"
                            onClick={() => console.log(cart, info)}
                    >Изпрати Поръчката
                    </button>
                </div>

            }}
        </ProductConsumer>

    )
}
