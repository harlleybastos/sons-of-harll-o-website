import React from "react";
import Logo from "../../assets/img/logo.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <div className="container m-auto">
        <div data-aos="fade-up" className="bg-white">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden border lg:flex">
                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <h2 className="mb-6 uppercase text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Nossa história
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Em 2017 decidi abrir uma Fan page no Facebook com a temática
                    de Sons of Anarchy então pensei :"Qual nome dar ?"... Pouco
                    tempo depois tive uma grande ideia: "Bom, meu nome é Harlley
                    e a página é sobre Sons of Anarchy, por que não Sons of
                    Harllão ?"
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Desde então estou fundei essa grande familia de mais de 15
                    mil seguidores no Facebook e 5 mil seguidores no Instagram
                    com a unica missão de não deixar o brilho de todo esse
                    universo SAMCRO se apagar.
                  </p>
                  <a className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg">
                    Learn More
                  </a>
                </div>
                <div className="container text-center">
                  <div className="relative z-10 inline-block">
                    <img
                      src={Logo}
                      alt="image"
                      className="mx-auto p-20 lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
