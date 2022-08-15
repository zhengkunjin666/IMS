export default [
  {
    path: "/login",
    name: "TheLogin",
    component: () =>
      import(/* webpackChunkName: "thelogin" */ "@/views/TheLogin.vue"),
  },
];
