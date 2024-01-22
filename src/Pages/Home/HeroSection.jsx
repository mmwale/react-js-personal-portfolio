
export default function HeroSection(){//first section of the web page
    return (
    <section id ="heroSection" className = "hero--section">
        <div className="hero--section--content--box">
        <div className="hero--section--content">
            <p className="hero--section--title">My name is Medani</p>
            <h1 className="hero--section--title">
                <span className="hero--section--title--color">Aspiring Software<br />
                Engineer</span>{" "}
                </h1>
                <p className="hero--section--description">
                I am a collegiate level web developer honing my skills to become a fully fledged software engineer.
                For as long as I can remember, I’ve always been fascinated by technology. <br />
                My earlier experience with websites in high school was memorizing the basic parts and functions of a webpage for exams.
                In college, i started learning programming languages like Java and discovered how simple coding can be if I put my mind to it.
                I started learning HTML, CSS, Javascript, and modern frameworks like React on my own. <br /><br />
                A career as a software engineer perfectly aligns with my career aspirations, learning environment and financial goals.
                I’m excited to build my career in such a dynamic field.
                </p>
            </div>
        <a href="https://www.linkedin.com/in/medani-mwale-b98543278/"><button className="btn btn-primary"> Get In Touch With Me</button></a>
        </div>
        <div className="hero--section--img">
            <img src="./img/EP1.jpg" alt="Hero Section" />
        </div>
    </section>
);
}