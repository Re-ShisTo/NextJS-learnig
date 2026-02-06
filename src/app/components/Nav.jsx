import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/post-list">Post List</Link>
        </li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Nav;
