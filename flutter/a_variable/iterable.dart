var numbers = Iterable.generate(10);
void main() {
  numbers.forEach((number) {
    print(number); //0->9
  });
  print("----------");
  for (int i = 0; i < numbers.length; i++) {
    print(numbers.elementAt(i));
  }

  print("----------");
  for (var number in numbers) {
    print(number); //0->9
  }
  print("----------");
  print(numbers.last);
  print(numbers.isEmpty);
}
