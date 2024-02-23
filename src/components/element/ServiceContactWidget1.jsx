import { product1 } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ServiceContactWidget1() {
  const { id } = useParams();

  const data = product1.find((item) => item.id == id);
  return (
    <>
      <div className="freelancer-style1 service-single mb-0">
        <div className="wrapper d-flex align-items-center">
          <div className="thumb position-relative mb25">
            <Image
              height={90}
              width={90}
              className="rounded-circle mx-auto"
              src={data?.author.img}
              alt="rounded-circle"
            />
            <span className="online" />
          </div>
          <div className="ml20">
            <h5 className="title mb-1">{data?.author.name}</h5>

            <div className="review">
              <p>
                <i className="fas fa-star fz10 review-color pr10" />
                <span className="dark-color">4.9</span> (595 reviews)
              </p>
            </div>
          </div>
        </div>
        <hr className="opacity-100" />
        <div className="details">
          <div className="fl-meta d-flex align-items-center justify-content-between">
            <a className="meta fw500 text-start">
              Location
              <br />
              <span className="fz14 fw400">London</span>
            </a>
            <a className="meta fw500 text-start">
              Rate
              <br />
              <span className="fz14 fw400">$90 / hr</span>
            </a>
            <a className="meta fw500 text-start">
              Job Success
              <br />
              <span className="fz14 fw400">%98</span>
            </a>
          </div>
        </div>
        <div className="d-grid mt30">
          <Link href="/freelancer-single" className="ud-btn btn-thm-border">
            Contact Me
            <i className="fal fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </>
  );
}
