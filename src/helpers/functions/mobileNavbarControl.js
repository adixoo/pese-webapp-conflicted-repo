const workingValue = 1023;

export const closeMobileNavbar = () => {
   if (window.innerWidth > workingValue) return;
   const sidebar = document.querySelector(".sidebar-main");
   const overlay = document.querySelector(".sidebar-overlay");
   if (!sidebar || !overlay) return;
   sidebar.setAttribute("mode", "close");
   overlay.setAttribute("mode", "close");

   // custom styles
   document.body.style.overflow = "auto";
   document.body.style.height = "auto";
};

export const openMobileNavbar = () => {
   // open sidebar
   if (window.innerWidth > workingValue) return;
   const sidebar = document.querySelector(".sidebar-main");
   const overlay = document.querySelector(".sidebar-overlay");
   if (!sidebar || !overlay) return;
   sidebar.setAttribute("mode", "open");
   overlay.setAttribute("mode", "open");

   // custom styles
   document.body.style.overflow = "hidden";
   document.body.style.height = "100vh";
};
