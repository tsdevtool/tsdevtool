import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  // khoi tao controller cho TextField nhap nhiet do C
  final TextEditingController _controller = TextEditingController();

  // Bien ket qua nhiet do F
  double result = 0.0;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("CHUYỂN ĐỔI NHIỆT ĐỘ"),
        ),
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                "Nhập nhiệt độ C",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              Padding(
                padding: const EdgeInsets.only(right: 40, left: 40),
                child: TextField(
                  controller: _controller, //Gan controller cho TextField
                  keyboardType: TextInputType.number,
                  textAlign: TextAlign.center,
                ),
              ),
              SizedBox(
                height: 25,
              ),
              Text("Nhiệt độ F là"),
              Text("$result độ",
                  style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 25,
                      color: Colors.red)),
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton(
            child: Icon(Icons.sync),
            onPressed: () {
              //Ham xu ly khi nhan nut

              setState(() {
                result = (double.parse(_controller.text) * 1.8) + 32;
              });
              print(result);
            }),
      ),
    );
  }
}
