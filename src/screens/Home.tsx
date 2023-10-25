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
import NavBar from "../components/navBar";
import Courses from "../components/courses";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" text-text">
      <div className="absolute flex flex-row justify-start p-4  h-screen bg-primary">
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
                button: ({ active, disabled }) => {
                  // only apply styles on first level elements of the tree

                  return {
                    color: disabled ? "#000000" : "#000000",
                    backgroundColor: active ? "#000000" : undefined,
                    ":hover": { backgroundColor: "#AADF26" },
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
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        )}
      </div>
        <NavBar />
        <Courses />
    </div>
  );
};

export default Home;
