import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Step = ({ title, details, index, total }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "end 0.2"], // triggers when step enters viewport
  });

  // animate opacity and x movement
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  // animate circle color
  const lineColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#CECED1", "#32343F"]
  );

  return (
    <motion.li ref={ref} className="relative flex items-start gap-4">
      <motion.span
        style={{ backgroundColor: lineColor }}
        className="w-1 h-16 rounded-md overflow-clip"
      />
      <div className="flex flex-col items-center">
        {index < total - 1 && <span className="w-px flex-1 bg-gray-300" />}
      </div>

      <motion.div style={{ opacity, x }} >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-base text-gray-600">{details}</p>
      </motion.div>
    </motion.li>
  );
};

const ProcessSteps = () => {
  return (
    <div className=" max-w-full lg:max-w-2xl mx-auto py-16">
      <ul className="space-y-12">
        {process.map((p, idx) => (
          <Step key={p.id} {...p} index={idx} total={process.length} />
        ))}
      </ul>
    </div>
  );
};

export default ProcessSteps;

const process = [
  {
    id: 1,
    title: "Free Consultation",
    details: "Share your background goals",
  },
  {
    id: 2,
    title: "Eligibility Review",
    details: "We assess which petition type fits best",
  },
  {
    id: 3,
    title: "Petition Drafting",
    details: "We craft a compelling petition with evidence strategy.",
  },
  {
    id: 4,
    title: "Document Packaging",
    details: "We prepare a polished, professional submission.",
  },
  {
    id: 5,
    title: "Ongoing Support",
    details: "Guidance until your petition is filed.",
  },
];
