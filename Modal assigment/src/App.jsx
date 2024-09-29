import React, { useState } from 'react';
import Modal from './components/Modal';
import { productData } from './utils/constant/ProductData';
import { IoMdMenu } from "react-icons/io";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setId] = useState(null);

  const handleOpenModal = (id) => {
    setId(id);
    setShowModal(true);
  };

  return (
    <div className='px-5 md:px-20 py-5 w-full min-h-screen bg-[#03302D]'>
      <nav className='w-full h-[80px] flex justify-between items-center bg-[#0C4B4A] rounded-lg drop-shadow-xl px-5 md:px-10 mb-10'>
        <img src="/assets/images/logo.webp" className='w-12 rounded-full' alt="Logo" />
        <ul className="links  gap-2 md:gap-4 text-white hidden md:flex">
          <li>
            <a href="" className="hover:text-[#E67E22] transition-colors duration-300">Popular Items</a>
          </li>
          <li>
            <a href="" className="hover:text-[#E67E22] transition-colors duration-300">Hot Appetizers</a>
          </li>
          <li>
            <a href="" className="hover:text-[#E67E22] transition-colors duration-300">Chicken</a>
          </li>
          <li>
            <a href="" className="hover:text-[#E67E22] transition-colors duration-300">Mutton</a>
          </li>
        </ul>
        <div className='md:hidden'><IoMdMenu size={40}/></div>
      </nav>

      <div className='relative w-full'>
        <div className='flex flex-wrap justify-center gap-6'>
          {productData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative w-full sm:w-64 h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleOpenModal(item.id)}
            >
              <img
                src={item.thumbnailImages[0].imgSrc}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-white text-sm">From</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-white text-lg font-bold">Rs. {item.price}</p>
                  <p className="text-gray-300 line-through text-base">Rs. {item.originalPrice}</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className='cp fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20'>
            <Modal showModal={setShowModal} selectedId={selectedId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
