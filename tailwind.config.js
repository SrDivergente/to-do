/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdy6lrw9fhVO-64v7sb1JSCO0rZeKrZF6j64Uwf7pyi_clCpjG8XzVQ0nak-hkoIT-a8&usqp=CAU')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
