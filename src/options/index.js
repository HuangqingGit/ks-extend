import Vue from "vue";
import AppComponent from "./App/App.vue";
import {
  Button,
  Container,
  Main,
  Header,
  Card,
  Message,
  Notification
} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Card.name, Card);
Vue.component(Message.name, Message);
Vue.component(Notification.name, Notification);
Vue.component("app-component", AppComponent);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
