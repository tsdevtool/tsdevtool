package buoi4;

import java.io.IOException;
import java.io.InputStream;
import java.net.Socket;
import java.net.UnknownHostException;

public class TimeClientEx1 {
    public static void main(String[] args) {
        String hostName = "time.nist.gov";
        try{
            Socket theSocket = new Socket(hostName, 13);
            InputStream timeStream = theSocket.getInputStream();
            StringBuffer time = new StringBuffer();
            int c;
            while  ((c = timeStream.read())!=-1){
                time.append((char) c);
            }
            String timeString = time.toString().trim();
            System.out.println("It is " + timeString + " at " + hostName);
        }catch (UnknownHostException ex){
            System.err.println(ex);
        }catch (IOException e){
            System.err.println(e);
        }
    }
}
