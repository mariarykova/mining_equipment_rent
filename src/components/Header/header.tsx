import React from "react";
import cn from "./header.module.css";

function Header() {
  return (
    <div className={cn.header}>
      <div className={cn.menu}>
        <div className={cn.title}>catalogue</div>
        <div className={cn.title}>rent out</div>
        <div className={cn.title}>contacts</div>
      </div>
      <div className={cn.login}>DM</div>
    </div>
  );
}

export default Header;
