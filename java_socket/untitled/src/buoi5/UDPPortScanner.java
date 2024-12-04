package buoi5;

import java.net.DatagramSocket;
import java.net.SocketException;

public class UDPPortScanner {
    public static void main(String[] args) {
        for (int port = 0; port<=65535; port++){
            try{
                //Kiem tra co port nao khong duoc dung khong
                //Neu co ngoai le se duoc nem ra
                DatagramSocket server = new DatagramSocket(port);
                server.close();
            }catch (SocketException ex){
                System.out.println("Port: " + port + " đã được dùng");
            }
        }
    }
}
