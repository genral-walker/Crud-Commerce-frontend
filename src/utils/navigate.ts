export const navigate = (pathname: string) => {
  window.history.pushState(null, '', pathname);
  document.getElementById('routeSwitch')?.click();
};
