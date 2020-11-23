import React from "react";
import {useForm} from 'react-hook-form';
import {ProductConsumer} from "../../context";


export default function ShippingAddress({info}) {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
         console.log(data)

        info = data
    }
    return (<ProductConsumer>
            {value => {
                const {info,cart} = value;

                return <div className="checkout-inner">
                    <div className="shipping-address">
                        <h2>Адрес за доставка</h2>

                        <form className="row"
                              onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-6">
                                <label>Име</label>
                                <input className="form-control"
                                       name="firstName" type="text" placeholder="Име"
                                       ref={register({required: true, minLength: 2})}/>
                            </div>
                            <div className="col-md-6">
                                <label>Фамилия</label>
                                <input className="form-control"
                                       name="lastName" type="text" placeholder="Фамилия"
                                       ref={register({required: true, minLength: 2})}/>
                            </div>
                            <div className="col-md-6">
                                <label>Имейл адрес</label>
                                <input className="form-control"
                                       name="email" type="text" placeholder="Имейл адрес"
                                       ref={register({required: true})}/>
                            </div>
                            <div className="col-md-6">
                                <label>Мобилен номер</label>
                                <input className="form-control"
                                       name="phoneNumber" type="text" placeholder="мобилен номер"
                                       ref={register({required: true})}/>
                            </div>
                            <div className="col-md-12">
                                <label>Адрес</label>
                                <input className="form-control"
                                       name="address" type="text" placeholder="адрес"
                                       ref={register({required: true})}/>
                            </div>
                            <div className="col-md-6">
                                <label>Държава</label>
                                <input className="form-control"
                                       name="country" type="text" placeholder="България"
                                       ref={register({required: true})}/>

                            </div>
                            <div className="col-md-6">
                                <label>Град</label>
                                <input className="form-control"
                                       name="town" type="text" placeholder="Град"
                                       ref={register({required: true})}/>
                            </div>
                            <div className="col-md-6">
                                <label>Област</label>
                                <input className="form-control"
                                       name="province" type="text" placeholder="Област"
                                       ref={register({required: true})}/>
                            </div>
                            <div className="col-md-6">
                                <label>Пощенски код</label>
                                <input className="form-control"
                                       name="zipcode" type="text" placeholder="Пощенски код"
                                       ref={register({required: true})}/>
                            </div>
                            <button className="btn btn-outline-danger
                     text-capitalize mb-4" type="submit"
                                    onClick={() => console.log(...cart)}
                            >Изпрати Поръчката
                            </button>
                        </form>
                    </div>
                </div>

            }}
        </ProductConsumer>

    )
}
