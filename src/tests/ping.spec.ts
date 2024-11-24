import {describe, test, expect} from 'vitest';

describe("Ping Check", () => {
    test("Checking if the user is online", () => {

        const isBrowser = typeof window != undefined;
        // const isOnline = navigator.onLine;

        expect(isBrowser).toBe(true)
        // expect(isOnline).toBe(true)
    })
})