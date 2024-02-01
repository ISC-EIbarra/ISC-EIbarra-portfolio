import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function TextAnimation() {
  const textRef = useRef(null);

  useEffect(() => {
    const textTimeline = gsap.timeline({ repeat: -1 });

    function changeText() {
      const currentText = textRef.current?.textContent;
      const newText = currentText === 'Edson' ? 'Clow Reed' : 'Edson';
      textRef.current.textContent = newText;
    }

    textTimeline
      .to(textRef.current, { duration: 2, opacity: 0, onComplete: changeText })
      .to(textRef.current, { duration: 3, opacity: 1 });
  }, []);

  return (
    <div className="flex gap-2">
      <p className="md:text-5xl sm:text-4xl text-3xl font-medium ">Hola, soy</p>
      <p
        className="md:text-5xl sm:text-4xl text-3xl font-medium text-blue-900 text-wrap"
        ref={textRef}
      >
        Edson
      </p>
    </div>
  );
}

export default TextAnimation;
