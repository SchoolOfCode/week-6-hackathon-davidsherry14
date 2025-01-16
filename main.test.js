import { whoIsBanished } from "./main.js"
import { expect, test } from "vitest"


test('Who has the most votes?', () => {
    const votes = [
        { name: 'Alice', votes: 3 },
        { name: 'Bob', votes: 5 },
        { name: 'Charlie', votes: 2 }
    ];
    expect(whoIsBanished(votes)).toBe('Bob');
})
