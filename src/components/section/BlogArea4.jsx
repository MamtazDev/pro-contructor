"use client";
import Image from "next/image";
import Comment1 from "../element/Comment1";
import ReviewForm1 from "../element/ReviewForm1";
import { useParams } from "next/navigation";
import { blog1 } from "@/data/blog";

export default function BlogArea4() {
  const param = useParams();

  const blogSingle = blog1.find((item) => item.id == param.id);
  return (
    <>
      <section className="our-blog pt40">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="100ms">
            <div className="col-lg-12">
              {blogSingle ? (
                <h2 className="blog-title">{blogSingle.title}</h2>
              ) : (
                <>
                  <h2 className="blog-title">Stay Informed, Stay Inspired:</h2>{" "}
                </>
              )}

              {blogSingle ? (
                <div className="blog-single-meta">
                  <div className="post-author d-sm-flex align-items-center">
                    <Image
                      height={40}
                      width={40}
                      className="mr10 object-fit-contain"
                      src={blogSingle?.author.img}
                      alt="img"
                    />
                    <a className="pr15 body-light-color">Leslie Alexander</a>
                    <a className="ml15 pr15 body-light-color">Business</a>
                    <a className="ml15 body-light-color">December 2, 2022</a>
                  </div>
                </div>
              ) : (
                <div className="blog-single-meta">
                  <div className="post-author d-sm-flex align-items-center">
                    <Image
                      height={40}
                      width={40}
                      className="mr10 object-fit-contain"
                      src="/images/blog/author-1.png"
                      alt="img"
                    />
                    <a className="pr15 body-light-color">Leslie Alexander</a>
                    <a className="ml15 pr15 body-light-color">Business</a>
                    <a className="ml15 body-light-color">December 2, 2022</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="mx-auto maxw1600 mt60 wow fadeInUp"
          data-wow-delay="300ms"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="large-thumb">
                {blogSingle ? (
                  <Image
                    height={30}
                    width={1501}
                    className="w-100 h-auto bdrs16 object-fit-cover"
                    src={blogSingle.img}
                    style={{
                      maxHeight: "476px",
                      objectPosition: "top",
                    }}
                    alt="single blog"
                  />
                ) : (
                  <Image
                    height={530}
                    width={1501}
                    className="w-100 h-100 bdrs16 object-fit-conver"
                    src="/images/ICONS/hammer.jpg"
                    alt="single blog"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="roww wow fadeInUp" data-wow-delay="500ms">
            <div className="col-xl-8 offset-xl-2">
              <div className="ui-content mt45 mb60">
                <h5 className="mb20">Introduction:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    When it comes to home improvement or construction projects,
                    the choice of a contractor can make all the difference.
                    Enter "Pro Contractors Plus," a company that stands out in
                    the industry for its commitment to professional excellence
                    and client satisfaction. In this blog, we'll explore what
                    makes Pro Contractors Plus a top choice for those seeking
                    high-quality construction services.
                  </p>
                </p>
                <h5 className="mb20">Professional Expertise:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    Pro Contractors Plus takes pride in its team of seasoned
                    professionals who bring a wealth of experience to every
                    project. From general contractors to specialized experts in
                    various fields such as electrical, plumbing, and
                    landscaping, the company ensures that clients receive
                    top-notch service tailored to their specific needs.
                  </p>
                </p>
                <h5 className="mb20">Quality Craftsmanship:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    One of the key pillars of Pro Contractors Plus is its
                    dedication to delivering exceptional craftsmanship. Whether
                    it's a home renovation, a commercial build, or a landscaping
                    project, the team prioritizes quality at every step. From
                    the selection of materials to the finishing touches, clients
                    can trust that their vision will be brought to life with
                    precision and care.
                  </p>
                </p>
                <h5 className="mb20">Comprehensive Services:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    Pro Contractors Plus doesn't just stop at basic construction
                    services; they offer a comprehensive range of solutions to
                    meet diverse project requirements. This includes everything
                    from initial consultation and planning to the execution of
                    the project and post-construction support. The goal is to
                    provide clients with a seamless and stress-free experience
                    from start to finish.
                  </p>
                </p>
                <h5 className="mb20">Client-Centric Approach:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    What sets Pro Contractors Plus apart is its client-centric
                    approach. The company understands that each project is
                    unique, and they prioritize open communication and
                    collaboration with clients. This ensures that the client's
                    vision is understood and incorporated into every aspect of
                    the project. Regular updates and transparent processes
                    contribute to a positive client experience.
                  </p>
                </p>
                <h5 className="mb20">Innovation and Technology:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    Pro Contractors Plus stays at the forefront of industry
                    trends by embracing innovation and technology. Utilizing
                    cutting-edge tools and techniques, they enhance the
                    efficiency and effectiveness of their services. This
                    commitment to staying current ensures that clients benefit
                    from the latest advancements in construction and design.
                  </p>
                </p>
                <h5 className="mb20">Positive Testimonials:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    The success of Pro Contractors Plus is reflected in the
                    glowing testimonials from satisfied clients. These
                    testimonials speak volumes about the company's reliability,
                    professionalism, and the ability to exceed client
                    expectations. Hearing from those who have experienced the
                    excellence of Pro Contractors Plus firsthand provides
                    prospective clients with confidence in their choice.
                  </p>
                </p>
                <h5 className="mb20">Conclusion:</h5>
                <p className="mb25 ff-heading text">
                  <p className="text">
                    Pro Contractors Plus is more than just a construction
                    company; it's a partner in turning visions into reality.
                    With a team of skilled professionals, a commitment to
                    quality, and a client-centric approach, Pro Contractors Plus
                    has earned its reputation as a trusted name in the industry.
                    Whether you're embarking on a home renovation or a
                    commercial project, choosing Pro Contractors Plus means
                    choosing a partner dedicated to bringing your ideas to life
                    with unparalleled excellence.
                  </p>
                </p>
              </div>

              {/* <Comment1 /> */}
              {/* <ReviewForm1 /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
