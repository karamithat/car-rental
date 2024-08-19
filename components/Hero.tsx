"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import hero from "../public/hero.png";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Aracını Bul ve Kirala - Yola Çıkmanın En Kolay Yolu!
        </h1>
        <p className="hero__subtitle">
          Kolayca araç kiralayın, konforlu bir yolculuğun keyfini çıkarın.
        </p>

        <CustomButton
          title="Araçları Keşfedin"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        

        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image alt="hero" src={hero} fill className="object-contain" />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
