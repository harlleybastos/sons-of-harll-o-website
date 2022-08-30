import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GoogleLoginResponse } from "react-google-login";
import useLocalStorage from "use-local-storage";
import ModalStepOne from "./components/Modal/StepOne";
import ModalStepThree from "./components/Modal/StepThree";
import ModalStepTwo from "./components/Modal/StepTwo";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [googleLink, setGoogleLink] = useLocalStorage("googleLink", "");

  useEffect(() => {
    if (!hasOverflow) {
      document.body.classList.add("over-hidden");
    } else {
      document.body.classList.remove("over-hidden");
    }
  }, [hasOverflow]);

  const handleModal = useCallback(() => {
    setModalIsOpen((oldState) => !oldState);
    if (currentStep >= 0) {
      setHasOverflow(false);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setCurrentStep(0);
    setHasOverflow(true);
    setModalIsOpen(false);
  }, []);

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

                  <button
                    className="bg-dark hover:bg-red-500 hover:text-black text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleModal}
                  >
                    Quero baixar / assistir !
                  </button>
                </div>
                <div className="text-center">
                  <div className="relative inline-block p-5 ">
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
      {currentStep === 0 && (
        <ModalStepOne
          handleModal={handleModal}
          modalIsOpen={modalIsOpen}
          setStep={setCurrentStep}
          setHasOverflow={setHasOverflow}
          handleCloseModal={handleCloseModal}
        />
      )}
      {currentStep === 1 && (
        <ModalStepTwo
          setStep={setCurrentStep}
          handleModal={handleModal}
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleCloseModal}
        />
      )}

      {currentStep === 2 && (
        <ModalStepThree
          handleCloseModal={handleCloseModal}
          modalIsOpen={modalIsOpen}
          googleLink={googleLink}
        />
      )}
    </section>
  );
};

export default DownloadSection;
