import ServicePageLayoutComponent from "@/components/Layouts/ServicePagesLayout/ServicePageLayout";

export default function ServicePageLayout({ children, params }) {
   return (
      <>
         <ServicePageLayoutComponent {...params}>
            {children}
         </ServicePageLayoutComponent>
      </>
   );
}
