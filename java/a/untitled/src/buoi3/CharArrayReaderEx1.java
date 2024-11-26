package buoi3;

import javax.imageio.IIOException;
import java.io.CharArrayReader;
import java.io.IOException;

public class CharArrayReaderEx1 {
    public static void main(String[] args) throws IOException {
        char[] arr  = new char[]{'N','G','U','Y','E','N'};
        CharArrayReader reader = new CharArrayReader(arr);
        int code;
        while((code = reader.read())!=-1){
            char ch = (char) code;
            System.out.println(ch);
        }
    }
}
