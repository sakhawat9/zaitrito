import React from "react";

const ErrorArea = () => {
  return (
    <div className="error-page-area section-padding">
      <div className="container mx-auto px-8">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-12 text-center">
            <h1 className="font-bold">ERROR 404 NOT FOUND</h1>
            <p>
              You may have mis-typed the URL. Or the page has been
              removed.Actually, there is nothing to see here... Click on the
              button below to do something, Thanks!
            </p>
            <a href="index.html" className="primary-btn">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorArea;
