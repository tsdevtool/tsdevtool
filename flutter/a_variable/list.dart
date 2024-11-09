var listEmpty = [];
List<int> numberListEmpty = [];
List<dynamic> listDynamic = [21, "Nguyen Thanh Sieu", 3.5];

void main() {
  listDynamic.forEach((index) {
    print(index);
  });
  print("-------------");

  // Kiem tra so phan tu
  print(listEmpty.length);
  print(numberListEmpty.length);

  // Them phan tu vao danh sach
  listEmpty.add("sieu");
  listEmpty.add(2);
  listEmpty.add(3.6);
  numberListEmpty.add(4);
  numberListEmpty.add(5);

  // Duyet danh sach
  listEmpty.forEach((i) {
    print(i.runtimeType);
    print(i);
  });

  numberListEmpty.forEach((i) {
    print(i.runtimeType);
    print(i);
  });
  print("--------------");
  listEmpty.addAll(numberListEmpty);
  listEmpty.forEach((i) {
    // print(i.runtimeType);
    print(i);
  });

  // Chen phan tu
  listEmpty.insert(3, "tsdevtool");
  print("--------------");
  listEmpty.addAll(numberListEmpty);
  listEmpty.forEach((i) {
    // print(i.runtimeType);
    print(i);
  });

  listEmpty.remove("tsdevtool"); //gia tri muon xoa
  listEmpty.removeAt(2); //Xoa tai vi tri muon xoa
  listEmpty.removeRange(0, 3);
  print("--------------");
  listEmpty.addAll(numberListEmpty);
  listEmpty.forEach((i) {
    // print(i.runtimeType);
    print(i);
  });

  // Dao chieu
  print("--------------");
  listEmpty.reversed.forEach((i) {
    print(i);
  });

  print("-------");
  listEmpty.clear();
  print(listEmpty.length);
}
