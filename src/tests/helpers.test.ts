import { expect, test } from "bun:test";
import {
    globalError,
    errResponse,
    successResponse,
    generateResponse
} from "../helpers";

// the error tests are shady, will fix later.
test("generateResponse", () => {
    const params = [
        { status: 400, code: "BAD_REQUEST" },
        { status: 500, code: "INTERNAL_SERVER_ERROR" },
        { status: 200, code: "OK", data: "Random Data" },
    ];

    const responses = [
        new Response(JSON.stringify(params[0]), {
            headers: { "content-type": "application/json" },
        }),
        new Response(JSON.stringify(params[1]), {
            headers: { "content-type": "application/json" },
        }),
        new Response(JSON.stringify(params[2]), {
            headers: { "content-type": "application/json" },
        })
    ];

    for (const [index, param] of params.entries()) {
        expect(generateResponse(param)).toEqual(responses[index]);
    }
});

test("errResponse", () => {
    const params = [
        { status: 400, code: "BAD_REQUEST" },
        { status: 500, code: "INTERNAL_SERVER_ERROR" },
    ];

    const responses = [
        new Response(JSON.stringify(params[0]), {
            headers: { "content-type": "application/json" },
        }),
        new Response(JSON.stringify(params[1]), {
            headers: { "content-type": "application/json" },
        }),
    ];

    for (const [index, param] of params.entries()) {
        expect(errResponse(param)).toEqual(responses[index]);
    }
});

test("successResponse", () => {
    const params = [
        { status: 200, code: "OK", data: "Random Data" },
        { status: 200, code: "OK", data: {} },
    ];

    const responses = [
        new Response(JSON.stringify(params[0]), {
            headers: { "content-type": "application/json" },
        }),
        new Response(JSON.stringify(params[1]), {
            headers: { "content-type": "application/json" },
        }),
    ];

    for (const [index, param] of params.entries()) {
        expect(successResponse(param)).toEqual(responses[index]);
    }
});

test("globalError", () => {
    const params = [
        { code: "ERROR", error: new Error("Error") },
        { code: "ERROR", error: new Error("Error") },
    ];

    const responses = [
        new Response(JSON.stringify({
            status: 500,
            code: params[0].code,
            error: params[0].error.toString()
        }), {
            headers: { "content-type": "application/json" },
        }),
        new Response(JSON.stringify({
            status: 500,
            code: params[1].code,
            error: params[1].error.toString()
        }), {
            headers: { "content-type": "application/json" },
        }),
    ];

    for (const [index, param] of params.entries()) {
        expect(globalError(param)).toEqual(responses[index]);
    }
});

