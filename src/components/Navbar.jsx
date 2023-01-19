import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import MyDrawer from "./MyDrawer";

const Navbar=()=>{
const data=[{name:'Home',link:"/"},{name:'About',link:"/about"},{name:'Contact',link:"/contact"}];
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="static">
      <Toolbar>
      {isMobile ? (
        <MyDrawer/>
        ) : (
        <NavLink className="navLink">
        {data.map((elem,i)=>{
            return(
                <Link key={i} to={elem.link} className="link">{elem.name}</Link>
            )
        })}
        </NavLink>)}
      </Toolbar>
    </AppBar>

  );
}
export default Navbar;
