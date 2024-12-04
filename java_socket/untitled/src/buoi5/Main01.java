package buoi5;

public class Main01 {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Luong 1");
        MyThread t2 = new MyThread("Luong 2");
        MyThread t3 = new MyThread("Luong 3");

        t1.start();
        t2.start();
        t3.start();
    }
}

class MyThread extends Thread{
    private String s;

    public MyThread(String s){
        this.s = s;
    }

    @Override
    public void run() {
        int i = 0;
        while(i<20){
            try{
                Thread.sleep(500);
            }catch (InterruptedException ex){
                ex.printStackTrace();
            }
            System.out.println(s + " " + i);
            i++;
        }
    }
}
