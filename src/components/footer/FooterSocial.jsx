import Link from "next/link";

export default function FooterSocial() {
  return (
    <>
      <div className="social-widget text-center text-md-end">
        <div className="social-style1">
          <Link className="text-white me-2 fw500 fz17" href="/">
            Follow us
          </Link>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61556516969476"
          >
            <i className="fab fa-facebook-f list-inline-item" />
          </a>
          {/* <a>
            <i className="fab fa-twitter list-inline-item" />
          </a> */}
          <a
            target="_blank"
            href="https://www.instagram.com/procontractorsplus/"
          >
            <i className="fab fa-instagram list-inline-item" />
          </a>
          {/* <a>
            <i className="fab fa-linkedin-in list-inline-item" />
          </a> */}
        </div>
      </div>
    </>
  );
}
