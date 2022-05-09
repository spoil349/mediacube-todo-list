import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import COLORS from "../constants/theme-colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: COLORS.PRIMARY.BASE,
        black: COLORS.BLACK.BASE,
        "black-lighten": COLORS.BLACK.LIGHT,
        gray: COLORS.GRAY.BASE,
        purple: COLORS.PURPLE.BASE,
        pink: COLORS.PINK.BASE,
        red: COLORS.RED.BASE,
      },
    },
  },
});
