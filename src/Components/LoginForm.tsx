import { CustomCheckbox, CustomInput } from "form-fields-parth-khimani";
import apple from "../images/apple-logo.png";
import google from "../images/google-logo.png";
import pngwing from "../images/pngwing-logo.png";
import xero from "../images/xero-logo.png";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="form">
      <h1 className="sign-in">Sign In</h1>
      <label className="input-label">Email </label>
      <label className="star-label">*</label>
      <CustomInput
        className="input-tag"
        type="email"
        name="email"
        validationErrorMessage="*Invalid Email !"
        placeholder="abc@gmail.com"
      />
      <label className="input-label">Password </label>
      <label className="star-label">*</label>
      <CustomInput
        className="input-tag"
        type="password"
        name="password"
        validationErrorMessage="*Please use a strong password !"
        validationPattern={/^[A-Za-z]\w{7,14}$/}
        placeholder="Password"
      />

      <div className="flex-container">
        <CustomCheckbox
          label="Keep me logged in"
          value="LoggedIn"
          className="check-box"
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
        <img
          src={google}
          alt="google"
          style={{ height: "10%", width: "10%" }}
        />
        <img src={apple} alt="apple" style={{ height: "10%", width: "10%" }} />
        <img src={pngwing} alt="qb" style={{ height: "10%", width: "10%" }} />
        <img src={xero} alt="xero" style={{ height: "10%", width: "10%" }} />
      </div>

      <div className="link">
        <p>
          Already have an account ? <a>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
