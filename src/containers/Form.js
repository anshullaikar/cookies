import React, { Fragment } from "react";
import IframeContainerDiv from "../styles/IframeContainerDiv";

const Form = () => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSf3EwRiXkua2iY70Xm92Vz9bcXaBlyVB8HjujMYdHNkhotqgw/formResponse";

  return (
    <Fragment>
      <IframeContainerDiv className="full-size center-flex">
        <div className="container">
          <iframe title="cookie form" className="responsive-iframe" src={formUrl} />
        </div>
      </IframeContainerDiv>
    </Fragment>
  );
}

export default Form;
