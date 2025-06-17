"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function AboutNumber() {
  const stats = [
    { label: "Offices", end: 90 },
    { label: "Happy Clients", end: 2548 },
    { label: "Years", end: 25 },
    { label: "Projects", end: 256 },
  ];

  return (
    <section className="2xl:px-24 mb-36">
      <div
        className="flex flex-wrap justify-center xl:justify-between items-center"
        data-aos="fade-up"
      >
        {stats.map((stat, index) => {
          const { ref, inView } = useInView({ triggerOnce: true });
          return (
            <div key={index} ref={ref} className="p-4 mt-8 relative px-24">
              <p className="text-xl mb-4 font-semibold text-center text-zinc-800">
                {stat.label}
              </p>
              <h3 className="text-6xl font-semibold text-center text-zinc-800">
                {inView ? <CountUp end={stat.end} duration={2} /> : 0}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
