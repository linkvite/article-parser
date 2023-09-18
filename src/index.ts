import { Elysia } from "elysia";
import { parseArticle } from "./parser";
import {
    errResponse,
    globalError,
    successResponse
} from "./helpers";

const PORT = process.env.PORT || 9090;

const app = new Elysia();
app.onError(globalError);
app.get("/ping", () => "pong");
app.get("/", () => "Article Parser");
app.post("/parse", ({ body }) => {
    const { html } = body as { html: string };

    if (!html) {
        return errResponse({
            status: 400,
            code: "MISSING_HTML"
        })
    }

    const article = parseArticle(html);

    if (!article) {
        return errResponse({
            status: 400,
            code: "INVALID_HTML"
        })
    }

    return successResponse({
        status: 200,
        data: article,
        code: "PARSED_HTML"
    });
});


app.listen(PORT);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
