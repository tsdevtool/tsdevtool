package buoi4;

import java.net.MalformedURLException;
import java.net.URL;

public class URLEx1 {
    public static void main(String[] args) {
        try{
//            URL u = new URL("http://www.thayphet.net/");
            URL u = new URL("https://e-graduate.hutech.edu.vn/portal/pda/72226486-5b30-413c-98f2-b76683128091/tool/9740228a-83af-4b66-9ae0-29a251ec123a?panel=Main");
            System.out.println("The protocol is: " + u.getProtocol());
            System.out.println("The host is: " + u.getHost());
            System.out.println("The port is: " + u.getPort());
            System.out.println("The file is: " + u.getFile());
            System.out.println("The anchor is: " + u.getRef());
            System.out.println("The query is: " + u.getQuery());
        }catch (MalformedURLException e){

        }
    }
}
