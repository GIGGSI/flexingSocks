import React from "react";


export default function ShippingAdress() {

    return (
        <div className="checkout-inner">
            <div className="shipping-address">
                <h2>Адрес за доставка</h2>
                <div className="row">
                    <div className="col-md-6">
                        <label>Име</label>
                        <input className="form-control" type="text" placeholder="Име"/>
                    </div>
                    <div className="col-md-6">
                        <label>Фамилия</label>
                        <input className="form-control" type="text" placeholder="Фамилия"/>
                    </div>
                    <div className="col-md-6">
                        <label>Имейл адрес</label>
                        <input className="form-control" type="text" placeholder="Имейл адрес"/>
                    </div>
                    <div className="col-md-6">
                        <label>Мобилен номер</label>
                        <input className="form-control" type="text" placeholder="мобилен номер"/>
                    </div>
                    <div className="col-md-12">
                        <label>Адрес</label>
                        <input className="form-control" type="text" placeholder="адрес"/>
                    </div>
                    <div className="col-md-6">
                        <label>Държава</label>
                        <input className="form-control" type="text" placeholder="България"/>

                    </div>
                    <div className="col-md-6">
                        <label>Град</label>
                        <input className="form-control" type="text" placeholder="Град"/>
                    </div>
                    <div className="col-md-6">
                        <label>Област</label>
                        <input className="form-control" type="text" placeholder="Област"/>
                    </div>
                    <div className="col-md-6">
                        <label>Пощенски код</label>
                        <input className="form-control" type="text" placeholder="Пощенски код"/>
                    </div>
                </div>
            </div>
        </div>

    )
}
