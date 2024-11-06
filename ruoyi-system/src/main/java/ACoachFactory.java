/**
 * A级教练工厂实现
 */
public class ACoachFactory implements CoachFactory {
    @Override
    public Coach createCoach() {
        return new ACoach();
    }
}