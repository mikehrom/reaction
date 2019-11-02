"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileLoginValidator = exports.MobileSignUpValidator = exports.LoginValidator = exports.ForgotPasswordValidator = exports.SignUpValidator = exports.email = void 0;

var _yup = _interopRequireDefault(require("yup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var email = _yup.default.string().email("Please enter a valid email.").required("Please enter a valid email.");

exports.email = email;

var name = _yup.default.string().required("Name is required.");

var password = _yup.default.string().required("Password required").min(8, "Your password must be at least 8 characters");

var loginPassword = _yup.default.string().required("Password required");

var accepted_terms_of_service = _yup.default.boolean().required("You must agree to our terms to continue.").oneOf([true]);

var SignUpValidator = _yup.default.object().shape({
  name: name,
  email: email,
  password: _yup.default.string().required("Password required").min(8, "Password must be at least 8 characters."),
  accepted_terms_of_service: accepted_terms_of_service
});

exports.SignUpValidator = SignUpValidator;

var ForgotPasswordValidator = _yup.default.object().shape({
  email: email
});

exports.ForgotPasswordValidator = ForgotPasswordValidator;

var LoginValidator = _yup.default.object().shape({
  email: email,
  password: _yup.default.string().required("Password required.")
});

exports.LoginValidator = LoginValidator;
var MobileSignUpValidator = {
  email: _yup.default.object().shape({
    email: email,
    accepted_terms_of_service: accepted_terms_of_service
  }),
  name: _yup.default.object().shape({
    name: name
  }),
  password: _yup.default.object().shape({
    password: password
  })
};
exports.MobileSignUpValidator = MobileSignUpValidator;
var MobileLoginValidator = {
  email: _yup.default.object().shape({
    email: email
  }),
  password: _yup.default.object().shape({
    password: loginPassword
  })
};
exports.MobileLoginValidator = MobileLoginValidator;
//# sourceMappingURL=Validators.js.map