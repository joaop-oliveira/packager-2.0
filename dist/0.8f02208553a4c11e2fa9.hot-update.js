require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPackage; });
/* unused harmony export buildGzip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_package_model__ = __webpack_require__("./src/models/package.model.js");



var _this = this;

var insertPackageData = function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(data) {
        var pack;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_2__models_package_model__["a" /* default */].create(data);

                    case 2:
                        pack = _context.sent;

                        if (pack) {
                            _context.next = 5;
                            break;
                        }

                        throw new Error(pack);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function insertPackageData(_x) {
        return _ref.apply(this, arguments);
    };
}();
//inserir o caminho relativo para o diretorio dos pacotes sem zip


var checkVersion = function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var lastVersion;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_2__models_package_model__["a" /* default */].find({}).sort({ created_at: 'desc' }).select('version');

                    case 2:
                        lastVersion = _context2.sent;

                        if (lastVersion) {
                            _context2.next = 5;
                            break;
                        }

                        throw new Error(lastVersion);

                    case 5:
                        return _context2.abrupt('return', lastVersion);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function checkVersion() {
        return _ref2.apply(this, arguments);
    };
}();

//import statements

var shell = __webpack_require__("shelljs");
var zlib = __webpack_require__("zlib");
var fs = __webpack_require__("fs");
var moment = __webpack_require__("moment");

//declare statements
var gzip = zlib.createGzip();
var currentDate = moment().format('DD-MM-YYYY');

var MEMOIZE = {
    currentVersion: null
};

var createPackage = function createPackage(inputPath, req, res) {
    req.body.location = './package/' + currentDate + '/package-2.0.0';
    var packageDir = '/packages/' + currentDate + '/package-' + req.body.version + '.zip';
    try {
        insertPackageData(req.body);
        shell.cd('/home/joaop-oliveira/Documents/node_js/packager-2.0/src/lib/');
        if (shell.exec('zip -r -9 ../../packages/' + currentDate + '/package-' + req.body.version + '.zip  ./' + inputPath).code === 0) {
            res.status(200).send({
                message: 'Pacakage created successfully within ' + __dirname + packageDir });
        } else {
            res.send({
                message: "could not compress the directory"
            });
        }
    } catch (e) {
        console.log(e);
    }
};

var buildGzip = function () {
    var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(inputFile, req, res) {
        var bigFile, gzipedFile;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        // if (MEMOIZE.currentVersion === null) {
                        //   // const nextVersion = checkVersion();
                        // }
                        bigFile = fs.createReadStream(__dirname + inputFile);

                        shell.mkdir('-p', './packages/' + currentDate);
                        gzipedFile = fs.createWriteStream('./packages/' + currentDate + '/package-' + req.body.version + '.gz');

                        bigFile.pipe(gzip).pipe(gzipedFile);
                        res.send({ message: 'file created' });

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, _this);
    }));

    return function buildGzip(_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}();

// function createFile(fileName) {
//   fs.appendFile(fileName, content, function(err) {
//     if (err) throw new Error(err);
//     console.log('file saved!!');
//   });
// }
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/lib"))

/***/ })

};
//# sourceMappingURL=0.8f02208553a4c11e2fa9.hot-update.js.map