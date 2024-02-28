import { notFound } from "next/navigation";
import { ServicePages } from "@/data/ServicePagesData/Pages";
export default function ServicePage({ params }) {
   const link = ServicePages[params.service];
   if (!link) notFound();
   const component = link["component"];

   return <>{component}</>;
}
