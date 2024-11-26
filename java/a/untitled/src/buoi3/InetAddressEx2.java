package buoi3;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class InetAddressEx2 {
    public static void main(String[] args) throws UnknownHostException {
        InetAddress ip = InetAddress.getLocalHost();
        System.out.println("Host Name: " + ip.getHostName());
        System.out.println("Ip Address: " + ip.getHostAddress());

        ip = InetAddress.getByName("www.hutech.edu.vn");
        System.out.println("Host Name: " + ip.getHostName());
        System.out.println("Ip Address: " + ip.getHostAddress());

        System.out.println("\nAll address of google");
        InetAddress sv[] = InetAddress.getAllByName("www.google.com");
        for(int i = 0; i<sv.length; i++){
            System.out.println(sv[i]);
        }
    }
}
