import React from "react";

type Props = {
  source: string;
  background: string;
  title: string;
  mainText: string;
  id: string;
};

const DownloadSection: React.FC<Props> = ({
  background,
  source,
  title,
  mainText,
  id,
}) => {
  return (
    <section
      id={id}
      className={`bg-[${background}] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] flex justify-center `}
    >
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 ">
              <div className="items-center justify-between overflow-hidden border lg:flex shadow-testimonial">
                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    {title}
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    {mainText}
                  </p>

                  <a className="inline-flex items-center justify-center rounded bg-dark py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg">
                    Quero BAIXAR ou ASSISTIR !
                  </a>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block p-5 ">
                    <img
                      src={source}
                      alt="image"
                      className="w-full rounded-md"
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

export default DownloadSection;
