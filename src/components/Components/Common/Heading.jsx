// used where sidebar are commone

export default function Heading({ title, description }) {
   return (
      <>
         <h1 className="lg:mt-12 text-3xl md:text-4xl font-normal text-gray-800">
            {title}
         </h1>
         <p className="mt-2 text-sm md:text-base text-gray-400">
            {description}
         </p>
      </>
   );
}
