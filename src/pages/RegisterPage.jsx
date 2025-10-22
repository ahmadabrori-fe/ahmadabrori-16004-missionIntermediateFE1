import { useEffect } from "react";
import { Header } from "../components/Header";
import { TitleInAuth } from "../components/TitleInAuth";
import { LabelInAuth } from "../components/LabelInAuth";
import { InputInAuth } from "../components/InputInAuth";
import { Eye } from "../components/Eye";
import { Select } from "../components/Select";
import { ForgotThePass } from "../components/ForgotThePass";
import { ButtonInAuth } from "../components/ButtonInAuth";
import { Divider } from "../components/Divider";
import "../style/formRegister.css";
import styleButton from "../style/ButtonInAuth.module.css";
import styleSelect from "../style/select.module.css";
import flag from "../assets/Indonesia (ID).png";
import logoGoogle from "../assets/logo-google.png";

export const FormRegister = () => {
  useEffect(() => {
    document.title = "Register | videobelajar";
  });

  return (
    <>
      <Header />
      <main className="mainRegister">
        <div className="containerRegister">
          <TitleInAuth
            title="Pendaftaran Akun"
            subtitle="Yuk, daftarkan akunmu sekarang juga!"
          />
          <form className="formReg">
            <LabelInAuth type="nama-lengkap" text="Nama Lengkap" />
            <InputInAuth
              type="name"
              name="nama-lengkap"
              id="nama-lengkap"
              placeholder="Masukkan nama lengkap anda"
            />
            <LabelInAuth type="username" text="E-Mail" />
            <InputInAuth
              type="email"
              name="username"
              id="username"
              placeholder="Masukkan email anda"
            />
            <LabelInAuth type="jk" text="Jenis Kelamin" />
            <Select
              name="jenis-kelamin"
              id="jk"
              value1="Pria"
              text1="Pria"
              value2="Wanita"
              text2="Wanita"
              className={styleSelect.select}
            />
            <LabelInAuth type="phoneNumber" text="No. Hp" />
            <div className="code-religion">
              <div className="flagReg">
                <span className="flag-icon">
                  <img src={flag} alt="" />
                </span>
              </div>
              <Select
                name="phoneNumber"
                id="phoneNumber"
                className={styleSelect.phoneNumber}
                value1="Indonesia"
                text1="+62"
                value2="Singapura"
                text2="+65"
              />
              <input className="number" type="tel" />
            </div>
            <div className="form-passwordReg">
              <LabelInAuth type="password" text="Kata Sandi" />
              <InputInAuth
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan password anda"
              />
              <Eye />
            </div>
            <div className="form-passwordReg">
              <LabelInAuth
                type="password-confirm"
                text="Konfirmasi Kata Sandi"
              />
              <InputInAuth
                type="password"
                name="password-confirm"
                id="password-confirm"
                placeholder="Masukkan ulang password anda"
              />
              <Eye />
            </div>
            <ForgotThePass />
            <ButtonInAuth className={styleButton.buttonLogin} text="Masuk" />
            <ButtonInAuth
              className={styleButton.buttonRegister}
              text="Daftar"
            />
            <Divider />
            <div className="button-signin-with-googleReg">
              <ButtonInAuth
                className={styleButton.loginWithGoogle}
                text="Masuk Dengan Google"
                img={logoGoogle}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
