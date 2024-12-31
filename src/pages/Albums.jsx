import React from "react";
import PageTitle from "../components/PageTitle";
import img1 from "../assets/images/albums/4a.jpg";
import img2 from "../assets/images/albums/5a.jpg";
import img3 from "../assets/images/albums/6a.jpg";
import img4 from "../assets/images/albums/7a.jpg";
import img5 from "../assets/images/albums/8a.jpg";
import img6 from "../assets/images/albums/9a.jpg";

const albumsCategories = ["All", "Fashion", "Urbon", "Sport", "Expression"];
const albumsImages = [
  {
    img: img1,
    path: "#",
    caption: "The Drive of your life",
  },
  {
    img: img2,
    path: "#",
    caption: "The Drive of your life",
  },
  {
    img: img3,
    path: "#",
    caption: "The Drive of your life",
  },
  {
    img: img4,
    path: "#",
    caption: "The Drive of your life",
  },
  {
    img: img5,
    path: "#",
    caption: "The Drive of your life",
  },
  {
    img: img6,
    path: "#",
    caption: "The Drive of your life",
  },
];

const Albums = () => {
  return (
    <div className="container">
      <PageTitle
        title="The Portfolio"
        description="Assertively synthesize state of the art testing procedures via sticky niches."
      />
      <div className="albums">
        <div className="albumsHeader mb-5 xl:mb-7">
          <ul className="flex flex-wrap gap-4">
            {albumsCategories.map((item, index) => (
              <li key={index}>
                <button className="text-black/50 uppercase hover:text-black transition-all duration-300">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="albumsBody">
          {albumsImages.map((item, index) => (
            <div className="cards grid grid-rows-3">
              <img src={item.img} alt="" className="" />
              <div className="overlay">
                <caption>The Drive of your life</caption>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
