import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'


export default function Footer() {
    return <ProductConsumer>
        {value => {
            return <FooterWrapper>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-capitalize">
                                copyright &copy; <a href="https://sto-portfolio.netlify.app/" target="_blank"> Stoyan Spasov </a>{new Date().getFullYear}. all right reserved{" "}
                            </p>

                        </div>
                        <div className="col-md-6 d-flex justify-content-around">
                            {value.socialIcons.map(item => <a key={item.id} href={item.url} target="_blank"
                            >{item.icon}</a>)}
                        </div>

                    </div>
                </div>
            </FooterWrapper>
        }}
    </ProductConsumer>
}

const FooterWrapper = styled.footer`
background:var(--darkGray);
color:var(--mainWhite);
.icon{
    font-size:1.5rem;
    color:var(--mainWhite);
    transition: var(--mainTransition)
}
.icon:hover{
    color:var(--primaryColor);
    cursor:pointer;

}
a{
    text-decoration:none;
    color: #fff;
}
a:hover{
    color:var(--primaryColor)
    
}
`

