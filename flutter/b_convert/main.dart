//List, Maps, Set, Queue

var number = [1, 2, 3];
List<int> list1 = [4, 5, 6];
List<String> list2 = ['nguyen', 'thanh', 'sieu'];
void main() {
  // 4. .map();
  List<String> strNumber = number.map((x) {
    return '$x';
  }).toList();
  print(strNumber);
  //3. .from();
  // Set<dynamic> set3 = Set.from(number);
  // print(set3.length);
  // set3.forEach((number) {
  //   print(number.runtimeType);
  //   print(number);
  // });

  // var q = Queue.from(number);
  // print(q.length);
  // q.forEach((i) {
  //   print(i);
  // });

  //2.Add all phan tu
  // Set<String> set2 = {};
  // set2.addAll(list2);
  // print(set2.length);
  // set2.forEach((name) {
  //   print(name.runtimeType);
  //   print(name);
  // });

  //1. duyet tung phan tu -> add tuong ung
  // Set<String> set1 = {};
  // list1.forEach((number) {
  //   set1.add("$number");
  // });

  // print(set1.length);
  // set1.forEach((number) {
  //   print(number.runtimeType);
  //   print(number);
  // });
}
