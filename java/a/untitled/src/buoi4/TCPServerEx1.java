package buoi4;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPServerEx1 {
    public static final int DEFAULT_PORT = 2024;
    public static void main(String[] args) {
        int port = DEFAULT_PORT;
        try{
            ServerSocket ss = new ServerSocket(port);
            Socket s = null;
            while (true){
                try{
                    s = ss.accept();
                    PrintWriter pw;
                    BufferedReader br;
                    pw = new PrintWriter(new OutputStreamWriter(s.getOutputStream()));
                    br = new BufferedReader(new InputStreamReader(s.getInputStream()));
                    while(true){
                        String line = br.readLine();
                        if(line.equals("exit")){
                            break;
                        }
                        String upper = line.toUpperCase();
                        pw.println(upper);
                        pw.flush();
                    }
                }catch (IOException e){

                }finally {
                    try{
                        if(s!=null){
                            s.close();
                        }
                    }catch (IOException e){}
                }
            }
        }catch (IOException e){}
    }
}
