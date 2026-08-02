/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#f9f9fe",
        "tertiary-fixed-dim": "#c6c6c7",
        "primary-fixed-dim": "#ffb693",
        "on-background": "#1a1c1f",
        "on-tertiary-fixed": "#1a1c1c",
        "surface-dim": "#d9dade",
        "tertiary-container": "#989999",
        "on-secondary-container": "#00275d",
        "secondary-container": "#4e8eff",
        "on-error-container": "#93000a",
        "primary-container": "#ff6b00",
        "outline-variant": "#e2bfb0",
        "on-tertiary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#001a42",
        "inverse-surface": "#2e3034",
        "error": "#ba1a1a",
        "surface-variant": "#e2e2e7",
        "surface-tint": "#a04100",
        "on-primary-container": "#572000",
        "on-primary": "#ffffff",
        "background": "#f9f9fe",
        "outline": "#8e7164",
        "surface-container": "#ededf2",
        "on-tertiary-container": "#2f3132",
        "on-primary-fixed-variant": "#7a3000",
        "tertiary-fixed": "#e2e2e2",
        "on-tertiary-fixed-variant": "#454747",
        "secondary-fixed-dim": "#aec6ff",
        "tertiary": "#5d5f5f",
        "primary-fixed": "#ffdbcc",
        "inverse-primary": "#ffb693",
        "surface-container-high": "#e8e8ed",
        "on-secondary-fixed-variant": "#004396",
        "on-surface": "#1a1c1f",
        "inverse-on-surface": "#f0f0f5",
        "surface-container-low": "#f3f3f8",
        "secondary-fixed": "#d8e2ff",
        "on-error": "#ffffff",
        "surface-container-highest": "#e2e2e7",
        "secondary": "#005ac4",
        "error-container": "#ffdad6",
        "on-surface-variant": "#5a4136",
        "primary": "#a04100",
        "surface-container-lowest": "#ffffff",
        "surface-bright": "#f9f9fe",
        "on-primary-fixed": "#351000"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "margin-mobile": "20px",
        "stack-lg": "48px",
        "gutter": "24px",
        "container-max-width": "1280px",
        "stack-md": "24px",
        "margin-desktop": "64px"
      },
      fontFamily: {
        "headline-xl": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "label-bold": ["Plus Jakarta Sans"],
        "display-lg": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "display-lg-mobile": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "label-bold": ["14px", { "lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "display-lg": ["72px", { "lineHeight": "80px", "letterSpacing": "-0.04em", "fontWeight": "800" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "display-lg-mobile": ["44px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "800" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}