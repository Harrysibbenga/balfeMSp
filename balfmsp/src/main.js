import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Vuex from 'vuex';
import "./plugins/bootstrap-vue";
import "./assets/scss/custom.scss";
import "./assets/css/style.css";
import vuelidate from "vuelidate";
import Datepicker from "vuejs-datepicker";
import CKEditor from "@ckeditor/ckeditor5-vue";
import Editor from "./components/UI/Editor.vue";
import Meta from "vue-meta";
import { auth } from './firebaseConfig'

Vue.use(Meta);

// Components
import Button from "./components/UI/Button";
Vue.component("app-button", Button);
Vue.component("datepicker", Datepicker);
Vue.component("app-editor", Editor);

// MISC
Vue.use(CKEditor);
Vue.use(vuelidate);
Vue.use(Vuex);
Vue.use(Meta, {
   ssrAppId: 1
});

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      store,
      render: (h) => h(App),
    })
  }
});

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}