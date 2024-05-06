import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date(2022, 0, 1)
            expect(getMonth(date)).toBe("janvier")
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date(2022, 6, 8)
            expect(getMonth(date)).toBe("juillet")
        });
    });
})

