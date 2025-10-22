import { Header } from "../components/Header";
import { TitleInAuth } from "../components/TitleInAuth";
import { LabelInAuth } from "../components/LabelInAuth";
import { InputInAuth } from "../components/InputInAuth";
import { Eye } from "../components/Eye";
import { ForgotThePass } from "../components/ForgotThePass";
import { ButtonInAuth } from "../components/ButtonInAuth";
import { Divider } from "../components/Divider";
import logoGoogle from "../assets/logo-google.png";
import "../style/FormLogin.css";
import styleButtonInAuth from "../style/buttonInAuth.module.css";

export const FormLogin = () => {
  return (
    <>
      <Header />
      <main className="mainLogin">
        <div className="containerLogin">
          <TitleInAuth
            title="Masuk ke Akun"
            subtitle="Yuk, Lanjutin belajarmu di videobelajar."
          />
          <form className="form">
            <LabelInAuth type="username" text="E-Mail" />
            <InputInAuth
              type="email"
              name="username"
              id="username"
              placeholder="Masukkan email anda"
            />
            <div className="form-password">
              <LabelInAuth type="password" text="Kata Sandi" />
              <InputInAuth
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan password anda"
              />
              <Eye />
            </div>
            <ForgotThePass />
            <ButtonInAuth
              text="Masuk"
              className={styleButtonInAuth.buttonLogin}
            />
            <ButtonInAuth
              text="Daftar"
              className={styleButtonInAuth.buttonRegister}
            />
            <Divider />
            <div className="button-signin-with-google">
              <ButtonInAuth
                text="Masuk dengan Google"
                className={styleButtonInAuth.loginWithGoogle}
                img={logoGoogle}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
