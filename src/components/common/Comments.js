import React from "react";

const Comments = () => {
  return (
    <div className="comment-respond">
      <h3 className="reply-title text-center">Leave a comment</h3>
      <div className="comemnt-form">
        <form>
          <div className="grid grid-cols-12 gap-4">
            <div className="lg:col-span-12 col-span-12">
              <div className="form-group">
                <textarea
                  className="form-control message-box"
                  id="message-box"
                  name="message-box"
                  rows="3"
                  placeholder="Type Message Here..."
                ></textarea>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="Contact_Name"
                  name="Contact_Name"
                  placeholder="Contact Name"
                />
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="Emil_Address"
                  name="Emil_Address"
                  placeholder="Emil Address"
                />
              </div>
            </div>
            <div className="lg:col-span-12 text-center">
              <button className="submit-btn" type="button">
                Submit Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
