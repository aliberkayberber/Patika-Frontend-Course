import "./Contact.css"

function Contact() {
  return (
    <section id="section-contact" className="contact">
      {/* .contact-start */}
      <div className="contact-start">
        <h2>CONTACT US</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos in quas animi eius hic, libero dolores vel facere expedita corrupti tempore tempora.</p>
      </div>
      {/* .contact-content */}

      <div className="contact-content">
        <article className="contact-form">
          <div className="contact-info">
            <div className="mobile">
              <h4>Mobile Number</h4>
              <span>+135 773 44 42</span>
            </div>
            <div className="mail">
              <h4>Email Adress</h4>
              <span>demo@demo.com</span>
            </div>
          </div>
          <div className="contact-input">
            <h4>Make An Appointment</h4>
            <form id="contactUs">
              <input type="text" placeholder="Your Name" /> <br />
              <input type="text" placeholder="Your Email"/> <br />
              <textarea placeholder="Your Message" rows="6"></textarea>
            </form>
          </div>
        </article>
        <article className="contact-map">
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d166624.701715855!2d29.034839!3d40.99703000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e1!3m2!1sen!2str!4v1735915666319!5m2!1sen!2str" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer"></iframe> 
          </div>
        </article>
      </div>
    </section>
  )
}

export default Contact