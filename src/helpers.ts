interface IGlobalError {
    code: string;
    error: Error;
}

interface IResponse {
    status: number;
    code: string;
}

interface IResponseData extends IResponse {
    data: unknown;
}

const responseInit = {
    headers: { "content-type": "application/json" },
};

export function generateResponse(params: unknown) {
    return new Response(JSON.stringify(params), responseInit);
}

export function errResponse(params: IResponse) {
    return generateResponse(params);
}

export function successResponse(params: IResponseData) {
    return generateResponse(params);
}

export function globalError(params: IGlobalError) {
    const _params = {
        status: 500,
        code: params.code,
        error: params.error.toString()
    };

    return generateResponse(_params);
}
