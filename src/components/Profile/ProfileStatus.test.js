import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component test", () => {

    test("Status from props should be in state", () => {
        const component = create(<ProfileStatus status="test A status"/>);
        const instance = component.getInstance(); // получить объект класса
        expect(instance.state.userStatus).toBe("test A status");
    });

    test("Initially <span> tag should be displayed !", () => {
        const component = create(<ProfileStatus status="test A status"/>);
        const root = component.root ; // получить root
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("Initially <input> tag shouldn't be displayed !", () => {
        const component = create(<ProfileStatus status="test A status"/>);
        const instance = component.root; // получить root
        expect(() => {
            const input = instance.findByType("input");
        }).toThrow();

    });

    test("Initially correct status should be in <span>!", () => {
        const component = create(<ProfileStatus status="test transferred status"/>);
        const root = component.root ; // получить root
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test transferred status");
    });

    test("<input> should be displayed instead of <span>!", () => {
        const component = create(<ProfileStatus status="test transferred status" isMe={true}/>);
        const root = component.root ; // получить root
        let span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("test transferred status");
    });

    // Тестрирование вызова коллбека
    test("Callback should be called!", () => {
        const mockCallback = jest.fn(); // отладочная ф-ция коллбек для подсчета кол-ва вызовов
        const component = create(<ProfileStatus status="test status callback" updateStatus={mockCallback}/>);
        const instance = component.getInstance(); // получить объект класса
        instance.setState({userStatus: "old test status callback"}); // установили другой статус для вызова коллбека
        instance.setEditModeOff(); // вызов ф-ции, содержащей коллбек
        expect(mockCallback.mock.calls.length).toBe(1); // проверка кол-ва вызовов
    });


});