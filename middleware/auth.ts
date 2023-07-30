import { RouteLocationNormalized } from "vue-router";

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  // loginページの場合なにもしません
  if(to.path == '/login') return;

  const { checkAuthState, token } = useAuth();
  await checkAuthState();

  // tokenがなければログインページにリダイレクト
  if (!token.value) return await navigateTo('/login', { replace: true });
});