package buoi5;

import javax.xml.crypto.Data;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class UPDServerChatEx1 {
    public static void main(String[] args) throws  Exception {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        byte buffer[] = new byte[1024];
        int port = 8888;
        try{
            DatagramSocket socket = new DatagramSocket(port);
            System.out.println("Server is opening " + port + " ....");
            DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
            boolean end = false;
            String strSend = "", strReceive = "";
            do{
                socket.receive(packet);
                strReceive = new String(packet.getData(), 0 , packet.getLength());
                System.out.println("Client: " + strReceive);
                if(!strReceive.equalsIgnoreCase("bye")){
                    InetAddress ipClient = packet.getAddress();
                    int portClient = packet.getPort();
                    byte sendData[];
                    System.out.println("Server: ");
                    strSend = in.readLine();
                    sendData = strSend.getBytes();
                    DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, ipClient, portClient);
                    socket.send(sendPacket);
                }

                if(strSend.equalsIgnoreCase("bye") || strReceive.equalsIgnoreCase("bye")){
                    end = true;
                }
            }while (!end);
            socket.close();
        }catch (UnknownHostException ex){
            System.err.println(ex);
        }
    }
}
