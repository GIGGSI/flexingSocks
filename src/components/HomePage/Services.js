import React, { Component } from 'react'
import styled from 'styled-components'
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa';
import { Fade } from "react-reveal";



export default class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaDolly />,
                title: 'Бърза доставка',
                text: 'Всички налични артикули могат да бъдат доставени с нашите партньори от Еконт в рамките на 4-6 работни дни.'
            },
            {
                id: 2,
                icon: <FaRedo />,
                title: 'БЕЗПЛАТНА ДОСТАВКА',
                text: 'Безплатна достава за поръчки над 89 лв. при плащане в момента на поръчката.'
            },
            {
                id: 3,
                icon: <FaDollarSign />,
                title: 'заплащане',
                text: 'Кредитна/дебитна карта – приемаме всички валидни банкови карти на MasterCard, Visa или Maestro (и American Express, в случай че е приложимо в съответната страна).'
            },

        ]
    }

    render() {
        return <ServicesWrapper className="py-5">
            <Fade bottom duration={2000} distance="40px">
                <div className="container">
                    <div className="row">
                        {this.state.services.map(item => {
                            return (
                                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                    <div className="services-icon">
                                        {item.icon}
                                    </div>
                                    <div className="mt-3 text-capitalize">
                                        {item.title}
                                    </div>
                                    <div className="mt-3">
                                        {item.text}
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </Fade>
        </ServicesWrapper>
    }
}

const ServicesWrapper = styled.section`
background:rgba(95, 183,234,0.5);
.services-icon {
    font-size:2.5rem;
    color:var(--primaryColor);
}
p{
    color: var(--darkGray);
}
`