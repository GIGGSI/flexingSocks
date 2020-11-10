import platej from "../../images/bg_cod.svg";
import React from "react";


export default function Payment(){
    return(
        <div  className="payment-content" id="payment-1-show">
            <img src={platej} alt="pic" className="my-1"/>
            <p>
                Плащането се извършва при получаване на продукта. Таксата за обработка на плащане при доставка е
                2 лв. на поръчка.
            </p>
        </div>
    )
}
