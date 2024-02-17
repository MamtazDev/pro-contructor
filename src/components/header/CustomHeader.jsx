import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomHeader = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <Link class="navbar-brand" href="/">
            <Image
              height={50}
              width={80}
              className="object-fit-contain"
              src="/images/logo.png"
              alt="Header Logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li class="category_parent nav-item">
                <a className={`btn-mega fw500 `}>
                  <span
                    className={`pl30 pl10-xl pr5 fz15 vam flaticon-menu  `}
                  />
                  Categories
                </a>
                <div className="category_child">
                  <p>Home Renovations</p>
                  <p>Landscaping & Outdoor Services</p>
                  <p>Plumbing & HVAC</p>
                  <p>Electrical Services</p>
                  <p>Roofing & Exterior Services</p>
                  <p>Painting Services</p>
                  <p>Commercial Construction</p>
                  <p>General Maintenance & Repairs</p>
                </div>
              </li>
              <li class="nav-item">
                <Link href="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link href="/service-1">service</Link>
              </li>
              <li class="nav-item">
                <Link href="/about-1">about</Link>
              </li>
              <li class="nav-item">
                <Link href="/shop-list">shop</Link>
              </li>
              <li class="nav-item">
                <Link href="/blog-single">blog</Link>
              </li>
              <li class="nav-item">
                <Link href="/contact">contact</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <div className="d-flex align-items-center">
                <a
                  className="login-info"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  <span className="flaticon-loupe"></span>
                </a>
                <Link className="login-info mx10-lg mx30" href="/become-seller">
                  <span className="d-none d-xl-inline-block">Become a</span>{" "}
                  contractor
                </Link>
                <Link className="login-info mr10-lg mr30" href="/login">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomHeader;
