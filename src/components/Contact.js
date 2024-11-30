import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="md:mt-20 mt-16 flex justify-center bg-gray-200">
      <div className="md:w-[60%] w-full text-left flex justify-center p-5 bg-white">
        <div className="md:w-[50%] w-3/4 my-12">
          {!submitted ? (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <h2 className="text-center text-2xl font-bold">Contact Us</h2>

              <label className="text-lg font-semibold">
                Name:
                <input
                  className="w-full py-2 px-4 focus:outline-none text-lg font-semibold border-solid border-2 border-gray-300 rounded-lg"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="text-lg font-semibold">
                Email:
                <input
                  className="w-full py-2 px-4 focus:outline-none text-lg font-semibold border-solid border-2 border-gray-300 rounded-lg"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="text-lg font-semibold">
                Message:
                <textarea
                  className="w-full py-2 px-4 focus:outline-none text-lg font-semibold border-solid border-2 border-gray-300 rounded-lg"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button
                className="text-xl bg-green-500 py-1 rounded-lg font-semibold text-white text-center"
                type="submit"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="text-center my-10">
              <img
                className="rounded-md shadow-lg"
                src="https://www.openphone.com/blog/wp-content/uploads/2023/02/texting-auto-reply-examples.png"
                alt="Reply Soon Image"
              />
              <h3 className="my-3 text-2xl font-bold">
                Thank you,{" "}
                <span className="text-orange-400">{formData.name}!</span>
              </h3>
              <p className="font-semibold text-xl leading-none">
                Your message has been received. We'll get back to you soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
