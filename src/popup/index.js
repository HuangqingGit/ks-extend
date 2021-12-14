import Vue from "vue";
import AppComponent from "./App/App.vue";
import {
  Tooltip
} from 'element-ui';

Vue.component(Tooltip.name, Tooltip);
Vue.component("app-component", AppComponent);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});