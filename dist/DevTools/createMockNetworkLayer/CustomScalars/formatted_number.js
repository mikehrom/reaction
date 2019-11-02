"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _error = require("graphql/error");

var _language = require("graphql/language");

// Vendored as-is from https://github.com/artsy/metaphysics/blob/e6b183bedd8402d2a96458d992360fa0ad852c64/src/schema/types/formatted_number.js
var FormattedNumber = new _graphql.GraphQLScalarType({
  name: "FormattedNumber",
  description: "The `FormattedNumber` type represents a number that can optionally be returned" + "as a formatted String. It does not try to coerce the type.",
  serialize: function serialize(x) {
    return x;
  },
  parseValue: function parseValue(x) {
    return x;
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind !== _language.Kind.STRING && ast.kind !== _language.Kind.INT) {
      var error = "Query error: Can only parse strings and ints, got a: ".concat(ast.kind);
      throw new _error.GraphQLError(error, [ast]);
    }

    return ast.value;
  }
});
var _default = FormattedNumber;
exports.default = _default;
//# sourceMappingURL=formatted_number.js.map