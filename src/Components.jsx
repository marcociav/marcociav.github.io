import logo from './logo.png';
import './Components.css';


export function Portfolio() {

    return (
        <div className="container">
            <Banner/>
                <div className="content-container">   
                <Section 
                    id="tech-products-container"
                    title="Tech Products"
                    style={{
                        top: "max(15vh, 150px)"
                    }}
                >
                    <SubSection 
                        title="Lango"
                        description={`A Google style language detector web app, built with a Recurrent Neural Network.`}
                        link={"https://marcociav.github.io/lango/"}
                    />
                    <SubSection
                        title="Sorted Out"
                        description={`A web app that allows you to visualize sorting algorithms intuitively and at your own pace.`}
                        link={"https://marcociav.github.io/sorted-out/"}
                    />
                    <SubSection
                        title={`Smile App [ WIP ]`}
                        description={`A web app that puts a smile on your face using a CycleGAN.`}
                    />
                </Section>
                <Section
                    id="accomplishments-container"
                    title="Accomplishments"
                    style={{
                        top: "max(60vh, 600px)"
                    }}
                >
                    <SubSection 
                        title="Education"
                        description={`BSc Physics and Astrophysics @ University of Florence\n3.78 GPA (104/110)`}
                    />
                    <SubSection
                        title="Publications"
                    >
                        <SubSection
                            title="On the training of sparse and dense deep neural networks: less parameters, same performance"
                            description="Training deep neural networks in reciprocal space."
                            link="https://arxiv.org/abs/2106.09021"
                        />
                    </SubSection>
                </Section>
            </div>
        </div>
    )
}

function Banner() {

    return (
        <div className="banner-container">
            <div className="name-container">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="name">Marco Ciavarella</h1>
            </div>
            <div className="description-container">
                <p className="description">
                    Data Scientist, Machine Learning Engineer, Physicist, Human
                </p>
            </div>
        </div>
    )
}


function Section(props) {
    return (
        <div 
            className="section-container" id={props.id}
        >
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}


function SubSection(props) {
    return (
        <div 
            className="subsection-container"
        >
            <h3>
                <a href={props.link} target="_blank">{props.title}</a>
            </h3>
            <p style={{whiteSpace: "pre-line", marginTop: "3px"}}>
                {props.description}
            </p>
            {props.children}
        </div>
    )
}
