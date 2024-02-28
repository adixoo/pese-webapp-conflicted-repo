import Link from "next/link";
import Image from "next/image";
export default function ServiceBar() {
   return (
      <>
         <div className="bg-primary">
            <div className="container px-4 mx-auto pt-5 pb-20">
               <h2 className="text-white font-semibold text-xl mb-6">
                  Other Services
               </h2>
               <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-2 gap-y-4">
                  <ServiceItem
                     url={"hospital"}
                     img={"hospital"}
                     text={"Hospital"}
                  />
                  <ServiceItem
                     url={"pipe-gas"}
                     img={"gas-pipeline"}
                     text={"Piped Gas"}
                  />
                  <ServiceItem url={"dth"} img={"dth"} text={"DTH"} />
                  <ServiceItem
                     url={"fastag"}
                     img={"fasttag"}
                     text={"FastTag"}
                  />
                  <ServiceItem
                     url={"mobile"}
                     img={"mobile"}
                     text={"Mobile Recharge"}
                  />
                  <ServiceItem
                     url={"electricity-bill"}
                     img={"electric"}
                     text={"Electricity Bill"}
                  />
                  <ServiceItem
                     url={"water-bill"}
                     img={"water-drop"}
                     text={"Water Bill"}
                  />
                  <ServiceItem
                     url={"gas-bill"}
                     img={"gas-station"}
                     text={"LPG/CNG Gas Bill"}
                  />
                  <ServiceItem
                     url={"broadband"}
                     img={"wifi-router"}
                     text={"Broadband"}
                  />
                  <ServiceItem url={""} img={""} text={"More"} />
               </div>
            </div>
         </div>
      </>
   );
}

function ServiceItem({ text, img, url }) {
   return (
      <div className="w-full mx-auto">
         <Link
            href={`/service/${url}`}
            title={`${text} Service`}
            className="flex flex-col items-start w-full h-full"
         >
            <span className="block w-12 md:w-14 aspect-square rounded-xl bg-white mx-auto p-3 hover:scale-105 active:scale-90 transition-transform">
               <Image
                  src={`/assets/img/icons/${img}.png`}
                  alt={img}
                  loading="lazy"
                  className="object-cover"
                  width={100}
                  height={100}
               />
            </span>
            <span className="block text-xs line-clamp-2 text-white mx-auto mt-4 text-center font-medium max-w-[10ch]">
               {text}
            </span>
         </Link>
      </div>
   );
}
