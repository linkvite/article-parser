import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export function parseArticle(html: string) {
    const dom = new JSDOM(html);
    const document = dom?.window?.document;

    if (!document) {
        return null;
    }

    const reader = new Readability(document);
    const article = reader.parse();

    return article;
}
