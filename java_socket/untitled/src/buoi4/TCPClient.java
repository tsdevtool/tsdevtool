package buoi4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;


public class TCPClient {
    public static void main(String[] args) {
        String hostname = "localhost";
        if (args.length>0){
            hostname = args[0];
        }

        PrintWriter pw = null;
        BufferedReader br = null;
        try{
            Socket s = new Socket(hostname, 2024);
            br = new BufferedReader(new InputStreamReader(s.getInputStream()));

            BufferedReader user;
            user = new BufferedReader(new InputStreamReader(System.in));
            pw = new PrintWriter(s.getOutputStream());
            System.out.println("Da ket noi duoc voi server.......");
            while(true){
                String st = user.readLine();
                if(st.equals("exit")){
                    break;
                }
                pw.println(st);
                pw.flush();
                System.out.println(br.readLine());
            }
        }catch (IOException ex){
            System.err.println(ex);
        }finally {
            try{
                if(br!=null){
                    br.close();
                }
                if(pw!=null){
                    pw.close();
                }
            }catch (IOException e){
                System.err.println(e);
            }
        }
    }
}
