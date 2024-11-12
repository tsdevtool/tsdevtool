//Sets: giong map nhung chi luu value khong luu key

var number = <int>{};
var number2 = <int>{1, 2, 3};
Set<int> number3 = {4, 5, 6};
Set<String> names = {'sieu', 'nhung', 'nhu'};
Set<dynamic> test = {1, 'sieu', 2.1};

void main() {
  //length
  print(number.length);
  print(number2.length);
  print(number3.length);

  //duyet cac phan tu
  names.forEach((name) {
    print(name);
  });

  print("------------");
  test.forEach((value) {
    print(value.runtimeType);
    print(value);
  });

  print("------Them phan tu--------");
  number.add(0);
  number.add(1);
  //giong nhu map neu phan tu trung nhau thi no se tu dong gom thanh 1
  number.addAll(number2);

  print(number.length);
  number.forEach((i) {
    print(i);
  });

  print("-----remove-------");
  number.remove(2);
  print(number.length);
  number.forEach((i) {
    print(i);
  });

  print(test.elementAt(1));

  print("-----check-------");
  bool check = test.contains('sieu');
  print(check);
}
