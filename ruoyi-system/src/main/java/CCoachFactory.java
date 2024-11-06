/**
 * C级教练工厂实现
 */
public class CCoachFactory implements CoachFactory{
    @Override
    public Coach createCoach() {
        return new CCoach();
    }
}
