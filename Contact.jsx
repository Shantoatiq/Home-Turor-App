import React from 'react';

const Contact = () => {
  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="form-control" />
        <input type="email" placeholder="Your Email" className="form-control" />
        <textarea placeholder="Message" className="form-control"></textarea>
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    </section>
  );
};

export default Contact;

