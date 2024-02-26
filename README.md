# cli-example-nest-commander

## How to run it

#### 1. Install dependencies
```shell
npm install
```

#### 2. Use a command

Example:
```shell
# Get help from command order
npm run start:dev order -- -h
```

**Alternative** (Similar to production use)
```shell
# (After each changes)
npm run build
```

And then:

```shell
node ./dist/main order -h
```