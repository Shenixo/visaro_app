import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Copy = ({
  children,
  animateOnScroll = true,
  delay = 0,
  start = "top 85%",
}) => {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      let ctx;
      const loadGsap = async () => {
        const { gsap } = await import("gsap");
        const { SplitText } = await import("gsap/SplitText");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(SplitText, ScrollTrigger);

        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];

        let elements = [];
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children);
        } else {
          elements = [containerRef.current];
        }

        elements.forEach((element) => {
          elementRef.current.push(element);

          const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "lines++",
          });
          splitRef.current.push(split);

          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;

          if (textIndent && textIndent === "0px") {
            if (split.lines.length > 0) {
              split.lines[0].style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }
          lines.current.push(...split.lines);
        });

        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }

        ctx = gsap.context(() => {}, containerRef);
      };

      loadGsap();

      return () => {
        if (ctx) ctx.revert();
        splitRef.current.forEach((split) => split?.revert());
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default Copy;
