import React from "react";
import { Container } from "./styles";

type Props = {
  title: string;
  imgUrl: string;
  imgTitle: string;
};

const Section: React.FC<Props> = ({ title, imgUrl, imgTitle }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1>{title}</h1>
      <img src={imgUrl} alt={imgTitle} />
      <div className="h-[150px] w-[5px] bg-gray-100 flex justify-center items-center mx-auto"></div>
    </div>
  );
};

export default Section;
