(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{301:function(module,exports,__webpack_require__){__webpack_require__(302),__webpack_require__(448),module.exports=__webpack_require__(449)},366:function(module,exports){},449:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(293);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(640)],module)}.call(this,__webpack_require__(450)(module))},640:function(module,exports,__webpack_require__){var map={"./stories/1-Welcome.stories.js":641,"./stories/2-Button.stories.js":650,"./stories/3-Header.stories.js":667};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=640},641:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(294),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(70);__webpack_exports__.default={title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome};var ToStorybook=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};ToStorybook.displayName="ToStorybook",ToStorybook.story={name:"to Storybook"},ToStorybook.__docgenInfo={description:"",methods:[],displayName:"ToStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\1-Welcome.stories.js"]={name:"ToStorybook",docgenInfo:ToStorybook.__docgenInfo,path:"src\\stories\\1-Welcome.stories.js"})},650:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(102),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(70);__webpack_exports__.default={title:"Button",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button};var Text=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")};Text.displayName="Text";var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),Emoji=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},_ref)};Emoji.displayName="Emoji",Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\2-Button.stories.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src\\stories\\2-Button.stories.js"}),Emoji.__docgenInfo={description:"",methods:[],displayName:"Emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\2-Button.stories.js"]={name:"Emoji",docgenInfo:Emoji.__docgenInfo,path:"src\\stories\\2-Button.stories.js"})},667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HeaderStory",(function(){return HeaderStory}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(102),makeStyles=__webpack_require__(688),AppBar=__webpack_require__(694),Toolbar=__webpack_require__(690),Typography=__webpack_require__(692),Button=__webpack_require__(693),IconButton=__webpack_require__(691),Menu=__webpack_require__(295),Menu_default=__webpack_require__.n(Menu),useStyles=Object(makeStyles.a)((function(theme){return{root:{flexGrow:1},menuButton:{marginRight:theme.spacing(2)},title:{flexGrow:1}}})),_ref2=react_default.a.createElement(Menu_default.a,null);function Header(_ref){var login=_ref.login,logged=_ref.logged,classes=useStyles();return react_default.a.createElement("div",{className:classes.root},react_default.a.createElement(AppBar.a,{position:"static"},react_default.a.createElement(Toolbar.a,null,react_default.a.createElement(IconButton.a,{edge:"start",className:classes.menuButton,color:"inherit","aria-label":"menu"},_ref2),react_default.a.createElement(Typography.a,{variant:"h6",className:classes.title},"Social Media App"),react_default.a.createElement(Button.a,{color:"inherit",onClick:login},logged?"Welcome":"Login"))))}Header.displayName="Header",Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{login:{required:!0,flowType:{name:"Function"},description:""},logged:{required:!0,flowType:{name:"boolean"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Header\\index.jsx"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src\\components\\Header\\index.jsx"});__webpack_exports__.default={title:"Header",component:Header};var HeaderStory=function(){return react_default.a.createElement(Header,{login:Object(dist.action)("login action")})};HeaderStory.displayName="HeaderStory",HeaderStory.__docgenInfo={description:"",methods:[],displayName:"HeaderStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\3-Header.stories.js"]={name:"HeaderStory",docgenInfo:HeaderStory.__docgenInfo,path:"src\\stories\\3-Header.stories.js"})}},[[301,1,2]]]);
//# sourceMappingURL=main.36c5ddc4f6d47d52330c.bundle.js.map