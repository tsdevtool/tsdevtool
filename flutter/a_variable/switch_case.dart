enum Person { tin, hoa, phuong }

void main() {
  var name = null;
  switch (name) {
    case Person.tin:
      print("Hello");
      break;
    case Person.hoa:
      print("Bye");
      break;
    case Person.phuong:
      print("Bye");
      break;
    default:
      print("Unknown");
  }
}
