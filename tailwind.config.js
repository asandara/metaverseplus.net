module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#001128",
        custom_purple: "#6D1E9E",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      backgroundImage: {
        "welcome-background":
          "url('https://wallpaperaccess.com/full/51364.jpg')",
      },
      height: {
        "fit-content": "fit-content(20em)",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        my_border: "4px",
        border_middle: "0.300rem",
      },
      animation: {
        fade: "fadeIn 5s ease-in-out",
      },
      height: {
        98: "578px",
      },

      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: {
              fontSize: "2em",
              color: "#fff",
            },
            h2: {
              fontSize: "1.5em",
              color: "#fff",
            },
            h3: {
              fontSize: "1.17em",
              color: "#fff",
            },
            h4: {
              fontSize: "1em",
              color: "#fff",
            },
            h5: {
              color: "#fff",
            },
            h6: {
              color: "#fff",
            },
            p: {
              color: "#fff",
            },
            strong: { color: "#fff" },
          },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen xl": {
            maxWidth: "1659px",
          },
        },
      });
    },
  ],
};
