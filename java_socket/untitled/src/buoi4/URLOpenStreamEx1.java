package buoi4;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;

public class URLOpenStreamEx1 {
    public static void main(String[] args) {
        String s = "https://github.com";
        String thisLine;
        try{
            URL u = new URL(s);
            try{
                DataInputStream dis= new DataInputStream(u.openStream());
                BufferedReader br = new BufferedReader(new InputStreamReader(dis));
                while ((thisLine = br.readLine())!=null){
                    System.out.println(thisLine);
                }
            }catch (IOException e){
                System.err.println(e);
            }
        }catch (MalformedURLException e){
            System.err.println(e);
        }
    }
}
