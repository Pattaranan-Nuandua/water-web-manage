import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { UserProps } from "./interface1";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

interface Props {
  userList: UserProps["userList"];
  setUserList: Dispatch<SetStateAction<UserProps["userList"]>>;
}

const Signup: FC<Props> = ({ userList, setUserList }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcon, setPasswordcon] = useState("");

  const setUserinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const setPasswordinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const setPasswordconinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordcon(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!user || !password || !passwordcon) {
      alert("กรุณาใส่อีเมลล์และรหัสผ่าน");
      console.log("ลงทะเบียนไม่ได้");
      return;
    }
    if (password !== passwordcon) {
      alert("กรุณาใส่รหัสผ่านให้ตรงกัน");
      console.log("ลงทะเบียนไม่ได้");
      return;
    }
    const userData = { user, password };
    setUserList([...userList, userData]);
    setUser("");
    setPassword("");
    setPasswordcon("");
    console.log("ลงทะเบียนสำเร็จ");
  };

  const signuppage = () => {
    navigate("/login");
  };

  console.log(user, password, passwordcon);

  return (
    <>
      <div className="page">
        <div className="box">
          <h3 className="text-welcome">ลงทะเบียน</h3>
          <h3 className="text-water">ระบบบริหารจัดการมาตรวัดน้ำอัจฉริยะ</h3>
          <div className="mb">
            <label id="email">
              <label className="form-label">อีเมล</label>
              <div>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="form-control"
                  value={user}
                  onChange={setUserinputHandler}
                />
              </div>
            </label>
          </div>
          <div className="mb">
            <label id="email">
              <label className="text-control">รหัสผ่าน</label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={setPasswordinputHandler}
                />
              </div>
            </label>
          </div>
          <div className="mb">
            <label id="email">
              <label className="text-controll">ยืนยันรหัสผ่าน</label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={passwordcon}
                  onChange={setPasswordconinputHandler}
                />
              </div>
            </label>
          </div>

          <button className="btn-primary" type="submit" onClick={handleClick}>
            ยืนยันลงทะเบียน
          </button>
          <button className="btn-success" onClick={signuppage}>
            กลับไปเข้าสู่ระบบ
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
