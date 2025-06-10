"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function NumberPage() {
  const stats = [
    { label: "Projects", end: 98 },
    { label: "People", end: 65 },
    { label: "Years", end: 10 },
    { label: "Offices", end: 15 },
  ];

  return (
    <section className="2xl:px-24 mb-36">
      <div className="flex flex-wrap justify-center xl:justify-between items-center" data-aos="fade-up">
        {stats.map((stat, index) => {
          const { ref, inView } = useInView({ triggerOnce: true });
          return (
            <div key={index} ref={ref} className="p-4 mt-16 relative px-24">
              <h3 className="text-9xl right-10 -top-6 2xl:border-r-2 pr-5 absolute font-bold text-center text-gray-100">
                {inView ? <CountUp end={stat.end} duration={2} /> : 0}
              </h3>
              <p className="text-2xl font-bold text-center text-zinc-800 relative z-5">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
