import React from "react";
import Logo from "../../assets/img/logo.png";
import Hero from "../../assets/img/hero.png";

const MainSection = () => {
  return (
    <div
      id="home"
      data-aos="fade-up"
      className="relative overflow-hidden bg-[#171717] pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="w-full">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              <img
                src={Logo}
                alt="image"
                className="mx-auto w-full max-w-[250px]"
              />
            </div>
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-8 uppercase text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                A sua comunidade favorita de Sons of Anarchy
              </h1>
              <p className="mx-auto mb-10 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                Ajude-nos a crescer se inscrevendo em nosso canal do Youtube !
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center">
                <li>
                  <a
                    href="https://links.tailgrids.com/play-download"
                    className="inline-flex items-center justify-center rounded-lg bg-white py-4 px-6 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:text-primary hover:shadow-lg sm:px-10"
                  >
                    Inscrever-se
                  </a>
                </li>
              </ul>
              <div data-aos="fade-up" className="text-center">
                <img src={Hero} alt="image" className="mx-auto w-full" />
              </div>
            </div>
          </div>

          <div className="w-full px-4">
            <div
              data-aos="fade-up"
              className="relative z-10 mx-auto max-w-[845px]"
              data-wow-delay=".25s"
            >
              <div className="mt-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
