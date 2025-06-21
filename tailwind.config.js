/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        glass: {
          DEFAULT: "rgba(248,245,242,0.85)", // glass trắng mờ vừa phải
          border: "#d1bfa3", // border nâu nhạt/xám nhạt
        },
        primary: "#bfa16a", // vàng nhạt
        accent: "#6b4f1d", // nâu đậm
        textmain: "#3a2c13", // text chính xám nâu đậm
        background: "#f8f5f2", // nền kem
        genreBadge: "#e0f5f7", // Màu xanh nhạt cho huy hiệu thể loại, khớp với ảnh
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

