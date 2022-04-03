export const currentTime = () => {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return "Bom dia";
  }

  if (curHr < 18) {
    return "Boa tarde";
  }

  return "Boa noite";
};
