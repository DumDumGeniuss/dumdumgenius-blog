'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _redux = require('redux');

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _blogStore = require('./dist/store/blogStore');

var _blogStore2 = _interopRequireDefault(_blogStore);

var _reactRedux = require('react-redux');

var _createLocation = require('history/lib/createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

var _reducers = require('./dist/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _AboutMe = require('./dist/pages/aboutMe/AboutMe');

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _routes = require('./dist/route/routes');

var _routes2 = _interopRequireDefault(_routes);

var _IndexLayout = require('./dist/IndexLayout');

var _IndexLayout2 = _interopRequireDefault(_IndexLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

delete process.env.BROWSER;

var app = (0, _express2.default)();
var port = 8080;
console.log(__dirname + '/main.min.js');
app.use(_express2.default.static(__dirname));
app.use(handleRender);

function handleRender(req, res) {
    // Create a new Redux store instance
    var store = (0, _redux.createStore)(_reducers2.default),
        location = (0, _createLocation2.default)(req.url);

    (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {
        // if (err) {
        //   console.error(err)
        //   return res.status(500).end('Internal server error')
        // }
        if (!renderProps) {
            return res.status(404).end('Not found.');
        }

        var html = _server2.default.renderToString(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_reactRouter.RouterContext, renderProps)
        ));

        // const html = React.renderToStaticMarkup(
        //     <IndexLayout content={content} />
        // )

        var initialState = store.getState();

        //res.send(html)

        res.send(renderFullPage(html, initialState));
    });
}

function renderFullPage(html, initialState) {
    return '\n  \t  \t<!doctype html>\n  \t  \t<html>\n  \t  \t  \t<head>\n  \t  \t  \t \t<title>DumDumGenius\' blog</title>\n                <style>\n                    body {\n                        margin: 0px;\n                    }\n        \n                    * {\n                        box-sizing: border-box;\n                    }\n                    \n                    a {\n                        text-decoration: none;\n                        cursor: none;\n                    } \n        \n                    a:hover {\n                    }\n                </style>  \n  \t  \t  \t</head>\n  \t  \t  \t<body>\n  \t  \t  \t  \t<div id="app">' + html + '</div>\n  \t  \t  \t  \t<script>\n  \t  \t  \t    \twindow.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n  \t  \t  \t  \t</script>\n  \t  \t  \t  \t<script src="main.min.js" charset="utf-8"></script>\n  \t  \t  \t</body>\n  \t  \t</html>\n  \t  \t';
}

app.listen(port, function () {
    console.log('Start!');
});
