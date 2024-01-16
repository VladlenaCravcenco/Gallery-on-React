
export const setToken = () => {
  var token = "";
  var possible = "AQWERTYUIOPLKJHGFDSAZXCVBNM!@#$%^&*()_+-=abcdefghijklmnopqrstuvwxyz1234567890";

  for (var i = 0; i < 50; i++)
      token += possible.charAt(Math.floor(Math.random() * possible.length));

  return token;
}

export const isEmailValid = (email) => {
  /* eslint-disable */
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
};