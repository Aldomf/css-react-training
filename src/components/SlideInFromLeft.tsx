import { useRef, useState, useEffect } from "react";

function ScaleUpOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="flex gap-5 items-center justify-center h-96">
      <div
        ref={ref}
        className={`transition-all duration-2000 ease-out px-8 py-6 ${
          isVisible ? "translate-x-0" : "translate-x-[-150%]"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">ScaleUpOnScroll</h1>
        <p className="text-lg text-center max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iste.
        </p>
      </div>
      <div
        ref={ref}
        className={`transition-all duration-5000 ease-out transform origin-center border-2 border-black bg-indigo-300 rounded-3xl px-8 py-6 shadow-lg ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[-120px] translate-x-40 opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">ScaleUpOnScroll</h1>
        <p className="text-lg text-center max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iste.
        </p>
      </div>
    </div>
  );
}

export default ScaleUpOnScroll;
