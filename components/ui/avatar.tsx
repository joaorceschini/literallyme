import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Avatar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = [
        "assets/lain.gif",
        "assets/lain.jpg",
        "assets/lain2.gif",
        "assets/lain2.jpg",
        "assets/lain2.jpg",
        "assets/lain3.gif",
        "assets/lain3.jpg",
        "assets/lain4.gif",
        "assets/lain5.jpg",
        "assets/lain5.gif",
        "assets/lain6.jpg",
        "assets/lain6.gif",
        "assets/lain7.jpg",
        "assets/lain8.jpg",
        "assets/lain9.jpg",
        "assets/lain10.jpg",
        "assets/ryan.jpg",
        "assets/ryan2.jpg",
        "assets/ryan3.jpg",
        "assets/ryan4.jpg",
        "assets/ryan5.jpg",
        "assets/ryan6.jpg",
        "assets/ryan7.jpg",
        "assets/pink.jpg",
        "assets/pink1.jpg",
        "assets/pink3.jpg",
        "assets/pink4.jpg",
        "assets/fc.jpg",
        "assets/fc2.jpg",
        "assets/eren.jpg",
        "assets/eren2.jpg",
        "assets/eren3.jpg",
        "assets/eren4.jpg",
        "assets/cb.jpg",
        "assets/cb2.jpg",
        "assets/cb3.jpg",
        "assets/cb4.jpg",
        "assets/cb5.jpg",
        "assets/bocchi.jpg",
        "assets/bocchi2.jpg",
        "assets/bocchi3.jpg",
      ];
      setImageList(images);
    };

    loadImages();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (imageList.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [imageList]);

  return (
    <div className="w-[100px] relative">
      <div
        style={{
          width: "100px",
          height: "100px",
          position: "relative",
        }}
      >
        {imageList.length > 0 && (
          <Image
            src={"/" + imageList[currentIndex]}
            alt="pfp"
            fill
            className="opacity-50"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
          />
        )}
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
        }}
        className="left-0 top-0"
      >
        {imageList.length > 0 && (
          <Image
            src="/lain-opening.gif"
            alt="pfp"
            fill
            className="opacity-60 hover:opacity-10"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
          />
        )}
      </div>
    </div>
  );
}
