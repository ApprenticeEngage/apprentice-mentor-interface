import React, { useState } from "react";
// import NavBar from "../components/navBar";
// import Courses from "../components/courses";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { IoIosMenu } from "react-icons/io";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" text-text">
      <div className="flex flex-row justify-start p-4  h-screen bg-primary absolute">
        <div onClick={handleToggle}>
          {toggle ? null : <IoIosMenu size={30} />}
        </div>
        {toggle && (
          <Sidebar
            className="bg-text"
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: "#98B847",
              },
            }}
          >
            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  // only apply styles on first level elements of the tree
                  if (level === 0)
                    return {
                      color: disabled ? "#98B847" : "#AADF26",
                      backgroundColor: active ? "#ffffff" : undefined,
                    };
                },
              }}
            >
              <MenuItem
                onClick={handleToggle}
                className="flex flex-row justify-center"
              >
                <IoIosMenu size={30} />
              </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        )}
      </div>
    </div>
  );
};

export default Home;
