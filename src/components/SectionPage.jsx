import '../styles/SectionPage.css'

export default props => {
    return(
        <>
        <section className="section-1">
            <div className="background-blue">
                <h1>Como a psicoterapia pode te ajudar?</h1>

                <div class="all-lines">
                    <div className="line-1">
                        <p>Promove o bem-estar e qualidade de vida</p>

                    </div>

                    <div className="line-2">
                        <p>Reduz os sintomas  psicológicos</p>
                        <p>Resolução de conflitos internos</p>

                    </div>

                    <div className="line-3">
                        <p>Traz autoconhecimento e compreensão emocional</p>
                        <p>Melhoria na comunicação e nos  relacionamentos</p>

                    </div>
                </div>

                <div className="yellow-circle"></div>
            </div>
        </section>

        <section className="section-2">
            <div className="blue-circle"></div>
            <div className="about-me">
                <div className="psi-text">
                    <h1>Sobre mim</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis risus suscipit velit maximus interdum. Morbi vehicula fringilla vehicula. Curabitur laoreet leo quis nisl cursus malesuada et vel tellus. Ut non quam molestie, elementum enim id, porttitor odio. Aenean hendrerit mattis urna, quis interdum neque aliquet sed. Donec sed urna congue, sagittis nulla non, mattis mi. Phasellus porttitor nulla eget ultricies pharetra. Praesent mollis, leo in ultrices sodales, ligula tortor fringilla tellus, id porttitor orci libero sit amet nisl.</p>
                </div>
                <div className="border-pic">
                    <img src="https://imgs.search.brave.com/e7bdaFT7BI2NA46jE233nv9sXKsq1E_-3pgszNE2h34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9qb3ZlbS1tdWxo/ZXItZW5jYXJhY29s/YWRhLWNvbnZlcnNh/bmRvLWNvbS1zZXUt/cHNpY290ZXJhcGV1/dGFfMjU5MTUwLTcy/NjYuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA" alt="psi-picture" className='psi-picture'/>
                </div>
            </div>
        </section>

        </>
    )
}