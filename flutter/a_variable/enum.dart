//tap hop cac hang so
enum Person { tin, hoa, phuong }

void main() {
  print("ENUM");
  print("-----------");
  print(Person.tin);
  print(Person.tin.name);
  print(Person.values.length); //kich thuoc
  print(Person.values[0]); //lay gia tri phan tu
  print(Person.values.first); //Cach lay gia tri khac
  print(Person.values.last);
  //Kiem tra rong hoac khong rong
  print(Person.values.isEmpty);
  print(Person.values.isNotEmpty);
  print("-----duyet mang------");
  //Duyet mang
  Person.values.forEach((i) {
    print(i.name);
  });
}
