/**
 * You have deposited a specific amount of money into your bank account.
 *
 * Each year your balance increases at the same growth rate.
 *
 * With the assumption that you don't make any additional deposits,
 * find out how long it would take for your balance to pass a specific threshold.
 */

function solution(deposit, rate, threshold) {
  return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100));
}
