import React from 'react';

const Contact = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block">Email:</label>
          <input type="email" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label className="block">Message:</label>
          <textarea className="textarea textarea-bordered w-full"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
