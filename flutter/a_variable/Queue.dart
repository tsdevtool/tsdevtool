//Ham doi Queue

//Khai bao
import 'dart:collection';

var q = Queue();
var test = {'trai', 'nhat', 'nha'};
var q2 = Queue<int>();
void main() {
  print(q.length);

  //add 1 element
  q.add('Nguyen');
  q.add('Thanh');

  print(q.length);
  print('------------');
  //duyet cac phan tu
  q.forEach((value) {
    print(value);
  });

  q.addFirst('Sieu');
  q.addLast('Dep');
  q.addAll(test);
  print('------add------');
  q.forEach((i) {
    print(i);
  });

  print(q.length);
  print('------------remove');
  q.remove('trai');
  print(q.length);
  q.forEach((i) {
    print(i);
  });

  q2.add(2);
  print(q2.elementAt(0));
}
