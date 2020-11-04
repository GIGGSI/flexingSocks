import React from 'react'
import Title from '../Title'

export default function Contact() {
    return <section className="py-5">
        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">

                <Title title="свържете се с нас" />

                <form className="mt-5"
                    action="https://formspree.io/giggsi@abv.bg" method="POST">
                    <div className="form-group">
                        <input type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="Петър Петров" />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            name="email"
                            className="form-control"
                            placeholder="email@email.com" />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            name="subject"
                            className="form-control"
                            placeholder="относно" />
                    </div>
                    <div className="form">
                        <textarea
                            name="message"
                            rows="10"
                            className="form-control"
                            placeholder="Тук напишете вашето съобщение..."
                        />

                    </div>
                    <div className="form-group mt-3">
                        <input type="submit" value="изпрати"
                            className="form-control bg-primary text-white" />
                    </div>
                </form>
            </div>
        </div >
    </section >
}
