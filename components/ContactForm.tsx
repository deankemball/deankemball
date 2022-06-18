import emailjs from "@emailjs/browser";
import { MutableRefObject, useEffect, useRef, useState } from "react";

//   window.onload = function () {
//     document
//       .getElementById("contact-form")
//       .addEventListener("submit", function (event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = (Math.random() * 100000) | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm("contact_service", "contact_form", this).then(
//           function () {
//             console.log("SUCCESS!");
//           },
//           function (error) {
//             console.log("FAILED...", error);
//           }
//         );
//       });
//   };
// }

function ContactForm() {
  const form: MutableRefObject<string | HTMLFormElement> = useRef("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [number, setNumber] = useState<number>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setNumber((Math.random() * 100000) | 0);
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        `name: ${name}, email: ${email},message: ${message}`,
        "user_HtB2KnW4JdFNLUiUM2pv2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //   useEffect() => {
  //     const formBody = {name, email, message}
  //   }

  return (
    <form
      className="flex flex-col p-6
    space-y-4 font-inter"
    >
      <input type="hidden" name="contact_number" value={number} />
      <input
        placeholder="name"
        id="userName"
        type="text"
        name="user_name"
        className="bg-white text-lg border-solid border-b-2 border-red  focus:outline-none hover:cursor-pointer"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="e-mail"
        id="userEmail"
        type="email"
        name="user_email"
        className="bg-white text-lg border-solid border-b-2 border-red  focus:outline-none hover:cursor-pointer"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="message"
        id="userMessage"
        name="message"
        className="bg-white h-8 text-lg border-solid border-b-2 border-red  focus:outline-none hover:cursor-pointer"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        id="send-button"
        className="self-center text-2xl font-regular border-solid border-b-2 border-red hover:cursor-pointer"
        type="submit"
        onSubmit={sendEmail}
      >
        send
      </button>
      {/* <pre>
        name: {name} email: {email}, message: {message}
      </pre> */}
    </form>
  );
}
export default ContactForm;
