import React from "react";
import MathVieira from "../../assets/img/Matheus-Vieira.png";
import PaulVictor from "../../assets/img/Paulo-Victor.png";
import WelFaria from "../../assets/img/Wellington-Faria.png";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-20 md:pt-[120px] bg-dark flex justify-center"
    >
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2  block text-lg font-semibold text-white">
                Avaliações
              </span>
              <h2 className="mb-4 text-3xl  font-bold text-white sm:text-4xl md:text-[42px]">
                Nossos seguidores dizem..
              </h2>
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                Como sempre preso pela qualidade e resultado a seguir deixo o
                comentários de alguns de nossos seguidores
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="mb-12 bg-white p-8 shadow-testimonial"
              data-aos="fade-up"
            >
              <div className="ud-testimonial-ratings mb-3 flex items-center">
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
              </div>
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  “A melhor página sobre a melhor série ! "
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                  <img src={PaulVictor} alt="author" />
                </div>
                <div className="ud-testimonial-meta">
                  <h4 className="text-sm font-semibold">Paulo Victor</h4>
                  <p className="text-xs text-[#969696]">Seguidor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
              data-aos="fade-up"
            >
              <div className="ud-testimonial-ratings mb-3 flex items-center">
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
              </div>
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  “Pra quem curte a série indico essa página."
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                  <img src={MathVieira} alt="author" />
                </div>
                <div className="ud-testimonial-meta">
                  <h4 className="text-sm font-semibold">Matheus Vieira</h4>
                  <p className="text-xs text-[#969696]">Seguidor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial-12 bg-white p-8 shadow-testimonial"
              data-aos="fade-up"
            >
              <div className="ud-testimonial-ratings mb-3 flex items-center">
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
                <span className="mr-1 text-[#fbb040]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    className="fill-current"
                  >
                    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                  </svg>
                </span>
              </div>
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  “Recomendo a todos amantes da série !"
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                  <img src={WelFaria} alt="author" />
                </div>
                <div className="ud-testimonial-meta">
                  <h4 className="text-sm font-semibold">Weliton Faria</h4>
                  <p className="text-xs text-[#969696]">Seguidor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
