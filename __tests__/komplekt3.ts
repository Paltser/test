import {Isikukood} from "../k1";
test("positiivne", ()=>{
    expect(new Isikukood("37605030299").sugu()).toBe("M");
    expect(new Isikukood("37605030299").getBirthYear()).toBe("1976");
});