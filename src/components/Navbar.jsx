import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MyDrawer from "./MyDrawer";

const Navbar=()=>{
const data=[{name:'Home',link:"/"},{name:'About',link:"/about"},{name:'Contact',link:"/contact"},{name:"Voucher",link:"/voucher"}];
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="static">
      <Toolbar>
      {isMobile ? (
        <MyDrawer/>
        ) : (
        <div className="navLink">
        {data.map((elem,i)=>{
            return(
                <Link  as="li" key={i} to={elem.link} className="link">{elem.name}</Link>
            )
        })}
        </div>)}
      </Toolbar>
    </AppBar>

  );
}
export default Navbar;
