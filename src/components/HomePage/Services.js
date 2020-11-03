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
                title: 'Free Shipping',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s. '
            },
            {
                id: 2,
                icon: <FaRedo />,
                title: '30 days return policy',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s. '
            },
            {
                id: 3,
                icon: <FaDollarSign />,
                title: 'secured payment',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s. '
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