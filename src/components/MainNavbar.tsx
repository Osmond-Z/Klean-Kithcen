import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "./Logo";

const MainNavbar = (props: any) => (
  <AppBar elevation={0} {...props}>
    <Toolbar
    //  style={{ height: 64 }}
    >
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
