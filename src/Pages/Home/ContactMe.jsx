import emailjs from "@emailjs/browser";

export default function ContactMe(){//Contact Me section of the website that contains a form to reach me
    const sendEmail = (em) => {// function that collects user input from the form and send it to me through the emailjs mailsender service.
        em.preventDefault();//enables the function to always function
        alert("SUBMITTED!");//creates a popup once the form has been sent
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, em.target, process.env.REACT_APP_PUBLIC_KEY);//contains emailjs details that send the form details to a specific account
        em.target.reset();//refreshes the form once the form details have been sent
    }
    return(//contains a form that calls the sendEmail function upon submission from the button
        <section id="Contact" className="contact--section">
            <div className="sub--title">
            <p className="sub--title">Get In Touch</p>
            <h2> Contact Me</h2>
            <p className="text-lg">
            If you wish to stay in touch, enter your details below and i will respond accordingly!
            </p>
            </div>
        <form className="contact--form--container" onSubmit={sendEmail}>
            <div className="container">
                <label htmlFor="first-name" className="contact--label">
                    <span className="text-md">First Name</span>
                    <input type="text" className="contact--input text-md" name="first-name" id="first-name" required/>
                </label>
                <label htmlFor="last-name" className="contact--label">
                    <span className="text-md">Last Name</span>
                    <input type="text" className="contact--input text-md" name="last-name" id="last-name" required/>
                </label>
                <label htmlFor="email" className="contact--label">
                    <span className="text-md">Email</span>
                    <input type="text" className="contact--input text-md" name="email" id="email" required/>
                </label>
                <label htmlFor="phone-number" className="contact--label">
                    <span className="text-md">Phone Number</span>
                    <input type="text" className="contact--input text-md" name="phone-number" id="Phone Number" required/>
                </label>
            </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Topic of Discussion</span>
                    <select id="choose-topic" className="contact--input text-md" name="subject">
                        <option>Choose One</option>
                        <option>Job Interest</option>
                        <option>Social Reach</option>
                        <option>Advice on Portfolio</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea className="contact--input text-md" id="message" rows="8" placeholder="Enter your message..." name="message"/>
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox" />
                <span className="text-sm">I accept the terms</span>
                </label>
                <div><button type="submit" className="btn btn-primary contact--form--btn" >Submit</button></div>
        </form>
        </section>

    )

}