const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
}