import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import HighchartsVue from "highcharts-vue";

Vue.use(Vuetify);
Vue.use(HighchartsVue);
import pt from "vuetify/src/locale/pt.ts";
export default new Vuetify({
  lang: {
    locales: { pt },
    current: "pt",
  },
});
