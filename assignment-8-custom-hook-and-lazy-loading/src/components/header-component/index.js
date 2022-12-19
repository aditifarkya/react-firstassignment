//header component with search bar, logo and icon

import logo from "./team_logo.png";
import user from "./user.png";
import "./index.scss";

const HeaderComponent = () => {
  return (
    <div className="header_div">
      <img alt="Logo" src={logo} className="header__logo" />
      <hr
        style={{ height: "100px", marginLeft: "20px", marginRight: "20px" }}
      />
      <h1 style={{ color: "deeppink" }}>Brainly Fools</h1>
      <div className="header__img">
        <img alt="icon" src={user} className="header__icon" />
      </div>
    </div>
  );
};
export default HeaderComponent;
