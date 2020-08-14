import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./assets/scss/custom.scss";
import "./assets/css/style.css";
import vuelidate from "vuelidate";
import Datepicker from "vuejs-datepicker";
import CKEditor from "@ckeditor/ckeditor5-vue";
import Editor from "./components/UI/Editor.vue";

import {
  auth,
  usersCollection
} from "./firebaseConfig";

// Components
import Button from "./components/UI/Button";
Vue.component("app-button", Button);
Vue.component("datepicker", Datepicker);
Vue.component("app-editor", Editor);

// MISC
Vue.use(CKEditor);
Vue.use(vuelidate);

Vue.config.productionTip = false;
// handle page reload
auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit("admin/setCurrentUser", user);
    store.dispatch("admin/fetchUser");
    usersCollection.doc(user.uid).onSnapshot((doc) => {
      store.commit("admin/setUserProfile", doc.data());
    });
  }
});

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      store,
      render: (h) => h(App),
    });
  }
});