import { CustomCheckbox, CustomInput } from "form-fields-parth-khimani";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="Form">
      <h1 className="SignIn">Sign In</h1>
      <label className="label">Email</label>
      <label className="star"> *</label>
      <CustomInput
        className="InputTag"
        type="email"
        name="email"
        validationErrorMessage="*Invalid Email !"
        placeholder="abc@gmail.com"
      />
      <label className="label">Password</label>
      <label className="star"> *</label>
      <CustomInput
        className="InputTag"
        type="password"
        name="password"
        validationErrorMessage="*Please use a strong password !"
        validationPattern={/^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/}
        placeholder="Password"
      />
      
      <div className="flex-container">
        <CustomCheckbox
          label="Keep me logged in"
          value="LoggedIn"
          className="CheckBox"
        />
        <a>Forgot Password ?</a>
      </div>
      

      <button>SIGN IN</button>

      <div className="line">
        <hr></hr>
        <div>or Continue with</div>
        <hr></hr>
      </div>

      <div className="logos">
        <img src={"../public/google-log.png"} alt="google" /> 
        <img src={"../public/apple-log.png"} alt="apple" />
        <img src={"../public/pngwing-log.png"} alt="qb" />
        <img src={"../public/xero-log.png"} alt="xero" />
      </div>

      <div className="link">
        <p>Already have an account ? <a>Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
