
export const setToken = () => {
  var token = "";
  var possible = "AQWERTYUIOPLKJHGFDSAZXCVBNM!@#$%^&*()_+-=abcdefghijklmnopqrstuvwxyz1234567890";

  for (var i = 0; i < 50; i++)
      token += possible.charAt(Math.floor(Math.random() * possible.length));

  return token;
}