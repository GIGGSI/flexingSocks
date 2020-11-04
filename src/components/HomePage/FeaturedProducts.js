import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Product from '../Product';
import { ProductConsumer } from '../../context'
import { Fade } from "react-reveal";


export default function FeaturedProducts() {
    return <Fade right duration={1500}>
        <section className="py-5">

            <div className="container">
                <Title title="Специални продукти" center="true" />

                <div className="row my-5">
                    <ProductConsumer>
                        {value => {
                            const { featuredProducts } = value;

                            return featuredProducts.map(product =>
                                (<Product key={product.id} product={product}></Product>))
                        }}
                    </ProductConsumer>

                </div>

                <div className="row mt-5">
                    <div className="col text-center">
                        <Link to="/products" className="main-link">
                            нашите чорапи

                    </Link>

                    </div>
                </div>
            </div>
        </section>
    </Fade>
}
