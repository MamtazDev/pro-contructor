import Image from "next/image";
import Link from "next/link";

export default function MobileNavigation5() {
  return (
    <>
      <div id="page" className="mobilie_header_nav stylehome1">
        <div className="mobile-menu">
          <div className="header bdrb1">
            <div className="menu_and_widgets">
              <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                <Link className="mobile_logo" href="/home-2">
                  <Image
                    height={50}
                    width={80}
                    className="object-fit-contain"
                    src="/images/logo.png"
                    alt="Header Logo"
                  />
                </Link>
                <div className="right-side text-end">
                  <Link href="/login">join</Link>
                  <a
                    className="menubar ml30"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <Image
                      height={20}
                      width={20}
                      src="/images/mobile-dark-nav-icon.svg"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="posr">
              <div className="mobile_menu_close_btn">
                <span className="far fa-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
