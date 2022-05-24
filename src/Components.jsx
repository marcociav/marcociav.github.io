import logo from './logo.png';
import './Components.css';
import { AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'


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
                        description={`A web app that puts a smile on your face using a CycleGAN.\nAPI in development:`}
                    >
                        <TextLink
                            text="https://smile-app-api-e6l5ytsm6a-pd.a.run.app/docs"
                            link="https://smile-app-api-e6l5ytsm6a-pd.a.run.app/docs"
                        />
                    </SubSection>
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
                        <SubList
                            title="On the training of sparse and dense deep neural networks: less parameters, same performance"
                            description="Training deep neural networks in reciprocal space."
                            link="https://arxiv.org/abs/2106.09021"
                        />
                    </SubSection>
                </Section>
                <Footer/>
            </div>
        </div>
    )
}


function Banner() {

    return (
        <header className="banner-container">
            <div className="name-container">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="name">Marco Ciavarella</h1>
            </div>
            <div className="description-container">
                <p className="description">
                    Data Scientist, Machine Learning Engineer, Physicist, Human
                </p>
            </div>
        </header>
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


function TextLink(props) {
    var textLinkComponent;
    if (props.link) {
        textLinkComponent = 
        <a 
            href={props.link} 
            target="_blank"
            onMouseEnter={(e) => {
                e.target.style.color = "aquamarine"
            }}
            onMouseLeave={(e) => {
                e.target.style.color = "white"
            }}
        >
            {props.text}
        </a>;
    } else {
        textLinkComponent = <a>{props.text}</a>;
    }    
    return (textLinkComponent);
}


function SubSection(props) {
    return (
        <div 
            className="subsection-container"
        >
            <h3>
                <TextLink
                    text={props.title}
                    link={props.link}
                />
            </h3>
            <p style={{whiteSpace: "pre-line", marginTop: "3px"}}>
                {props.description}
            </p>
            {props.children}
        </div>
    )
}


function SubList(props) {
    return (
        <div className="sublist-container">
            <h4>
                <TextLink
                    text={props.title}
                    link={props.link}
                />
            </h4>
            <p style={{whiteSpace: "pre-line", marginTop: "3px"}}>
                {props.description}
            </p>
        </div>
    )
}


function Footer() {
    return (
        <div className="footer-container">
            <AiOutlineGithub
                style={{fontSize: "20pt", cursor: "pointer", fill: "white"}}
                onClick={() => window.open("https://github.com/marcociav/", "_blank")}
                onMouseEnter={(e) => {
                    e.target.style.fill = "aquamarine"
                }}
                onMouseLeave={(e) => {
                    e.target.style.fill = "white"
                }}
            />
            <AiOutlineLinkedin
                style={{fontSize: "20pt", cursor: "pointer", fill: "white"}}
                onClick={() => window.open("https://www.linkedin.com/in/marco-ciavarella-mrccv/?locale=en_US", "_blank")}
                onMouseEnter={(e) => {
                    e.target.style.fill = "aquamarine"
                }}
                onMouseLeave={(e) => {
                    e.target.style.fill = "white"
                }}
             />
        </div>
    )
}

