import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

import pt from "vuetify/src/locale/pt.ts";
export default new Vuetify({
  lang: {
    locales: { pt },
    current: "pt",
  },
});
