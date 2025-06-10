"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function CounterSection() {
  const stats = [
    { label: "Parts installed per day", end: 20 },
    { label: "Happy customers weekly", end: 100 },
    { label: "New clients daily", end: 10 },
  ];
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <section ref={ref}>
      <div className="flex flex-wrap justify-center xl:justify-between items-center lg:pr-16">
        {stats.map((stat, index) => (
          <div key={index} className="2xl:border-r-2 p-4 mt-8 ">
            <h3 className="lg:text-5xl text-2xl font-bold text-center text-zinc-800">
              {inView ? <CountUp end={stat.end} duration={2} /> : 0} +
            </h3>
            <p className="lg:text-xl font-bold text-center text-zinc-800">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
