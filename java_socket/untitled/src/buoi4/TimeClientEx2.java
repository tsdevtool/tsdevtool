package buoi4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.net.UnknownHostException;

public class TimeClientEx2 {
    public static void main(String[] args) {
        String hostname = "127.0.0.1";
        int port  = 2024;
        try(Socket socket = new Socket(hostname, port)){
            InputStream input = socket.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(input));
            String time = reader.readLine();

            System.out.println(time);
        }catch (UnknownHostException ex){
            System.out.println("Server not found: " + ex.getMessage());
        }catch (IOException ex){
            System.out.println("I/O error: " + ex.getMessage());
        }
    }
}
