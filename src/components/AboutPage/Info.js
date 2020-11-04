import React from 'react'
import Title from '../Title'
import aboutBg from '../../images/aboutBcg.jpg'

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
                        <Title title="За Flexing Socks" />
                        <p className="text-lead text-muted my-3">
                            Flexing Socks се отличават с весели и жизнерадостни дамски и мъжки модели. Много от моделите чорапи се предлагат и в дамски и в мъжки размери. Разделили сме различните дизайни в тематични подкатегории, например "Животинки" или "Храна и напитки". Можете да използвате филтрите, за да филтрирате по цвят, материя или размер например.
                            </p>
                        <p className="text-lead text-muted my-3">
                            Чорапите са подходящи за различни поводи и празници. А защо да не се обуят просто така, в ежедневието и да повдигнат Вашето настроение. Освен дизайнът обаче е важен и материалът. Произвеждаме нашите чорапи с внимание към дизайна и състава.
                             </p>
                        <button className="main-link my-2"
                            type="button">
                            прочети още
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
