import React from "react";

function Alert({ theme, message }) {
  return (
    <div
      className={`alert alert-${theme} alert-dismissible fade show`}
      role="alert"
    >
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
        <span className="sr-only">Close</span>
      </button>
      <strong>{message}</strong>
    </div>
  );
}

export default Alert;
