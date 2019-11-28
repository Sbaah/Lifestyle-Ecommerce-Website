import Vue from "vue";
import VueRouter from "vue-router";

//  Import components for routing
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Cart from "./components/Cart.vue";
import Products from "./components/Products.vue";
import Settings from "./components/Settings.vue";
import Sign from "./components/Sign.vue";
import Success from "./components/Success.vue";

// //enbles the router plugin to use.
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/sign",
      name: "Sign",
      component: Sign
    },
    {
      path: "/success",
      name: "Success",
      component: Success
    }
  ]
});

export default router;
