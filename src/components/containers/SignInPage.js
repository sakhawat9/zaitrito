/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";
import { FiUser } from "react-icons/fi";

const SignInPage = () => {
  return (
    <div className="sign-in-page section-padding text-center">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 items-center justify-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="login-wrap">
              <div className="icon flex items-center justify-center">
                <span className="far fa-user"><FiUser /></span>
              </div>
              <h1 className="text-center mb-4">Sign In</h1>
              <form className="login-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Username"
                    required=""
                    autocomplete="off"
                    style={{
                      backgroundImage:
                        "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;)",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                    }}
                  />
                </div>
                <div className="form-group flex">
                  <input
                    type="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    required=""
                    autocomplete="off"
                    style={{
                      backgroundImage:
                        "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;)",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                      cursor: "auto",
                    }}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="form-control  primary-btn rounded submit px-3 primary-btn"
                  >
                    Login
                  </button>
                </div>
                <div className="remember-box form-group md:flex justify-between mb-0">
                  <div>
                    <label className="checkbox-wrap">
                      Remember Me
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="md:text-end lg:text-end">
                    <a href="#" className="forget-password-link">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="already-have-account">
                  Don't have an account?
                  <a href="sign-up.html" className="forget-password-link">
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
