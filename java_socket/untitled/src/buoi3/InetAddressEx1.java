package buoi3;

import java.net.InetAddress;
import java.util.Scanner;

public class InetAddressEx1 {
    public static void main(String[] args) {
        try{
            Scanner sc =  new Scanner(System.in);
            System.out.println("Nhap ten can kiem tra: ");
            String s = sc.nextLine();

            InetAddress host = InetAddress.getByName(s); //ten mien
            System.out.println("Host name: " + host.getHostName());
            System.out.println("Ip name: " + host.getHostAddress());

            byte[] b  = host.getAddress();
            int i = b[0] >=0 ? b[0]:256+b[0];
            if(i>=1 && i <=126){
                System.out.println("Dia chi thuoc lop A");
            }
            if(i>=128 && i <=191){
                System.out.println("Dia chi thuoc lop B");
            }if(i>=192 && i <=223){
                System.out.println("Dia chi thuoc lop C");
            }

        }catch (Exception e){
            System.out.println("Khong tim thay dia chi!");
            return;
        }
    }
}
