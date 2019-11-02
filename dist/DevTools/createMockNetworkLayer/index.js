"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMockFetchQuery = exports.createMockNetworkLayer2 = exports.createMockNetworkLayer = void 0;

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

var _graphql = require("graphql");

var _relayMockNetworkLayer = _interopRequireDefault(require("relay-mock-network-layer"));

var _relayRuntime = require("relay-runtime");

var _get = require("../../Utils/get");

var _uuid = _interopRequireDefault(require("uuid"));

var _schema = _interopRequireDefault(require("../../../data/schema.graphql"));

var _formatted_number = _interopRequireDefault(require("./CustomScalars/formatted_number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @deprecated use createMockNetworkLayer2
 * @param mockResolvers
 */
var createMockNetworkLayer = function createMockNetworkLayer(mockResolvers) {
  return _relayRuntime.Network.create((0, _relayMockNetworkLayer.default)({
    schema: _schema.default,
    mocks: _objectSpread({
      FormattedNumber: function FormattedNumber() {
        return _formatted_number.default;
      }
    }, mockResolvers)
  }));
};

exports.createMockNetworkLayer = createMockNetworkLayer;

var createMockNetworkLayer2 = function createMockNetworkLayer2(_ref) {
  var _ref$mockData = _ref.mockData,
      mockData = _ref$mockData === void 0 ? {} : _ref$mockData,
      _ref$mockMutationResu = _ref.mockMutationResults,
      mockMutationResults = _ref$mockMutationResu === void 0 ? {} : _ref$mockMutationResu;
  return _relayRuntime.Network.create(createMockFetchQuery({
    mockData: mockData,
    mockMutationResults: mockMutationResults
  }));
};
/**
 * Here we create a mock for the `fetchQuery` graphql helper which executes
 * a query. The mock is injected with fake results.
 * @param param0
 */


exports.createMockNetworkLayer2 = createMockNetworkLayer2;

var createMockFetchQuery = function createMockFetchQuery(_ref2) {
  var _ref2$mockData = _ref2.mockData,
      mockData = _ref2$mockData === void 0 ? {} : _ref2$mockData,
      _ref2$mockMutationRes = _ref2.mockMutationResults,
      mockMutationResults = _ref2$mockMutationRes === void 0 ? {} : _ref2$mockMutationRes;
  var idMap = new WeakMap(); // getNetworkLayer is quite poorly named. It's actually returning a
  // `fetchQuery` function

  return (0, _relayMockNetworkLayer.default)({
    // We pass this field resolver in so that we can control the resolution
    // logic for all data that relay tries to extract from our mock fixtures.
    fieldResolver: function (source, _args, _context, info) {
      var pathAsArray = (0, _graphql.responsePathAsArray)(info.path);

      if (pathAsArray.length === 1) {
        // source is null for root fields
        source = source || (info.operation.operation === "mutation" ? mockMutationResults : mockData);
      } // fail early if source is not an object type
      // this happens because graphql only checks for null when deciding
      // whether to resolve fields in a given value


      if (_typeof(source) !== "object") {
        var parentPath = pathAsArray.slice(0, -1).join("/");
        var operationName = (0, _get.get)(info, function (i) {
          return i.operation.name.value;
        });
        throw new Error("The value at path '".concat(parentPath, "' for operation '").concat(operationName, "' should be an object but is a ").concat(_typeof(source), "."));
      } // handle aliased fields first


      var alias = info.fieldNodes[0].alias;

      if (alias && alias.value in source) {
        return inferUnionOrInterfaceType(checkLeafType(source[alias.value], info), info);
      } // the common case, the field has a fixture and is not aliased


      if (info.fieldName in source) {
        return inferUnionOrInterfaceType(checkLeafType(source[info.fieldName], info), info);
      }

      if (info.fieldName === "__id" || info.fieldName === "id") {
        // if relay is looking for `__id` but we only supplied `id`
        if ("id" in source) {
          return source.id;
        } // relay is looking for an id to denormalize the fixture in the store
        // but we don't want to have to specify ids for all fixtures
        // so generate one and store it in a weak map so we don't mutate
        // the object itself


        if (idMap.has(source)) {
          return idMap.get(source);
        }

        var id = (0, _uuid.default)();
        idMap.set(source, id);
        return id;
      }

      throw error(info, function (_ref3) {
        var type = _ref3.type,
            path = _ref3.path,
            operationName = _ref3.operationName;
        return "A mock for field at path '".concat(path, "' of type '").concat(type, "' was expected for operation '").concat(operationName, "', but none was found.");
      });
    },
    schema: _schema.default,
    resolvers: {
      FormattedNumber: function FormattedNumber() {
        return _formatted_number.default;
      },
      // here we map the mock fixture entries to resolver functions if they aren't
      // already. graphql-tools expects functions, but we want to be able to just
      // supply plain data for syntax convenience.
      Query: Object.entries(mockData).reduce(function (acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            k = _ref5[0],
            v = _ref5[1];

        return _objectSpread({}, acc, _defineProperty({}, k, typeof v === "function" ? v : function () {
          return v;
        }));
      }, {}),
      Mutation: Object.entries(mockMutationResults).reduce(function (acc, _ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            k = _ref7[0],
            v = _ref7[1];

        return _objectSpread({}, acc, _defineProperty({}, k, typeof v === "function" ? v : function () {
          return v;
        }));
      }, {})
    }
  });
};

exports.createMockFetchQuery = createMockFetchQuery;

var checkLeafType = function checkLeafType(value, info) {
  var returnType = info.returnType;

  if ((0, _graphql.isLeafType)(returnType)) {
    try {
      returnType.parseValue(value);
    } catch (e) {
      throw error(info, function (_ref8) {
        var type = _ref8.type,
            path = _ref8.path,
            operationName = _ref8.operationName;
        return "Expected mock value of type '".concat(type, "' but got '").concat(_typeof(value), "' at path '").concat(path, "' for operation '").concat(operationName, "'");
      });
    }
  }

  return value;
}; // This function tries to infer the concrete type of a value that appears
// in a position whose type is either a union or an interface


var inferUnionOrInterfaceType = function inferUnionOrInterfaceType(value, info) {
  var returnType = info.returnType;

  if ((0, _graphql.isNonNullType)(returnType)) {
    returnType = returnType.ofType;
  }

  if (!(0, _graphql.isAbstractType)(returnType)) {
    return value;
  } // remember that typeof null === 'object'


  if (_typeof(value) !== "object") {
    throw error(info, function (_ref9) {
      var type = _ref9.type,
          path = _ref9.path,
          operationName = _ref9.operationName;
      return "Expected object of type '".concat(type, "' but got '").concat(_typeof(value), "' at path '").concat(path, "' for operation '").concat(operationName, "'");
    });
  }

  if (value == null || "__typename" in value) {
    return value;
  }

  var unionMemberTypes = info.schema.getPossibleTypes(returnType); // try to find keys in the object which are unique to one type

  var _arr2 = Object.keys(value);

  var _loop = function _loop() {
    var key = _arr2[_i2];
    var matchingTypes = unionMemberTypes.filter(function (type) {
      return type.getFields()[key];
    });

    if (matchingTypes.length === 1) {
      return {
        v: _objectSpread({}, value, {
          __typename: matchingTypes[0].name
        })
      };
    }
  };

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var _ret = _loop();

    if (_typeof(_ret) === "object") return _ret.v;
  } // failed to find unique keys so the object is ambiguous and we need to ask for a __typename


  var possibleTypes = unionMemberTypes.map(function (type) {
    return type.name;
  }).join(", ");
  throw error(info, function (_ref10) {
    var path = _ref10.path,
        operationName = _ref10.operationName;
    return "Ambiguous object at path '".concat(path, "' for operation '").concat(operationName, "'. Add a __typename from this list: [").concat(possibleTypes, "]");
  });
};

function error(info, renderMessage) {
  return new Error(renderMessage({
    path: (0, _graphql.responsePathAsArray)(info.path).join("/"),
    type: info.returnType.inspect(),
    operationName: (0, _get.get)(info, function (i) {
      return i.operation.name.value;
    }, "(unknown)")
  }));
}
//# sourceMappingURL=index.js.map