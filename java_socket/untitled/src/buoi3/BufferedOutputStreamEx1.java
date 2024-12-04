package buoi3;

import java.io.BufferedOutputStream;
import java.io.CharArrayReader;
import java.io.FileOutputStream;
import java.io.IOException;

public class BufferedOutputStreamEx1 {
    public static void main(String[] args) throws IOException {
        String fileName="C:/Users/admin/Downloads/a/data.txt";
        long n = 5000;
        try{
            long t =System.currentTimeMillis();
            FileOutputStream fo = new FileOutputStream(fileName);
            BufferedOutputStream bo = new BufferedOutputStream(fo);
            for(int i = 0; i<n; i++){
                bo.write(i);
            }
            bo.close();

            t = System.currentTimeMillis()-t;
            System.out.println("Ghi co vung dem " + t + " ms");

            //Khi khong co tream vung dem
            t = System.currentTimeMillis();
            fo = new FileOutputStream(fileName);
            for(int i = 0; i<n; i++){
                fo.write(i);
            }
            fo.close();
            t = System.currentTimeMillis() - t;
            System.out.println("Khi KHONG  co vung dem " + t + " ms");
        }catch(IOException e){
            System.err.println(e);
        }
    }
}
