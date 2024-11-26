package buoi3;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class ReaderWriterEx1 {
    public static void main(String[] args){
        try{
            String fileName = "C:/Users/admin/Downloads/a/data.txt";
            String s = "Hello title Reader-Writer!";
            System.out.println("Du lieu ban dau:"+s);
            //Ghi s vao tap tin
            FileWriter fw = new FileWriter(fileName);
            fw.write(s);
            fw.close();
            //Doc tap tin vao chuoi sb
            FileReader fr = new FileReader(fileName);
            StringBuffer sb = new StringBuffer();
            char ca[] = new char[5]; //Doc moi lan 5 ky tu
            while (fr.ready()){
                int len = fr.read(ca); //So ky tu doc duoc that su
                sb.append(ca,0,len);

            }
            fr.close();

            System.out.println("Du lieu doc duoc:"+sb);
        }catch (IOException ex){
            System.err.println("Error");
        }
    }
}
