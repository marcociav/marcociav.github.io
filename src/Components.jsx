import logo from './logo.png';
import './Components.css';


export function Portfolio() {

    return (
        <div className="container">
            <Banner/>
            <Section 
                id="tech-products-container"
                title="Tech Products"
                style={{
                    top: "max(15vh, 150px)"
                }}
            >
                <SubSection 
                    title="Lango"
                    description="A Google style language detector web app, built with a Recurrent Neural Network.
                    Tech: Python, Tensorflow, FastAPI, Google Cloud Platform (GCP), Cloud Run, Cloud Storage, Javascript, React"
                />
                <SubSection
                    title="Sorted Out"
                    description="A web app that allows you to visualize sorting algorithms intuitively and at your own pace.
                    Tech: Javascript, React, NodeJS"
                />
            </Section>
            <Section
                id="accomplishments-container"
                title="Accomplishments"
                style={{
                    top: "max(40vh, 400px)"
                }}
            />
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
    console.log(props.style.top)
    return (
        <div 
            className="section-container" id={props.id}
            style={props.style}
        >
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

function SubSection(props) {
    return (
        <div className="subsection-container">
            <h3>
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
        </div>
    )
}
