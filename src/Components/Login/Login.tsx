import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { UserProps } from "./interface1";
import "./Login.css";
import { useNavigate } from "react-router-dom";

interface Props {
  userList: UserProps["userList"];
  setUserList: Dispatch<SetStateAction<UserProps["userList"]>>;
}

const Login: FC<Props> = ({ userList, setUserList }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const setUserinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const setPasswordinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!user && !password) {
      alert("กรุณาใส่อีเมลล์และรหัสผ่านให้ถูกต้อง");
      return;
    }
    const userData = { user, password };
    setUserList([...userList, userData]);
    setUser("");
    setPassword("");
    console.log("เข้าสู่หน้าหลัก");
  };

  console.log(user, password);

  const signuppage = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="page">
        <div className="box">
          <h3 className="text-welcome">เข้าสู่ระบบ</h3>
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

          <button className="btn btn-primary" type="submit" onClick={handleClick}>
            เข้าสู่ระบบ
          </button>
          <button className="btn btn-success" onClick={signuppage}>
            ลงทะเบียน
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
/*
<link to="/signup" className="btn btn-success">
ลงทะเบียน
</link>
*/
