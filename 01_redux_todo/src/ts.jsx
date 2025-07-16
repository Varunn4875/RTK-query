import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

 function aria() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Photographer", "Designer", "Freelancer", "Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Brandon Johnson</h1>
      <p>I'm <span ref={typedRef}></span></p>
    </div>
  );
}
export default aria