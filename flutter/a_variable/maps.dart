// Luu du lieu theo kieu key value
var map1 = {};
var map2 = {"id": 1, "name": "Sieu"};
void main() {
  print(map1.length);
  print(map2.length); // 2
  print("---------------");
  map2.forEach((key, value) {
    print("$key - $value"); // id - 1, name - Sieu
  });

  print("------add element--------");
  map1['number 1'] = '1';
  print(map1.length);
  map1.forEach((key, value) {
    print("$key - $value");
  });

  print("------add other map------");
  map1.addAll(map2);
  map1.forEach((key, value) {
    print("$key - $value");
  });
  // neu nhu co mot gia tri map khac trung key thi se ghi de len map cu

  print("------get 1 element-------");
  print(map1['name']);

  print("-----delete 1 element-");
  map1.remove("id");
  map1.forEach((key, value) {
    print("$key -  $value");
  });

  print("----check key -----");
  bool check = map1.containsKey("name");
  bool check2 = map1.containsKey("id");
  print(check);
  print(check2);

  print("-------delete all----");
  map1.clear();
  print(map1.length);
}
