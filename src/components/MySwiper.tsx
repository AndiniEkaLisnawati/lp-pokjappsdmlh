import { useEffect, useState } from "react";

interface SwiperProps {
  image: string[];
}

export default function MySwiper({ image }: SwiperProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (image.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % image.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [image]);

  return (
    <>
        {image.map((img, idx) => (
            <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className={`w-full h-screen absolute inset-0 transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
            }`}
            />
        ))}
    </>
  );
}