import React, { useEffect, useState } from 'react';
import Link from 'next/link'

export const Nav = ({ title, links }) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary fixed-top">
      <div className="container">
        <Link href="/">
          {/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <a className="navbar-brand">
            <span className="">{title}</span>
          </a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button" data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav ms-auto">
            {links.map((value, index) => (
              <Link key={index} href={value.link} >
                <a className="nav-link nav-link-custom">{value.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}