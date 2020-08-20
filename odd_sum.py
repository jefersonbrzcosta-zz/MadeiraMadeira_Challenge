def odd_sum(number):
  array = []
  while number >= 0:
    if number % 2:
      array.append(number)
    number -= 1
  return sum(array)

print(odd_sum(5))