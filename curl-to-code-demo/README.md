# curl-to-code-demo



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

# 参数说明

## curl

curl 的示例代码

## language

需要转换的语言，枚举：Ansible, Browser, Dart, Go, JsonString, NodeFetch, NodeRequest, Php, Python, Elixir, R, Rust, Strest, MATLAB, Java

# 调用生成示例代码API

```shell
curl --request POST \
  --url http://localhost:7001/convertCurlToCode \
  --header 'content-type: application/json' \
  --data '{
	"curl": "curl 'https://jsonplaceholder.typicode.com/posts/1'", "language": "Java"
}'
```
