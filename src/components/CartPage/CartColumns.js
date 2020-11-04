import React from 'react'
import { ProductConsumer } from '../../context';

export default function CartColumns() {
    return (
        <ProductConsumer>
            {value => {
                const { cartTotal } = value;

                if (cartTotal === 0) {
                    return <div></div>
                } else {
                    <div className="container-fluid text-center d-none d-lg-block my-5">
                        <div className="row">
                            {/* single column */}
                            <div className="col-lg-2">
                                <p className="text-uppercase">продукт</p>
                            </div>
                            {/* end of single column */}
                            {/* single column */}
                            <div className="col-lg-2">
                                <p className="text-uppercase">име на продукта</p>
                            </div>
                            {/* end of single column */}
                            {/* single column */}
                            <div className="col-lg-2">
                                <p className="text-uppercase">цена</p>
                            </div>
                            {/* end of single column */}
                            {/* single column */}
                            <div className="col-lg-2">
                                <p className="text-uppercase">количество</p>
                            </div>
                            {/* end of single column */}
                            {/* single column */}
                            <div className="col-lg-2">
                                <p className="text-uppercase">премахни</p>
                            </div>
                            {/* end of single column */}
                            {/* single column */}
                            <div className="col-lg-2">
                                <p className="text-uppercase">общо</p>
                            </div>
                            {/* end of single column */}
                        </div>
                    </div>
                }
            }}

        </ProductConsumer>



    )
}
