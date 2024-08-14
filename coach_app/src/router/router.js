import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "../pages/TeamsList.vue";
import UsersList from "../pages/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";
import NotFound from "../pages/NotFound.vue";
import TeamsFooter from "../pages/TeamFooter.vue";
import UsersFooter from "../pages/UserFooter.vue";

const routes = [
  // { path: "/", redirect: "/teams" },
  {
    name: "teams",
    path: "/teams",
    components: {
      default: TeamsList,
      footer: TeamsFooter,
    },
    children: [
      {
        name: "team-members",
        path: "/teams/:teamId",
        component: TeamMembers,
        props: true,
      },
    ],
  },
  {
    path: "/users",
    components: {
      default: UsersList,
      footer: UsersFooter,
    },
    name: "users",
  },

  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  if (to.name === "team-members") {
    next();
  } else {
    next({ name: "team-members", params: { teamId: "t2" } });
  }
  next();
});

export default router;
