FROM node:15.1.0-alpine3.11
WORKDIR /usr/src/app
RUN npx create-react-app sample_app --template typescript
WORKDIR /usr/src/app/sample_app
CMD ["yarn", "start"]
