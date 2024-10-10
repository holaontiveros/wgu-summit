import React from "react";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Contact = ({ index, contact }) => {
  const methodTypeToIcon = (type) => {
    switch (type) {
      case "phone":
        return <PhoneIcon className="h-5 w-5" />;
      case "email":
        return <EnvelopeIcon className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const methodTypeToClass = (type) => {
    switch (type) {
      case "phone":
        return "text-secondary-500";
      case "email":
        return "text-primary-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div key={index} className="flex justify-between">
      <div>
        <h3 className="font-semibold text-black">{contact.name}</h3>
        <span className="text-sm text-gray-500">{contact.description}</span>
      </div>
      <div className="flex">
        {contact.contactMethods.map((method, index) => (
          <div className="inline-block h-8 w-8">
            <a href={method.value}>
              <i className={methodTypeToClass(method.type)}>
                {methodTypeToIcon(method.type)}
              </i>
              <span className="sr-only">Link for {method.type}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
