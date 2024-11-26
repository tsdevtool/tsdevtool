package buoi3;

import java.io.CharArrayReader;
import java.io.CharArrayWriter;
import java.io.IOException;

public class CharArrayReaderEx2 {
    public static void main(String[] args) throws IOException {
        String originText = "Log20210217.txt";
        char[] charArr = originText.toCharArray(); //Chuyen chuoi thanh dang mang
        for(int i = 0; i<charArr.length; i++){
            System.out.println("Char in Array["+i+"] :"+charArr[i]);
        }
        CharArrayReader reader = new CharArrayReader(charArr);
        CharArrayWriter writer = new CharArrayWriter();
        int code;
        while((code = reader.read())!=-1){
            if(code > 48&&code <57){
                System.out.print(code +" - " );
                writer.write(code);
            }
        }

        System.out.println();
        char[] newCharArr = writer.toCharArray();
        System.out.println(newCharArr);
        String newText = writer.toString();
        System.out.println(newText);
    }
}
