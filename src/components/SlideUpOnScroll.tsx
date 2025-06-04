
import { useEffect, useRef, useState } from 'react';

function SlideUpOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true); //?only once
        // setIsVisible(entry.isIntersecting); //?every time
      },
      {
        threshold: 0.1,
      }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-72">
      <div
        ref={ref}
        className={`transition-all duration-1400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-bold mb-4">SlideUpOnScroll</h1>
        <p className="text-center text-lg max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iste.
        </p>
      </div>
    </div>
  );
}

export default SlideUpOnScroll;
