import axios from "axios";
import React, { useCallback, useState } from "react";

type Props = {
  handleCloseModal: () => void;
  modalIsOpen: boolean;
};

const ModalStepThree: React.FC<Props> = ({ handleCloseModal, modalIsOpen }) => {
  const googleLink = localStorage.getItem("googleLink");
  const [googleSteps, setGoogleSteps] = useState({
    1: false,
    2: true,
    3: true,
  });

  const handleGoogle = useCallback(async () => {
    const { data } = await axios.get(
      "https://sons-of-harllao-359923.rj.r.appspot.com/getAuthURL"
    );
    localStorage.setItem("googleLink", data);
    setGoogleSteps({ 1: true, 2: false, 3: true });
  }, []);
  return (
    <>
      {modalIsOpen && (
        <div
          id="crypto-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto backdrop-blur-sm flex justify-center items-center overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="crypto-modal"
                onClick={handleCloseModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  Liberação Google Drive
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Siga os passos abaixo para concluir o processo de permissão no
                  Google Drive
                </p>
                <ul className="my-4 space-y-3">
                  <li>
                    <button
                      onClick={handleGoogle}
                      disabled={googleSteps[1]}
                      className={`flex w-full ${
                        googleSteps[1] && "cursor-not-allowed"
                      } items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
                    >
                      <p className="bold">1 - </p>

                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Gerar link
                      </span>
                    </button>
                  </li>
                  <li className="flex flex-col">
                    <button
                      disabled={googleSteps[2]}
                      className={`flex w-full ${
                        googleSteps[2] && "cursor-not-allowed"
                      } items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
                    >
                      <p className="bold">2 - </p>
                      {!googleLink ? (
                        "Realizar liberação"
                      ) : (
                        <a
                          href={`${googleLink.toString()}`}
                          target="_blank"
                          rel="external"
                          className="flex-1 ml-3 whitesp ace-nowrap"
                        >
                          Acessar - Entre na sua conta Google e copie o code da
                          URL
                        </a>
                      )}
                    </button>

                    <input
                      type="name"
                      name="name"
                      id="name"
                      className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Código"
                      required
                      pattern="^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$"
                    />
                  </li>
                  <li>
                    <button
                      disabled={googleSteps[2]}
                      className={`flex w-full ${
                        googleSteps[2] && "cursor-not-allowed"
                      } items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
                    >
                      <p className="bold">2 - </p>
                      {!googleLink ? (
                        "Realizar liberação"
                      ) : (
                        <a
                          href={`${googleLink.toString()}`}
                          target="_blank"
                          rel="external"
                          className="flex-1 ml-3 whitesp ace-nowrap"
                        >
                          Acessar - Entre na sua conta Google e copie o code da
                          URL
                        </a>
                      )}
                    </button>
                  </li>
                </ul>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-3 h-3"
                      focusable="false"
                      data-prefix="far"
                      data-icon="question-circle"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                      ></path>
                    </svg>
                    Qual a diferença entre eles ?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalStepThree;
