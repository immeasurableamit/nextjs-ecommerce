import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { apiRequestUrls, requests } from "../../src/helpers/apiAgent";
import { message } from "../../src/enums/message";
import { ResponseHandler } from "../../src/helpers/utils";
import { isEmpty, get } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(message.invalidEmail)
      .required(message.emailRequired),
    password: Yup.string().required(message.passwordRequired)
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: async function (values) {
      const email = values.email;
      const password = values.password;

      await requests
        .post(apiRequestUrls.login, { email, password })

        .then((res: any) => {
          toast.success("Welcome to saindex.");

          const response = ResponseHandler(res);
          if (get(router, "query.next", false)) {
            router.replace(get(router, "query.next", "/"));
          } else {
            router.replace("/");
          }
        })
        .catch((err) => {
          if (!isEmpty(get(err, "response.data.message", ""))) {
            toast.error(get(err, "response.data.message", ""));
          } else {
            // const error = ErrorHandler(err);
            // setFormErrors(get(error, "errors", []));
          }
        });
    }
  });

  return (
    <div className="auth-page-wrapper pt-5">
      {/* <!-- auth page bg --> */}
      <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div className="bg-overlay"></div>

        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1440 120"
          >
            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
          </svg>
        </div>
      </div>

      {/* <!-- auth page content --> */}
      <div className="auth-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 mb-4 text-white-50">
                <div>
                  <a className="d-inline-block auth-logo">
                    <img src="assets/images/logo-dark.png" alt="" height="60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end row --> */}

          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card mt-4">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Welcome Back !</h5>
                    <p className="text-muted">Sign in to continue to Velzon.</p>
                  </div>
                  <div className="p-2 mt-4">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.email && formik.errors.email
                              ? "border-red-400"
                              : "border-gray-300"
                          }`}
                          id="email"
                          placeholder="Enter username"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <span style={{ color: "#f06548" }}>
                            {formik.errors.email}
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <div className="float-end">
                          <a
                            href="auth-pass-reset-basic.html"
                            className="text-muted"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <label className="form-label" htmlFor="password-input">
                          Password
                        </label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <input
                            type="password"
                            id="password"
                            className={`form-control pe-5${
                              formik.touched.password && formik.errors.password
                                ? "border-red-400"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                          />
                          {formik.touched.password &&
                            formik.errors.password && (
                              <span style={{ color: "#f06548" }}>
                                {formik.errors.password}
                              </span>
                            )}
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </button>
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="auth-remember-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="auth-remember-check"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-4">
                        <button className="btn btn-success w-100" type="submit">
                          Sign In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <div className="signin-other-title">
                          <h5 className="fs-13 mb-4 title">Sign In with</h5>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon waves-effect waves-light"
                          >
                            <i className="ri-facebook-fill fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-icon waves-effect waves-light"
                          >
                            <i className="ri-google-fill fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-dark btn-icon waves-effect waves-light"
                          >
                            <i className="ri-github-fill fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-info btn-icon waves-effect waves-light"
                          >
                            <i className="ri-twitter-fill fs-16"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- end card body --> */}
              </div>
              {/* <!-- end card --> */}

              <div className="mt-4 text-center">
                <p className="mb-0">
                  Don't have an account ?{" "}
                  <a
                    href="auth-signup-basic.html"
                    className="fw-semibold text-primary text-decoration-underline"
                  >
                    {" "}
                    Signup{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end auth page content --> */}
      <ToastContainer />

      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="mb-0 text-muted">
                  &copy;{" "}
                  <script>document.write(new Date().getFullYear())</script>{" "}
                  Velzon. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- end Footer --> */}
    </div>
  );
};
export default Index;
