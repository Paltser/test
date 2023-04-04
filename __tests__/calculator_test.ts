import { Calculator } from '../calculator';
describe('Calculator', () => {
    let calcobj: Calculator;

    beforeEach(() => {
        calcobj = new Calculator();
    });

    test('empty init', () => {
        expect(calcobj.getPanelContents()).toBe("");
    });

    test('press button', () => {
        calcobj.pressButton('7');
        expect(calcobj.getPanelContents()).toBe("7");
        calcobj.pressButton('8');
        expect(calcobj.getPanelContents()).toBe("78");
        calcobj.pressButton('+');
        expect(calcobj.getPanelContents()).toBe("78+");
        calcobj.pressButton('9');
        expect(calcobj.getPanelContents()).toBe("78+9");
    });
});