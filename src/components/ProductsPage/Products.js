import React from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Title';
import Product from '../Product';
import FilteredProducts from './FilteredProducts'

export default function Products() {
    return <ProductConsumer>
        {value => {
            const { filteredProducts } = value;
            return <section className="py-5">
                <div className="container">
                    <Title title="нашите чорапи" center />

                    <FilteredProducts />
                    {/* row */}
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h6 className="text-title">
                                общо продукти: {filteredProducts.length}
                            </h6>
                        </div>
                    </div>
                    {/* end of row */}

                    <div className="row py-5">
                        {
                            filteredProducts.length === 0 ? (
                                <div className="col text-title text-center">
                                    няма съвпадения на търсения продукт
                                </div>
                            ) :
                                (
                                    filteredProducts.map(product => {
                                        return <Product key={product.id}
                                            product={product} />
                                    })
                                )
                        }
                    </div>

                </div>
            </section>
        }}
    </ProductConsumer>
}
