export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useCookie('auth');
  if (!auth.value) return navigateTo('/account/login');

  try {
    const userInfo = await $fetch('/v1/user/check', {
      method: 'GET',
      baseURL: 'https://nuxr3.zeabur.app/api',
      headers: {
        Authorization: auth.value,
      },
    });

    if (userInfo?.status !== undefined) {
      return;
    } else {
      return navigateTo('/account/login');
    }
  } catch (error) {
    return navigateTo('/account/login');
  }
});
