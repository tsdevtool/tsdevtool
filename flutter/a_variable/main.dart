void main() {
  print("-----VAR-----");
//   var la gia tri dong
// khong khoi tao gia tri ban dau thi tuong tu dynamic
// Nhung khi da gan gia tri ban dau thi khong the gan gia tri co kieu du lieu khac duoc nua
  var b;
  print(b.runtimeType);
  print(b);

  b = 10;
  print(b.runtimeType);
  print(b);

  b = 'I\'m TSdevtool';
  print(b.runtimeType);
  print(b);
  print("------DYNAMIC----");
  // dynamic kieu gia tri dong
  //dynamic khong khoi tao la gia tri null
  // dynamic co gan gia tri thi xuat gia tri va kieu gia tri tuy thuoc
  // dynamic  = String, int , double
  // Nhuoc diem: nguoi ta se khong hieu code ban dung kieu du lieu gi
  dynamic a;
  print(a.runtimeType);
  print(a);
  print("----------");
}
