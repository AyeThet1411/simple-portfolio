import MailchimpSubscribe from "react-mailchimp-subscribe";

import React from "react";
import Newsletter from "./Newsletter";

function MailchimupForm() {
  const postURL = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_App_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postURL}
        render={({ subscribe, status, message }) => {
          <Newsletter
            status={status}
            message={message}
            onValidated={(formdata) => subscribe(formdata)}
          />;
        }}
      />
    </>
  );
}

export default MailchimupForm;
