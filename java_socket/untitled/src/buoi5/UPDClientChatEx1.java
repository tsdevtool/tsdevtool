package buoi5;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class UPDClientChatEx1 {
    public static void main(String[] args) throws Exception {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        InetAddress ipServer = InetAddress.getByName("localhost");
        byte buffer[] = new byte[1024];
        int portServer = 8888;
        try{
            DatagramSocket socket = new DatagramSocket();
            DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
            boolean end = false;
            String strSend  = "", strReceive="";
            do{
                byte sendData[];
                System.out.println("Client: ");
                strSend = in.readLine();
                sendData = strSend.getBytes();
                DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, ipServer, portServer);
                socket.send(sendPacket);
                if(!strSend.equalsIgnoreCase("bye")){
                    socket.receive(packet);
                    strReceive = new String(packet.getData(), 0, packet.getLength());
                    System.out.println("Server: " + strReceive);
                }

                if(strSend.equalsIgnoreCase("bye") || strReceive.equalsIgnoreCase("bye")){
                    end = true;
                }

            }while(!end);
            socket.close();
        }catch (UnknownHostException e){
            System.err.println(e);
        }
    }
}
