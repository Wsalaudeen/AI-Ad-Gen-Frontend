"use client";

import { useState } from "react";
import Image from "next/image";

const images: string[] = ["/images/hng-wig-2.png"];

export default function SinglePreview() {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  const generateAltText = (imagePath: string) => {
    const fileName = imagePath.split("/").pop()?.split(".")[0] || "Image";
    return fileName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <Image
          className="rounded-lg w-full h-auto object-cover"
          src={selectedImage}
          height={374}
          width={815}
          alt={generateAltText(selectedImage)}
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-200 ${
                selectedImage === image ? "ring-2 ring-[#121316]" : "opacity-60"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                className="rounded-[8px] h-20 w-20 object-cover"
                src={image}
                height={80}
                width={80}
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
