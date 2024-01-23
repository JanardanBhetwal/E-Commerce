function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <h2 className="text-center text-2xl m-4">Feel Free to Contact Us</h2>
      <div className="w-full h-96 ">
        <iframe
          className="m-auto w-4/5 h-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.9583030099125!2d85.32244397546889!3d27.749432076158467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f19be88469%3A0x7297381034c6496c!2sBhat-Bhateni%20Department%20Store!5e0!3m2!1sen!2snp!4v1706006182798!5m2!1sen!2snp"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="p-4 m-4">
        <form
          action="https://formspree.io/f/xwkgvvgd"
          method="post"
          className="flex flex-col w-96 justify-between"
        >
          <label>Enter your name:</label>
          <input
            className="border border-black rounded-md h-8 p-px pl-2 mb-2"
            type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
          />

          <label>Enter your email:</label>
          <input
            className="border border-black rounded-md h-8 p-px pl-2 mb-2"
            type="email"
            placeholder="Email"
            name="Email"
            required
            autoComplete="off"
          />
          <label>Enter your message:</label>
          <textarea
            className="border border-black rounded-md h-36 p-px pl-2 mb-2"
            name="Message"
            required
            autoComplete="off"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="p-2 m-1 bg-purple-500 rounded-md w-1/4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
