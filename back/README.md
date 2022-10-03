## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
to create minio server on docker:
docker run -p 9000:9000 -p 9090:9090 --name teaming-minio -v D:\minio\data:/data -e "MINIO_ROOT_USER=teaming" -e "MINIO_ROOT_PASSWORD=teaming" quay.io/minio/minio server /data --console-address ":9090"
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

