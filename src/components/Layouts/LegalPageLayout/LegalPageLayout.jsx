import s from "@/css/typography.module.css";

export default function LegalPageLayoutComponent({ children }) {
   return (
      <>
         <main>
            <article
               className={`${s.typo} mx-auto my-10 px-4 prose-a:text-blue-500`}
            >
               {children}
            </article>
         </main>
      </>
   );
}
