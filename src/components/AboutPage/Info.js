import React from 'react'
import Title from '../Title'
import aboutBg from '../../images/aboutBcg.jpeg'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBg}
                            className="img-fluid img-thumbnail" alt="about img"
                            style={{ background: "var(--darkGray" }} />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="About Us" />
                        <p className="text-lead text-muted my-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className="text-lead text-muted my-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <button className="main-link my-2"
                            type="button">
                            more info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
