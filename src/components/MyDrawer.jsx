import { Drawer,
         List,
        ListItem,
        ListItemText} from "@material-ui/core";
import React,{useState} from "react";
import {Link} from "react-router-dom";

const MyDrawer = () => {
    const [open, setOpen] = useState(false);
  
    const handleDrawer = () => {
      setOpen(!open);
    };
    const data=[{name:'Home',link:"/"},{name:'About',link:"/about"},{name:'Contact',link:"/contact"}];
    
  
    return (
      <div>
        <button onClick={handleDrawer}>Menu</button>
        <Drawer open={open} onClose={handleDrawer}>
          <div>
          <List>
          {data.map((elem,i)=>{
            return(
              <ListItem key={i}>
                <ListItemText>
                  <Link to={elem.link}>{elem.name}</Link>
                 </ListItemText>
              </ListItem>
            )
          })}
          </List>
          </div>
        </Drawer>
      </div>
    );
  }

  export default MyDrawer;