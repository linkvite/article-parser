# Article Parser
This service converts web pages to a simple reader mode article. Built with [Bun](https://github.com/oven-sh/bun) and [Elysia](https://github.com/elysiajs/elysia).
## Getting Started
You need to have [Bun](https://github.com/oven-sh/bun) installed to run this service. To install Bun, check out the [documentation](https://github.com/oven-sh/bun#install).

## Prerequisites
- `.env` file with PORT

## Development
To start the development server run:
```bash
bun run dev
```
Open [http://localhost:PORT](http://localhost:PORT) with your browser to see the result.

## Test
To run the tests run:
```bash
bun test
```

## Usage
To use the service send a `POST` request to `/parse` with the following body:
```json
{
  "html": "<html>...</html>"
}
```
The response will be:
```json
{
  "status": 200,
  "code": "PARSED_HTML",
  "data": {
    "title": "Article Title",
    "byline": "Article Byline",
    "dir": "ltr",
    "lang": "en",
    "content": "<p>Article Content in HTML</p>",
    "textContent": "Article Content in Text",
    "length": 1234,
    "excerpt": "Article Excerpt",
    "siteName": "Article Site Name",
  }
}
```

The `response.data` structure is based on [Mozilla Readability](https://github.com/mozilla/readability).

## License
Distributed under the MIT License. See `LICENSE` for more information.