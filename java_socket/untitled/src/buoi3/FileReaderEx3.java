package buoi3;

import java.io.*;

public class FileReaderEx3 {
    public static void main(String[] args) throws IOException {
        File file = new File("C:/Users/admin/Downloads/a/data.txt");
        Reader reader = new FileReader(file);
        BufferedReader br = new BufferedReader(reader);

        br.lines()
                .filter(line->!line.startsWith("#")) //Not starts with "#"
                .forEach(System.out::println);

        br.close();
    }
}