import styleForgot from "../style/forgotThePass.module.css";

export const ForgotThePass = () => {
  return (
    <div className={styleForgot.forgotThePass}>
      <a className={styleForgot.forgotPassword} href="/">
        Lupa Password?
      </a>
    </div>
  );
};
