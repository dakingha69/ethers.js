"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrypt;

var _reactNative = require("react-native");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var RNScrypt = _reactNative.NativeModules.RNScrypt;

function scrypt(_x, _x2) {
  return _scrypt.apply(this, arguments);
}

function _scrypt() {
  _scrypt = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(passwd, salt) {
    var N,
        r,
        p,
        dkLen,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            N = _args.length > 2 && _args[2] !== undefined ? _args[2] : 16384;
            r = _args.length > 3 && _args[3] !== undefined ? _args[3] : 8;
            p = _args.length > 4 && _args[4] !== undefined ? _args[4] : 1;
            dkLen = _args.length > 5 && _args[5] !== undefined ? _args[5] : 64;
            return _context.abrupt("return", RNScrypt.scrypt(passwd, salt, N, r, p, dkLen));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _scrypt.apply(this, arguments);
}
