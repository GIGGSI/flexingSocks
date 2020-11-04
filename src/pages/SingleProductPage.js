import React from "react";
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductImg from '../images/3.jpg';
import { ProductConsumer } from '../context'
import styled from 'styled-components'


export default function SingleProductPage() {
    return (
        <>
            <Hero img={singleProductImg} title="Чорапче" />
            <ProductConsumer>
                {value => {
                    const { singleProduct, addToCart, loading } = value;
                    if (loading) {
                        return <h1>product loading....</h1>
                    }
                    const { company, description, id, price, size, title, image, images, info, subInfo } = singleProduct


                    console.log(singleProduct)
                    return <section className="py-5">
                        <div className="container">
                            <div className="row" >
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3 ">
                                    <img src={`../${image}`}
                                        // src={img}
                                        alt="single product" className="img-fluid"
                                    />
                                </div>
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <h5 className="text-title mb-4">Модел: {title}</h5>
                                    <h5 className="text-capitalize text-muted mb-4">
                                        Производител : {company}
                                    </h5>
                                    <h5 className="text-capitalize text-muted mb-4">размер: {size}</h5>
                                    <h5 className="text-main text-capitalize mb-4">цена: {price.toFixed(2)} лв.</h5>
                                    <p className="text-capitalize text-title mt-3">
                                        информация за продукта:
                                </p>
                                    <p>{description}</p>
                                    <h5>{subInfo}</h5>

                                    {info.map(i => {
                                        return <p>{i}</p>
                                    })}
                                    <button type="button"
                                        className="main-link"
                                        style={{ margin: "0.75rem" }}
                                        onClick={() => addToCart(id)}>
                                        добави
                                    </button>
                                    <Link to="/products" className="main-link"
                                        style={{ margin: "0.75rem" }}>
                                        всички чорапи
                                    </Link>
                                </div>
                                <ImgWrapper className="bla col-10 mx-auto col-sm-8 col-md-6 my-3 ">
                                    {images.image.fields.images.map(img => {
                                        return <div className="display-inline-block bra
                                        " key="img.id">
                                            <img src={`../${img.url}`}
                                                className="img-fluid"
                                                alt="pic" />
                                        </div>
                                    })}
                                </ImgWrapper>
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">

                                </div>
                            </div>
                        </div>
                    </section>
                }}
            </ProductConsumer>
        </>
    )
}

const ImgWrapper = styled.div`

.bra {
    padding-right:2rem;
    display: inline-block; 
    transition:var(--mainTransition)
}
.bra:hover{
transform:scale(1.2)
}
img{
    
height:250px;
}
.bla:hover{
    transform:scale(1.3)
}

`