package buoi5;

import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class DatagramExample {
    public static void main(String[] args) {
        String s ="Hello"; //Dinh nghia chuoi
        byte[] data = s.getBytes(); // Chuyen doi sang mang data voi kieu du lieu la byte <ten bien>.getBytes();
        try{
            InetAddress ia = InetAddress.getByName("www.hutech.edu.vn"); //Ten mien cua dia chi IP
            int port =7; //Gia su port la 7
            DatagramPacket dp;
            dp = new DatagramPacket(data, data.length, ia, port);//Dung dinh dang new DataPacket(data, kich thuoc data, dia chi, port)
            System.out.println("Address:  " + dp.getAddress());//Dia chi IP cua goi co ten dp da tao o tren
            System.out.println("Port: " + dp.getPort());
            System.out.println("Length: " + dp.getLength());
            System.out.println("Data: ");
            s = new String(dp.getData(), dp.getOffset(), dp.getLength());
            System.out.println(s);

        }catch (UnknownHostException e){
            System.err.println(e);
        }
    }
}
