var check = 'Checked';
var name;
void main() {
  // Condition ? expr1 : expr2
  // if (check == null) {
  //   name = "Default";
  // } else {
  //   name = check;
  // }
  name = check == null ? 'Default' : check; // Ternary Operator

  print(name);
  print("-----------------");

  // ? check null truoc khi su dung
  name = check ?? 'Default';
  print(name);
  print("-----------------");
  // (..) Cascades
  List<int> numbers = [];
  // numbers.add(1);
  // numbers.add(2);
  // numbers.add(3);
  numbers
    ..add(1)
    ..add(2)
    ..add(3);
  // numbers.forEach((number) {
  //   print(number);
  // });

  // =>
  numbers.forEach((number) => print(number));
}
