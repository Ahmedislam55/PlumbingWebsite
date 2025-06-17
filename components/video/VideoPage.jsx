"use client";
import { useState } from "react";
import { Play , ArrowLeft   } from "lucide-react";
import image from "@/public/assests/image-54-copyright.jpg";
import Image from "next/image";
export default function VideoPage() {
  const [showVedio, setShowVedio] = useState(false);
  function hideVedio()
  {
    setShowVedio(false);
  }
  return (
    <div className="mt-8" data-aos="fade">
      {!showVedio ? (
        <div className="relative flex justify-center items-center">
          <Image src={image} alt="image" className="w-full" loading="lazy" />
          <Play
            onClick={() => setShowVedio(true)}
            className="absolute text-black hover:bg-main hover:text-white transition duration-700 bg-white rounded-full p-6 cursor-pointer"
            size={90}
          />
        </div>
      ) : (
        <div className="w-full relative flex items-center justify-start">
          <iframe
            src="https://player.vimeo.com/video/59863914"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full"
          ></iframe>
            <ArrowLeft onClick={hideVedio}  className="absolute text-white border bg-main rounded-full p-4 hover:border hover:border-black hover:bg-white hover:text-main transition duration-700 cursor-pointer" size={60} />
        </div>
      )}
    </div>
  );
}
