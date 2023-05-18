import { CustomCheckbox, CustomInput } from "form-fields-parth-khimani";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="Form">
      <h1 className="SignIn">Sign In</h1>
      <label className="label">Email:</label>
      <CustomInput
        className="InputTag"
        type="email"
        name="email"
        validationErrorMessage="*Invalid Email !"
        placeholder="abc@gmail.com"
      />
      <label className="label">Password:</label>
      <CustomInput
        className="InputTag"
        type="password"
        name="password"
        validationErrorMessage="*Please use a strong password !"
        validationPattern={/^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/}
        placeholder="password"
      />
      <CustomCheckbox
        label="Keep me logged in"
        value="LoggedIn"
        className="CheckBox"
      />
      <a>Forgot Password ?</a>
      <button>SIGN IN</button>
    </div>
  );
};

export default LoginForm;
