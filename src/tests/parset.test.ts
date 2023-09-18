import { expect, test } from "bun:test";
import { parseArticle } from "../parser";

test("parseArticle", () => {
    const html = `
    <html>
        <head>
            <title>Test</title>
        </head>
        <body>
            <h1>Test</h1>
            <p>Test</p>
        </body>
    </html>
    `;

    const article = parseArticle(html);

    expect(article).toEqual({
        byline: null,
        content: "<div id=\"readability-page-1\" class=\"page\">\n            \n            <p>Test</p>\n        \n    \n    </div>",
        textContent: "\n            \n            Test\n        \n    \n    ",
        dir: null,
        excerpt: "Test",
        length: 49,
        lang: null,
        siteName: null,
        title: "Test"
    });
});

test("parseEmptyArticle", () => {
    const html = ``;

    const article = parseArticle(html);

    expect(article).toEqual(null);
});
