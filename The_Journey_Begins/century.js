function solution(year) {
  return year % 100 == 0 ? year / 100 : Math.trunc(year / 100) + 1;
}
