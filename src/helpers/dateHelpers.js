export function getAgeFrom(birthDate) {
  const [birthYear, birthMonth, birthDay] = birthDate.split('-');
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  const age = todayYear - birthYear;

  if (todayMonth < birthMonth) {
    return age - 1;
  }
  if (todayMonth === +birthMonth && todayDay < birthDay) {
    return age - 1;
  }
  if (!birthDate) {
    return '?';
  }
  return age;
}
