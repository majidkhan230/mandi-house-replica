import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { productData } from "../utils/constant/ProductData";

const Modal = ({ showModal, selectedId }) => {
  const product = productData.find(
    (product) => product.id === parseInt(selectedId)
  );

  const { title, price, originalPrice, description, thumbnailImages } = product;
  const [image, setImage] = useState(thumbnailImages[0].imgSrc);

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-4xl h-auto bg-gray-200 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src={image}
            className="object-cover w-full h-64 md:h-auto"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
              onClick={() => {
                showModal(false);
              }}
              className=" close rounded-full bg-[#03302D] w-fit text-white text-xl p-2 hover:scale-110"
            >
              <IoClose />
            </button>
          </div>
          <div className="flex items-baseline space-x-2 my-2">
            <p className="text-xl font-semibold">Rs. {price}</p>
            <p className="text-gray-600 line-through">Rs. {originalPrice}</p>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="images grid grid-cols-3 gap-2 mt-4">
            {thumbnailImages.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setImage(item.imgSrc);
                }}
                className="rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={item.imgSrc}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="addCart bg-[#011816] text-center mt-2 md:mt-10 md:py-2 rounded-md mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            <button className="text-white hover:text-[#E67E22] transition-colors duration-300 px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
