import Email from "public/contact/email.svg";
import Github from "public/contact/github.svg";
import ContactMethod from "./ContactMethod";

const contactMethods = {
  github: {
    link: "https://github.com/deankemball",
    icon: Github,
    handle: "@deankemball",
  },
  email: {
    link: "mailto:deankemball@gmail.com",
    icon: Email,
    handle: "deankemball@gmail.com",
  },
};

function ContactHero() {
  return (
    <div className="flex flex-col justify-between py-6 px-8 md:px-0 items-center max-w-xl mx-auto">
      <div className="flex flex-col w-full space-y-2 md:space-y-4">
        <>
          {Object.values(contactMethods).map((contact, i) => {
            return (
              <ContactMethod
                key={i}
                link={contact.link}
                icon={<contact.icon />}
                handle={contact.handle}
              />
            );
          })}
        </>
      </div>
    </div>
  );
}

export default ContactHero;
