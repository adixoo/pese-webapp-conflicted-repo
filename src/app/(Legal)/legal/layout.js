import LegalPageLayoutComponent from "@/components/Layouts/LegalPageLayout/LegalPageLayout";

export default function LegalPageLayout({ children }) {
   return (
      <>
         <LegalPageLayoutComponent>{children}</LegalPageLayoutComponent>
      </>
   );
}
