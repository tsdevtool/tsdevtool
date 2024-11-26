package buoi4;

import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;

public class URLConnectionEx1 {
    public static void main(String[] args) {
        try{
//            String s = "https://www.hutech.edu.vn";
            URL u = new URL("https://www.hutech.edu.vn");
            URLConnection uc = u.openConnection();
            uc.connect();
            String key = null;
            for(int n = 1; (key= uc.getHeaderFieldKey(n))!=null; n++){
                System.out.println(key + ": " + uc.getHeaderField(key));
            }
        }catch (IOException e){
            System.err.println(e);
        }

    }
}
