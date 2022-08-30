import React, { useEffect, useRef } from "react";

import { Link } from "react-scroll";
import useScrollPosition from "../../hooks/useScrollPosition";

const Navbar: React.FC = () => {
  const buttonNavBarRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const scroll = useScrollPosition(headerRef);

  useEffect(() => {
    if (!headerRef.current) return;
    if (scroll) {
      headerRef.current.classList.add("sticky");
    } else {
      headerRef.current.classList.remove("sticky");
    }
  }, [scroll, headerRef]);

  return (
    <nav
      ref={headerRef}
      className="absolute top-0 left-0 z-40 flex items-center w-full bg-transparent ud-header"
    >
      <div className="flex justify-center w-full">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="index.html" className="block w-full py-5 navbar-logo">
              <p className="w-full font-bold text-white uppercase font-sans ml-7 header-logo">
                Sons of Harllão
              </p>
            </a>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                id="navbarToggler"
                ref={buttonNavBarRef}
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                onClick={() => {
                  const navbarCollapse =
                    document.getElementById("navbarCollapse");

                  buttonNavBarRef.current?.classList.toggle(
                    "navbarTogglerActive"
                  );
                  navbarCollapse?.classList.toggle("hidden");
                }}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
              >
                <ul className="block lg:flex">
                  <li className="relative group">
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      className="flex cursor-pointer uppercase py-2 mx-8 text-base ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                    >
                      Sobre
                    </Link>
                  </li>

                  <li className="relative">
                    <Link
                      to="soa"
                      smooth={true}
                      duration={500}
                      spy={true}
                      className="relative ud-menu-scroll cursor-pointer uppercase mx-8 flex py-2 text-base text-dark lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white xl:ml-12"
                    >
                      Sons of Anarchy
                    </Link>
                  </li>
                  <li className="submenu-item group relative">
                    <Link
                      to="mayans"
                      smooth={true}
                      duration={500}
                      spy={true}
                      className="relative ud-menu-scroll cursor-pointer uppercase mx-8 flex py-2 text-base text-dark lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white xl:ml-12"
                    >
                      Mayans M.C
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <div className="-mx-3 flex items-center">
                <a
                  className="px-3 text-[#dddddd] hover:text-white"
                  href="https://web.facebook.com/aisimmeuharllao"
                >
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    className="fill-current"
                  >
                    <path d="M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z" />
                  </svg>
                </a>
                <a
                  className="px-3 text-[#dddddd] hover:text-white"
                  href="https://twitter.com/SonsofHarllao"
                >
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    className="fill-current"
                  >
                    <path d="M16.2622 3.17878L17.33 1.93293C17.6391 1.59551 17.7234 1.33595 17.7515 1.20618C16.9085 1.67337 16.1217 1.82911 15.6159 1.82911H15.4192L15.3068 1.72528C14.6324 1.18022 13.7894 0.894714 12.8902 0.894714C10.9233 0.894714 9.37779 2.40012 9.37779 4.13913C9.37779 4.24295 9.37779 4.39868 9.40589 4.5025L9.49019 5.02161L8.90009 4.99565C5.30334 4.89183 2.35288 2.03675 1.87518 1.5436C1.08839 2.84136 1.53799 4.08722 2.01568 4.86587L2.97107 6.31937L1.45369 5.54071C1.48179 6.63084 1.93138 7.48736 2.80247 8.11029L3.56116 8.62939L2.80247 8.9149C3.28017 10.2386 4.34795 10.7837 5.13474 10.9913L6.17443 11.2509L5.19094 11.8738C3.61736 12.912 1.65039 12.8342 0.779297 12.7563C2.54957 13.8983 4.65705 14.1579 6.11823 14.1579C7.21412 14.1579 8.02901 14.0541 8.2257 13.9762C16.0936 12.2631 16.4589 5.77431 16.4589 4.47655V4.29486L16.6275 4.19104C17.5829 3.36047 17.9763 2.91923 18.2011 2.65967C18.1168 2.68563 18.0044 2.73754 17.892 2.7635L16.2622 3.17878Z" />
                  </svg>
                </a>
                <a
                  className="px-3 text-[#dddddd] hover:text-white"
                  href="https://www.instagram.com/sonsofharllao/"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-current"
                  >
                    <path d="M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z" />
                    <path d="M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z" />
                    <path d="M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
