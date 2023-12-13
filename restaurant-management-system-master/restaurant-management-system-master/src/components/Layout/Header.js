import { AppBar, Box, Toolbar, Typography } from "@mui/material";
// import Logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <p alt="logo" height={"70"} width="250" className="fork">Fork'd🍴</p>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home🏡
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu📃</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About us</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact📟</NavLink>
                </li>
                <li>
                  <NavLink to={"/nl"}>CallBack/Orders☎️</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
