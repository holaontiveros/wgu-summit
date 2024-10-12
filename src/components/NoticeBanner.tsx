import React, { useEffect, useState } from "react";

import noticeJson from "src/assets/data/notice.json";

import { BellAlertIcon, TicketIcon } from "@heroicons/react/24/solid";

const NoticeBanner = () => {
  const [currentNotice, setCurrentNotice] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentNotice = noticeJson.data.find((notice) => {
      const noticeDate = new Date(notice.date);
      // if notice date is today

      return noticeDate.toDateString() === today.toDateString();
    });

    setCurrentNotice(currentNotice);
  }, []);

  if (!currentNotice) {
    return null;
  }

  const noticeIconToRealIcon = (icon) => {
    switch (icon) {
      case "bye":
        return <TicketIcon className="mx-auto h-8 w-8" />;
      default:
        return <BellAlertIcon className="mx-auto h-8 w-8" />;
    }
  };

  return (
    <div className={currentNotice.colorBg}>
      <div className="container mx-auto flex justify-start gap-6 p-6">
        <div className={currentNotice.colorIcon}>
          {noticeIconToRealIcon(currentNotice.icon)}
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-primary-500">
            {currentNotice.messageTitle}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: currentNotice.message }}></p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBanner;
