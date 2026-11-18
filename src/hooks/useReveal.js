import { useEffect, useRef, useState } from "react";

export default function useReveal() {

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (
          entry.isIntersecting &&
          (
            entry.intersectionRatio >= 0.35 ||
            entry.boundingClientRect.top <= 0
          )
        ) {

          setVisible(true);

        } else {

          setVisible(false);

        }

      },

      {
        threshold: [0, 0.35, 0.75]
      }

    );

    observer.observe(element);

    return () => observer.disconnect();

  }, []);

  return {
    ref,
    visible
  };
}