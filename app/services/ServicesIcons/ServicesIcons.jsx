import { TruckElectric, ShieldCheck, PhoneCall , MoveRight  } from "lucide-react";
export default function ServicesIcons() {
  const icons = [
    { id: 0, icon: TruckElectric, title: "Worldwide shipping" },
    { id: 1, icon: ShieldCheck, title: "Buyer Protection" },
    { id: 2, icon: PhoneCall, title: "Customer Support" },
  ];

  return (
    <section className="p-12 2xl:p-20">
      <div className="md:flex flex-wrap justify-evenly items-center gap-6">
        {icons.map((iconObj) => {
          const IconComponent = iconObj.icon;
          return (
            <div key={iconObj.id} className="lg:w-[30%] md:w-[45%] mb-8 text-center" data-aos="fade-up">
              <IconComponent size={70} className="m-auto text-main hover:text-zinc-800 transatian duration-700 cursor-pointer" />
              <h2 className="mt-8 text-2xl text-navLinks font-semibold">
                {iconObj.title}
              </h2>
              <p className="my-4 text-gray-500 leading-8">
                Consectetur adipiscing elit, sed do eiusm od tempor incidunt ut
                labore.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
