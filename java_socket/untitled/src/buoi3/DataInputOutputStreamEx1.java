package buoi3;

import java.io.*;

public class DataInputOutputStreamEx1 {
    public static void main(String[] args) throws IOException {
        String fileName = "file.dat";
        //Ghi file co dinh dang
        DataOutputStream dout = new DataOutputStream(new FileOutputStream(fileName));
        dout.writeDouble(1.1);
        dout.writeInt(55);
        dout.writeBoolean(true);
        dout.writeChar('4');
        dout.writeUTF("Hello");

        //Doc file co dinh dang theo thu tu gia tri trong file
        DataInputStream din = new DataInputStream(new FileInputStream(fileName));
        double a = din.readDouble();
        int b = din.readInt();
        boolean c = din.readBoolean();
        char d = din.readChar();
        String e = din.readUTF();
        System.out.println("value: " + a + " " + b + " " + c + " " + d + " " + e);
    }
}
