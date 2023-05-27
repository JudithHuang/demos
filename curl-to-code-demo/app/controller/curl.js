'use strict';

const { Controller } = require('egg');
const curlconverter = require('curlconverter');

class CurlController extends Controller {
  async convertCurlToCode() {
    const { ctx } = this;
    const { curl, language } = ctx.request.body;

    if (!curl || !language) {
      ctx.body = {
        error: 'curl 和 language 是必填参数',
      };
      return;
    }

    if (![ 'Ansible', 'Browser', 'Dart', 'Go', 'JsonString', 'NodeFetch', 'NodeRequest', 'Php', 'Python', 'Elixir', 'R', 'Rust', 'Strest', 'MATLAB', 'Java' ].includes(language)) {
      ctx.body = {
        error: "language的取值范围是 ['Ansible', 'Browser', 'Dart', 'Go', 'JsonString', 'NodeFetch', 'NodeRequest', 'Php', 'Python', 'Elixir', 'R', 'Rust', 'Strest', 'MATLAB', 'Java']",
      };
      return;
    }

    try {
      const convertFunc = `to${language}`;
      const result = curlconverter[convertFunc](curl);
      ctx.body = {
        code: result,
      };
    } catch (error) {
      ctx.body = {
        error: error.message,
      };
    }
  }
}

module.exports = CurlController;
