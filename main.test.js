import { whoIsBanished } from "./main.js"
import { describe, expect, test } from "vitest"

describe('whoIsBanished', () => {
    test('Single player is banished with the most votes', () => {
        const votes = [
            { name: 'Alice', votes: 3 },
            { name: 'Bob', votes: 5 },
            { name: 'Charlie', votes: 2 }
        ];
        expect(whoIsBanished(votes)).toStrictEqual({ name: 'Bob', votes: 5 });
    });

    test('Tiebreaker: First player in case of tie is banished', () => {
        const votes = [
            { name: 'Alice', votes: 3 },
            { name: 'William', votes: 5 },
            { name: 'Diana', votes: 5 }
        ];
        expect(whoIsBanished(votes)).toStrictEqual({ name: 'William', votes: 5 });
    });

    test('All players have the same votes', () => {
        const votes = [
            { name: 'Alice', votes: 2 },
            { name: 'Bob', votes: 2 },
            { name: 'Charlie', votes: 2 }
        ];
        expect(whoIsBanished(votes)).toStrictEqual({ name: 'Alice', votes: 2 });
    });

    test('Only one player in the game', () => {
        const votes = [{ name: 'Hannah', votes: 1 }];
        expect(whoIsBanished(votes)).toStrictEqual({ name: 'Hannah', votes: 1 });
    });

    test('No players in the game (empty list)', () => {
        const votes = [];
        expect(whoIsBanished(votes)).toBe(null);
    });
});
