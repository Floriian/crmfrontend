export const getAccessToken = () => {
  if (!localStorage.getItem('access_token')) return null;
  return localStorage.getItem('access_token');
};
