package buoi4;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

public class URLEncodeExample {
    public static void main(String[] args) {
        try{
//            Chuoi du lieu can ma hoa
            String data = "Author=Sadie, Julie&Title=Women Composer";

//            Ma hoa chuoi du lieu
            String encodedData = URLEncoder.encode(data,"UTF8");

//            In ra chuoi da ma hoa
            System.out.println("Chuoi da ma hoa: " + encodedData);

            String decodedData = URLDecoder.decode(encodedData);
            System.out.println("Chuoi sau khi giai ma: " + decodedData);
        }catch (UnsupportedEncodingException e){
            e.printStackTrace();
        }
    }
}
