numbers = [1, 3, 5, 7, 8, 9, 10, 12, 13, 14, 15]
#indices:  0  1  2  3  4  5  6   7   8   9   10
target = 12
index = 0

for i in range(len(numbers)):
    if numbers[i] == target:
        index = i

print(index)
