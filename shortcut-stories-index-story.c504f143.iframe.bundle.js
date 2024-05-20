"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8067],{"./packages/components/src/shortcut/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Shortcut(props){const{shortcut,className}=props;if(!shortcut)return null;let displayText,ariaLabel;return"string"==typeof shortcut&&(displayText=shortcut),null!==shortcut&&"object"==typeof shortcut&&(displayText=shortcut.display,ariaLabel=shortcut.ariaLabel),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className,"aria-label":ariaLabel,children:displayText})}Shortcut.displayName="Shortcut";const __WEBPACK_DEFAULT_EXPORT__=Shortcut;try{Shortcut.displayName="Shortcut",Shortcut.__docgenInfo={description:"Shortcut component is used to display keyboard shortcuts, and it can be customized with a custom display and aria label if needed.\n\n```jsx\nimport { Shortcut } from '@wordpress/components';\n\nconst MyShortcut = () => {\n\treturn (\n\t\t<Shortcut shortcut={{ display: 'Ctrl + S', ariaLabel: 'Save' }} />\n\t);\n};\n```",displayName:"Shortcut",props:{className:{defaultValue:null,description:"Classname to apply to the shortcut.",name:"className",required:!1,type:{name:"string"}},shortcut:{defaultValue:null,description:"Shortcut configuration",name:"shortcut",required:!1,type:{name:"string | { display: string; ariaLabel: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/shortcut/index.tsx#Shortcut"]={docgenInfo:Shortcut.__docgenInfo,name:"Shortcut",path:"packages/components/src/shortcut/index.tsx#Shortcut"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/shortcut/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAriaLabel:()=>WithAriaLabel,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/shortcut/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components/Shortcut",parameters:{sourceLink:"packages/components/src/shortcut",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{shortcut:"Ctrl + S",...props});Template.displayName="Template";const Default=Template.bind({}),WithAriaLabel=Template.bind({});WithAriaLabel.args={...Default.args,shortcut:{display:"Ctrl + L",ariaLabel:"Load"}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'props => {\n  return <Shortcut shortcut="Ctrl + S" {...props} />;\n}',...Default.parameters?.docs?.source}}},WithAriaLabel.parameters={...WithAriaLabel.parameters,docs:{...WithAriaLabel.parameters?.docs,source:{originalSource:'props => {\n  return <Shortcut shortcut="Ctrl + S" {...props} />;\n}',...WithAriaLabel.parameters?.docs?.source}}}}}]);