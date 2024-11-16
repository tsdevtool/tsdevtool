void main() {
  // int a = 3;
  // int b = 4;
  // logInfor();
  // logInfor2();
  // logName('Nguyen Thanh Sieu');
  // print(Sum(a, b));
  Check(1, 2); // 1
}

void Check(int a, [int? b, int? c]) {
  print(a);
  print(b);
  print(c);
}

void logInfor() {
  print('Nguyen Thanh Sieu');
}

void logInfor2() => print('Sieu Nguyen Thanh');

void logName(String name) {
  print(name); // Nguyen Thanh Sieu
}

int Sum(int a, int b) {
  return a + b;
}
