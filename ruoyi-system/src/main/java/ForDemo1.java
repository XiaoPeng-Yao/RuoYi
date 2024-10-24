public class ForDemo1 {
    public static void main(String[] args) {
        System.out.println("----3次Hello World----");
        for (int i = 0; i < 3; i++) {
            if (i == 1) {

                /**
                 *当1等于3时，跳出当前循环
                 */

                break; 
                
            }
            System.out.println("Hello World");
        }

        System.out.println("----4次Hello MySQL----");
        for (int i = 1; i < 5; i++) {
            if (i == 3) {

                 /**
                 *当1等于3时，跳出当前循环
                 */

                continue; 
            }
            System.out.println("Hello MySQL");
        }

        System.out.println("----5次Hello Spring----");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {

                 /**
                 *当i等于3时，跳过当前迭代
                 */

                continue;
            }
            System.out.println("Hello Spring");
        }

        System.out.println("----3次Hello Redis----");
        for (int i = 1; i <= 5; i += 2) {
            if (i == 3) {
                 /**
                 *当i等于3时，跳过当前迭代
                 */

                break; 
            }
            System.out.println("Hello Redis");
        }
    }
}