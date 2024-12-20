"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import Modal from "@/components/base/Modal";
import BreadCrumb from "@/components/BreadCrumb";
interface dataType {
  id: number;
  image: string;
  alt: string;
}
const data: dataType[] = [
  {
    id: 1,
    image: '/images/portfolio/picture-1.jpg',
    alt: 'picture-1'
  },
  {
    id: 2,
    image: '/images/portfolio/picture-2.jpg',
    alt: 'picture-2'
  },
  {
    id: 3,
    image: '/images/portfolio/picture-3.jpg',
    alt: 'picture-3'
  },
  {
    id: 4,
    image: '/images/portfolio/picture-4.JPG',
    alt: 'picture-4'
  },
  {
    id: 5,
    image: '/images/portfolio/picture-5.jpg',
    alt: 'picture-5'
  },
  {
    id: 6,
    image: '/images/portfolio/picture-6.JPG',
    alt: 'picture-6'
  },
  {
    id: 7,
    image: '/images/compare.jpg',
    alt: 'picture-7'
  },
  {
    id: 8,
    image: '/images/compare1.jpg',
    alt: 'picture-8'
  },
  {
    id: 9,
    image: '/images/compare2.jpg',
    alt: 'picture-9'
  },
  {
    id: 10,
    image: '/images/compare3.jpg',
    alt: 'picture-10'
  },
  {
    id: 11,
    image: '/images/editting/picture-1.jpg',
    alt: 'picture-11'
  },
  {
    id: 12,
    image: '/images/editting/picture-2.jpg',
    alt: 'picture-12'
  },
]
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<dataType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % data.length;
    setSelectedImage(data[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };
  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + data.length) % data.length;
    setSelectedImage(data[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      handleNextImage();
    } else if (event.key === 'ArrowLeft') {
      handlePrevImage();
    }
  };

  useEffect(() => {
    if (!!selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex, selectedImage]);
  return (
    <>
      <BreadCrumb title="Typical Products" name="Portfolio" />
      <div className="container text-center mx-auto mt-16 px-3">
        <div className="mb-[100px]">
          <div className="flex flex-col align-middle justify-center gap-4">
            <div className="w-full flex justify-center text-center">
              <Image src={'/images/portfolio/svgs/images.svg'} width={102} height={102} alt="" />
            </div>
            <div>
              <span className="text-[#5e5e5e] leading-[30px]">
                <strong>At NewDay</strong>, we aim to help you showcase your property listings at their best with our professional Real Estate Photo Service.
                Our team of expert photographers Our team of expert photographers, equipped with high-quality tools and creative techniques,
                is dedicated to capturing stunning images that will attract potential buyers and renters.
              </span>
            </div>
            <div>
              <span className="text-[#5e5e5e] leading-[30px]">
                <strong>How do we do it?</strong>
                We ensure you receive High-Quality Images—crisp, clear photos highlighting your property’s best features.
                We capture beautiful compositions that enhance the appeal of your listings, whether Exterior or interior,
                to showcase every detail of your property. Contact us to discuss and create plans uniquely Tailored to meet your specific needs and preferences.
                Enhance your real estate listings with NewDay.
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-center">
              <h2 className="text-[25px] lg:text-[35px] font-bold mb-[5px] leading-[1.5]">GALLERY</h2>
              <h2 className="text-[16px] font-sans tracking-[.2em] font-semibold text-[#efb93f]">Real Estate Photography</h2>
            </div>
            <div className="max-w-7xl mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
                {data.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedImage(item)
                      setCurrentImageIndex(index)
                    }}
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src={item.image}
                      width={450}
                      height={450}
                      alt={`Gallery image ${index + 1}`}
                      className="rounded-[10px] w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
      <Modal
        isOpen={!!selectedImage}
        onDismiss={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="relative max-w-full max-h-[50vh] flex items-center justify-center">
            <button
              onClick={handlePrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <Image
              src={selectedImage.image}
              alt="Full view image"
              width={1000}
              height={500}
              className="max-w-full max-h-[50vh] object-contain"
            />
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Portfolio;