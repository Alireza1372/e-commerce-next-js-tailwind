import React from "react";

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <div className="navbar__link relative cursor-pointer">Home</div>
          <div className="navbar__link relative cursor-pointer">CATEGORIES</div>
          <div className="navbar__link relative cursor-pointer">{`MEN'S`}</div>
          <div className="navbar__link relative cursor-pointer">{`WOMEN'S`}</div>
          <div className="navbar__link relative cursor-pointer">JEWELRY</div>
          <div className="navbar__link relative cursor-pointer">BLOG</div>
          <div className="navbar__link relative cursor-pointer">HOT OFFERS</div>
        </div>
      </div>
    </div>
  );
}
