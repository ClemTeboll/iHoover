describe("When a user click on the execute button", () => {    

    it("throw the execute function with initial elements : x = 5, y = 5, direction = North", () => {
        expect(finalX).toEqual(5);
        expect(finalY).toEqual(6);
        expect(finalDirection).toBe('N');
    });

    // it("throw the execute function with initial elements : x = 1, y = 1, direction = North", () => {
    //     expect(finalX).toEqual(1);
    //     expect(finalY).toEqual(3);
    //     expect(finalDirection).toBe('N');
    // })

    // it("throw the execute function with initial elements : x = 1, y = 6, direction = South", () => {
    //     expect(finalX).toEqual(2);
    //     expect(finalY).toEqual(5);
    //     expect(finalDirection).toBe('S');
    // })

    // it("throw the execute function with initial elements : x = 9, y = 9, direction = North", () => {
    //     expect(finalX).toEqual(9);
    //     expect(finalY).toEqual(10);
    //     expect(finalDirection).toBe('N');
    // })

    // it("throw the execute function with initial elements : x = 10, y = 1, direction = North", () => {
    //     expect(finalX).toEqual(9);
    //     expect(finalY).toEqual(3);
    //     expect(finalDirection).toBe('N');
    // })

});