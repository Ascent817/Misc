import random

payouts = {
  3: 200,
  4: 70,
  5: 40,
  6: 20,
  7: 15,
  8: 12,
  9: 9,
  10: 6,
  11: 6,
  12: 9,
  13: 12,
  14: 15,
  15: 20,
  16: 40,
  17: 70,
  18: 200
}

profit = 0
trials = 1000000

for i in range(trials):
  bets = [5, 8, 13, 16]
  sum = random.randint(1, 6) + random.randint(1, 6) + random.randint(1, 6)
  print(str(sum) + " | " + str(payouts[sum] - len(bets)))
  if (sum in bets):
    profit += payouts[sum]
    profit -= len(bets)

print(profit / trials)