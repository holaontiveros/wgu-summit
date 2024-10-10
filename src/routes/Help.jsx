import React, { useEffect, useState } from "react";
import Header from "components/Header";
import helpJson from "assets/data/help.json";
import Contact from "components/Contact";

const Help = () => {
  const [helpData, setHelpData] = useState([]);
  useEffect(() => {
    const orderedData = helpJson.data.map((section) => {
      // Sort the contact methods in each section / contact / contactMethods
      // phone before email
      const contacts = section.contacts.map((contact) => {
        const contactMethods = contact.contactMethods.sort((a, b) =>
          a.type === "phone" ? -1 : 1,
        );
        return { ...contact, contactMethods };
      });
      return { ...section, contacts };
    });

    setHelpData(orderedData);
  }, []);

  return (
    <div>
      <Header title="Summit Help" />

      <div>
        {helpData.map((data, index) => (
          <div key={index} className="mb-6 bg-white">
            <div className="container px-6 py-3">
              <h2 className="mb-2 text-lg font-bold text-primary-500">
                {data.title}
              </h2>
              <p>{data.description}</p>
              <div className="mt-4 flex flex-col gap-8 border-t border-t-slate-200 pt-6">
                {data.contacts.map((contact, index) => (
                  <div key={index}>
                    <Contact contact={contact} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
