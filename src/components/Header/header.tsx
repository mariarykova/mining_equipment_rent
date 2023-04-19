import React from "react";
import { Link, Router } from "react-router-dom";
import cn from "./header.module.css";

function Header() {
  return (
    <div className={cn.header}>
      <div className={cn.menu}>
        <Link className={cn.title} to="/catalogue">
          catalogue
        </Link>
        <div className={cn.title}>rent out</div>
        <div className={cn.title}>contacts</div>
      </div>
      <div className={cn.login}>DM</div>
    </div>
  );
}

export default Header;
