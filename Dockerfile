FROM oven/bun

COPY . .

EXPOSE 9090

ENTRYPOINT ["bun",  "dev"]