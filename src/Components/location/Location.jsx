
const Location = () => {
  return (
    <div className="my-3 location-cont">
      <div className="row location-row">
        <div className="col-lg-6 col-md-6 col-12">
          <form className="form">
            <h5 className="h5 title-h5"> For Inquiries</h5>
            <div className="mb-3 contact-input">
              <h5 className="h5">Name</h5>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="mb-3 contact-input">
              <h5 className="h5">Email</h5>
              <input type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="mb-3 contact-input">
              <h5 className="h5">Your Message</h5>
              <textarea
                placeholder="type your message here..."
                rows="5"
              ></textarea>
            </div>
            <div className="mb-3 btn-cont">
              <button>Send Message</button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 col-12 my-location">
          <iframe
            title="my-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7892149394097!2d36.75927681573665!3d-1.3013686333959997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b3cc1982859%3A0x88993b1e5d46cc20!2sKenya%20Science%20Campus%2C%20University%20of%20Nairobi!5e0!3m2!1sen!2ske!4v1680884613720!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
