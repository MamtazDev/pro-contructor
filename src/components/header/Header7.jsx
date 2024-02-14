import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import Mega from "./Mega";
import MobileNavigation6 from "./MobileNavigation6";

export default function Header7() {
  return (
    <>
      <header className="header-nav nav-innerpage-style bg-transparent stricky main-menu border-0 slideIn animated  ">
        {/* Ace Responsive Menu */}
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo2" href="/">
                    <Image
                      height={50}
                      width={80}
                      className="object-fit-contain"
                      src="/images/logo.png"
                      alt="Header Logo"
                    />
                    </Link>
                  </div>
                  <div className="home1_style">
                    <Mega />
                  </div>
                  <Navigation />
                </div>
              </div>
              <div className="col-auto px-0">
                <div className="d-flex align-items-center">
                  <a
                    className="login-info"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                  <Link
                    className="login-info mx10-lg mx30"
                    href="/become-seller"
                  >
                    <span className="d-none d-xl-inline-block">Become a</span>{" "}
                    Seller
                  </Link>
                  <Link className="login-info mr10-lg mr30" href="/login">
                    Sign in
                  </Link>
                  <Link className="ud-btn btn-thm add-joining" href="/register">
                    Join
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation6 />
    </>
  );
}
