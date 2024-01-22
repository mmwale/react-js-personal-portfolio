export default function AboutMe(){//function of the AboutMe section of the website
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
            <img src="./img/EP2.jpg" alt="About Me"/>
            </div>

            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About Me</p>
                    <h1 className="skills-section--heading">
                        Brief Introduction
                    </h1>
                    <p className="hero--section--description">
                        I am a computer science student at Saginaw Valley State University aspiring to be an expert software engineer. <br />
                        Throughout my courses and independent projects, I've gained experience in languages like Java, Python, Visual Basic, and web development skills like HTML, React, CSS, JavaScript. I'm passionate about coding and loving bringing new ideas to life. <br />
                        In addition to academics, i stay involved on campus as a Foreign Representative and general member of the African Student Union club. In my free time, i tackle a few Java problems, develop personal projects, play strategy games and gather information on the advancing world of technology. <br />
                        I'm excited to continuing growing and push beyond my capabilities in this everchanging world!
                    </p>
                </div>
            </div>
        </section>
    )
}