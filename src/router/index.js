import { createRouter, createWebHistory } from "vue-router";
import supabase from "../supabase/init";
import Auth from "../views/Auth.vue";
import Dashboard from "../views/Dashboard.vue";
import VerifyUser from "../views/VerifyUser.vue";
import Onboard from "../views/Onboard.vue";
import Onboard2 from "../views/Onboard2.vue";
import Onboard3 from "../views/Onboard3.vue";
import store from "@/store";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Auth },
  { path: "/register", component: Auth },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: Onboard,
      },
      {
        path: "connect-account",
        component: Onboard2,
      },
      {
        path: "onboarding-account",
        component: Onboard3,
      },
    ],
  },
  { path: "/verify", component: VerifyUser },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const user = await supabase.auth.getUser();

  if (requiresAuth && !user.data.user) {
    console.log("TODO MAL");
    if (store.getters.user == "authenticated") {
      store.dispatch("signOut");
    }
    next("/login");
  } else {
    console.log("TODO BIEN");
    if (store.getters.user != "authenticated" && user.data.user) {
      store.dispatch("signIn", user.data.user);
    }
    console.log(to);
    if (to.path.includes("login") && user.data.user) next("/dashboard");
    else next();
  }
});

export default router;
