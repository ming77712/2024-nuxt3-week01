export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $swal } = useNuxtApp();
  const auth = useCookie('auth');
  if (!auth.value) {
    await $swal.fire({
      position: 'center',
      icon: 'info',
      title: '您尚未登入',
      text: '請重新登入或註冊新帳號',
      showConfirmButton: false,
      timer: 3000,
    });
    return navigateTo('/account/login');
  }

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
      await $swal.fire({
        position: 'center',
        icon: 'info',
        title: '您尚未登入',
        text: '請重新登入或註冊新帳號',
        showConfirmButton: false,
        timer: 3000,
      });
      return navigateTo('/account/login');
    }
  } catch (error) {
    await $swal.fire({
      position: 'center',
      icon: 'error',
      title: error.message,
      showConfirmButton: false,
      timer: 3000,
    });
    return navigateTo('/account/login');
  }
});
