FROM node:14

WORKDIR /app

# Global settings for Nuxt
COPY nuxt.config.js .
COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .

# workaround for omitting ".vue" suffix for comopnents
COPY shim.ts ts-shim.d.ts

COPY node_modules node_modules

COPY src src

RUN yarn

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN yarn build

CMD [ "yarn", "dev" ]