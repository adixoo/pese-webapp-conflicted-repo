export default function manifest() {
   return {
      name: "PeSe",
      short_name: "PeSe",
      description: "Get cashback on every transaction.",
      start_url: "/services",
      display: "standalone",
      background_color: "#fff",
      theme_color: "#fff",
      icons: [
         {
            src: "/favicon.ico",
            sizes: "any",
            type: "image/x-icon",
         },
      ],
   };
}
