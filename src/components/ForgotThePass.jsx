import { Link } from "react-router-dom";
import styleForgot from "../style/forgotThePass.module.css";

export const ForgotThePass = () => {
  return (
    <div className={styleForgot.forgotThePass}>
      <Link to="/" className={styleForgot.forgotPassword}>
        Lupa Password?
      </Link>
    </div>
  );
};
