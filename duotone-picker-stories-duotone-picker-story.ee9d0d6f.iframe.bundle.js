"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[7196],{"./packages/icons/build-module/library/swatch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M5 17.7c.4.5.8.9 1.2 1.2l1.1-1.4c-.4-.3-.7-.6-1-1L5 17.7zM5 6.3l1.4 1.1c.3-.4.6-.7 1-1L6.3 5c-.5.4-.9.8-1.3 1.3zm.1 7.8l-1.7.5c.2.6.4 1.1.7 1.6l1.5-.8c-.2-.4-.4-.8-.5-1.3zM4.8 12v-.7L3 11.1v1.8l1.7-.2c.1-.2.1-.5.1-.7zm3 7.9c.5.3 1.1.5 1.6.7l.5-1.7c-.5-.1-.9-.3-1.3-.5l-.8 1.5zM19 6.3c-.4-.5-.8-.9-1.2-1.2l-1.1 1.4c.4.3.7.6 1 1L19 6.3zm-.1 3.6l1.7-.5c-.2-.6-.4-1.1-.7-1.6l-1.5.8c.2.4.4.8.5 1.3zM5.6 8.6l-1.5-.8c-.3.5-.5 1-.7 1.6l1.7.5c.1-.5.3-.9.5-1.3zm2.2-4.5l.8 1.5c.4-.2.8-.4 1.3-.5l-.5-1.7c-.6.2-1.1.4-1.6.7zm8.8 13.5l1.1 1.4c.5-.4.9-.8 1.2-1.2l-1.4-1.1c-.2.3-.5.6-.9.9zm1.8-2.2l1.5.8c.3-.5.5-1.1.7-1.6l-1.7-.5c-.1.5-.3.9-.5 1.3zm2.6-4.3l-1.7.2v1.4l1.7.2V12v-.9zM11.1 3l.2 1.7h1.4l.2-1.7h-1.8zm3 2.1c.5.1.9.3 1.3.5l.8-1.5c-.5-.3-1.1-.5-1.6-.7l-.5 1.7zM12 19.2h-.7l-.2 1.8h1.8l-.2-1.7c-.2-.1-.5-.1-.7-.1zm2.1-.3l.5 1.7c.6-.2 1.1-.4 1.6-.7l-.8-1.5c-.4.2-.8.4-1.3.5z"}))},"./packages/components/src/color-indicator/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedColorIndicator(props,forwardedRef){const{className,colorValue,...additionalProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("component-color-indicator",className),style:{background:colorValue},ref:forwardedRef,...additionalProps})}UnforwardedColorIndicator.displayName="UnforwardedColorIndicator";const ColorIndicator=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(UnforwardedColorIndicator),__WEBPACK_DEFAULT_EXPORT__=ColorIndicator;try{ColorIndicator.displayName="ColorIndicator",ColorIndicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"ColorIndicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#ColorIndicator"]={docgenInfo:ColorIndicator.__docgenInfo,name:"ColorIndicator",path:"packages/components/src/color-indicator/index.tsx#ColorIndicator"})}catch(__react_docgen_typescript_loader_error){}try{colorindicator.displayName="colorindicator",colorindicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"colorindicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#colorindicator"]={docgenInfo:colorindicator.__docgenInfo,name:"colorindicator",path:"packages/components/src/color-indicator/index.tsx#colorindicator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/duotone-picker/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Aw:()=>getColorsFromColorStops,YK:()=>getColorStopsFromColors,ZU:()=>getGradientFromCSSColors,fy:()=>getDefaultColors});var colord__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/colord/index.mjs"),colord_plugins_names__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/colord/plugins/names.mjs");function getDefaultColors(palette){return!palette||palette.length<2?["#000","#fff"]:palette.map((({color})=>({color,brightness:(0,colord__WEBPACK_IMPORTED_MODULE_0__.Vi)(color).brightness()}))).reduce((([min,max],current)=>[current.brightness<=min.brightness?current:min,current.brightness>=max.brightness?current:max]),[{brightness:1,color:""},{brightness:0,color:""}]).map((({color})=>color))}function getGradientFromCSSColors(colors=[],angle="90deg"){const l=100/colors.length;return`linear-gradient( ${angle}, ${colors.map(((c,i)=>`${c} ${i*l}%, ${c} ${(i+1)*l}%`)).join(", ")} )`}function getColorStopsFromColors(colors){return colors.map(((color,i)=>({position:100*i/(colors.length-1),color})))}function getColorsFromColorStops(colorStops=[]){return colorStops.map((({color})=>color))}(0,colord__WEBPACK_IMPORTED_MODULE_0__.l7)([colord_plugins_names__WEBPACK_IMPORTED_MODULE_1__.Z])},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YF:()=>useFloating,x7:()=>arrow});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}},"./packages/components/src/duotone-picker/stories/duotone-picker.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>duotone_picker_story});var react=__webpack_require__("./node_modules/react/index.js"),es6=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),es6_default=__webpack_require__.n(es6),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),swatch=__webpack_require__("./packages/icons/build-module/library/swatch.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),color_palette=__webpack_require__("./packages/components/src/color-palette/index.tsx"),color_indicator=__webpack_require__("./packages/components/src/color-indicator/index.tsx"),icon=__webpack_require__("./packages/components/src/icon/index.tsx"),component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ColorOption({label,value,colors,disableCustomColors,enableAlpha,onChange}){const[isOpen,setIsOpen]=(0,react.useState)(!1),idRoot=(0,use_instance_id.Z)(ColorOption,"color-list-picker-option"),labelId=`${idRoot}__label`,contentId=`${idRoot}__content`;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-color-list-picker__swatch-button",onClick:()=>setIsOpen((prev=>!prev)),"aria-expanded":isOpen,"aria-controls":contentId,children:(0,jsx_runtime.jsxs)(component.Z,{justify:"flex-start",spacing:2,children:[value?(0,jsx_runtime.jsx)(color_indicator.Z,{colorValue:value,className:"components-color-list-picker__swatch-color"}):(0,jsx_runtime.jsx)(icon.Z,{icon:swatch.Z}),(0,jsx_runtime.jsx)("span",{id:labelId,children:label})]})}),(0,jsx_runtime.jsx)("div",{role:"group",id:contentId,"aria-labelledby":labelId,"aria-hidden":!isOpen,children:isOpen&&(0,jsx_runtime.jsx)(color_palette.ZP,{"aria-label":(0,build_module.__)("Color options"),className:"components-color-list-picker__color-picker",colors,value,clearable:!1,onChange,disableCustomColors,enableAlpha})})]})}function ColorListPicker({colors,labels,value=[],disableCustomColors,enableAlpha,onChange}){return(0,jsx_runtime.jsx)("div",{className:"components-color-list-picker",children:labels.map(((label,index)=>(0,jsx_runtime.jsx)(ColorOption,{label,value:value[index],colors,disableCustomColors,enableAlpha,onChange:newColor=>{const newColors=value.slice();newColors[index]=newColor,onChange(newColors)}},index)))})}ColorListPicker.displayName="ColorListPicker";const color_list_picker=ColorListPicker;try{ColorListPicker.displayName="ColorListPicker",ColorListPicker.__docgenInfo={description:"",displayName:"ColorListPicker",props:{colors:{defaultValue:null,description:"A list of predefined colors. Each color is an object with a `name` and a\n`color` value.\nThe `name` is a string used to identify the color in the UI.\nThe `color` is a valid CSS color string.",name:"colors",required:!0,type:{name:"{ name: string; color: string; }[]"}},labels:{defaultValue:null,description:"A list of labels for each of the options displayed in the UI.",name:"labels",required:!0,type:{name:"string[]"}},value:{defaultValue:{value:"[]"},description:"An array containing the currently selected colors.",name:"value",required:!1,type:{name:"string[]"}},disableCustomColors:{defaultValue:null,description:"Controls whether the custom color picker is displayed.",name:"disableCustomColors",required:!1,type:{name:"boolean"}},enableAlpha:{defaultValue:null,description:"Controls whether the ColorPalette should show an alpha channel control.",name:"enableAlpha",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A function that receives the updated color value.",name:"onChange",required:!0,type:{name:"(newValue: string[]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/duotone-picker/color-list-picker/index.tsx#ColorListPicker"]={docgenInfo:ColorListPicker.__docgenInfo,name:"ColorListPicker",path:"packages/components/src/duotone-picker/color-list-picker/index.tsx#ColorListPicker"})}catch(__react_docgen_typescript_loader_error){}var circular_option_picker=__webpack_require__("./packages/components/src/circular-option-picker/index.tsx"),v_stack_component=__webpack_require__("./packages/components/src/v-stack/component.tsx"),gradient_bar=__webpack_require__("./packages/components/src/custom-gradient-picker/gradient-bar/index.tsx"),utils=__webpack_require__("./packages/components/src/duotone-picker/utils.ts");const PLACEHOLDER_VALUES=["#333","#CCC"];function CustomDuotoneBar({value,onChange}){const hasGradient=!!value,values=hasGradient?value:PLACEHOLDER_VALUES,background=(0,utils.ZU)(values),controlPoints=(0,utils.YK)(values);return(0,jsx_runtime.jsx)(gradient_bar.Z,{disableInserter:!0,background,hasGradient,value:controlPoints,onChange:newColorStops=>{const newValue=(0,utils.Aw)(newColorStops);onChange(newValue)}})}CustomDuotoneBar.displayName="CustomDuotoneBar";try{customduotonebar.displayName="customduotonebar",customduotonebar.__docgenInfo={description:"",displayName:"customduotonebar",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value?: string[]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/duotone-picker/custom-duotone-bar.tsx#customduotonebar"]={docgenInfo:customduotonebar.__docgenInfo,name:"customduotonebar",path:"packages/components/src/duotone-picker/custom-duotone-bar.tsx#customduotonebar"})}catch(__react_docgen_typescript_loader_error){}var spacer_component=__webpack_require__("./packages/components/src/spacer/component.tsx");function DuotonePicker({asButtons,loop,clearable=!0,unsetable=!0,colorPalette,duotonePalette,disableCustomColors,disableCustomDuotone,value,onChange,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,...otherProps}){const[defaultDark,defaultLight]=(0,react.useMemo)((()=>(0,utils.fy)(colorPalette)),[colorPalette]),isUnset="unset"===value,unsetOptionLabel=(0,build_module.__)("Unset"),unsetOption=(0,jsx_runtime.jsx)(circular_option_picker.ZP.Option,{value:"unset",isSelected:isUnset,tooltipText:unsetOptionLabel,"aria-label":unsetOptionLabel,className:"components-duotone-picker__color-indicator",onClick:()=>{onChange(isUnset?void 0:"unset")}},"unset"),duotoneOptions=duotonePalette.map((({colors,slug,name})=>{const style={background:(0,utils.ZU)(colors,"135deg"),color:"transparent"},tooltipText=null!=name?name:(0,build_module.gB)((0,build_module.__)("Duotone code: %s"),slug),label=name?(0,build_module.gB)((0,build_module.__)("Duotone: %s"),name):tooltipText,isSelected=es6_default()(colors,value);return(0,jsx_runtime.jsx)(circular_option_picker.ZP.Option,{value:colors,isSelected,"aria-label":label,tooltipText,style,onClick:()=>{onChange(isSelected?void 0:colors)}},slug)}));let metaProps;if(asButtons)metaProps={asButtons:!0};else{const _metaProps={asButtons:!1,loop};metaProps=ariaLabel?{..._metaProps,"aria-label":ariaLabel}:ariaLabelledby?{..._metaProps,"aria-labelledby":ariaLabelledby}:{..._metaProps,"aria-label":(0,build_module.__)("Custom color picker.")}}const options=unsetable?[unsetOption,...duotoneOptions]:duotoneOptions;return(0,jsx_runtime.jsx)(circular_option_picker.ZP,{...otherProps,...metaProps,options,actions:!!clearable&&(0,jsx_runtime.jsx)(circular_option_picker.ZP.ButtonAction,{onClick:()=>onChange(void 0),children:(0,build_module.__)("Clear")}),children:(0,jsx_runtime.jsx)(spacer_component.Z,{paddingTop:0===options.length?0:4,children:(0,jsx_runtime.jsxs)(v_stack_component.Z,{spacing:3,children:[!disableCustomColors&&!disableCustomDuotone&&(0,jsx_runtime.jsx)(CustomDuotoneBar,{value:isUnset?void 0:value,onChange}),!disableCustomDuotone&&(0,jsx_runtime.jsx)(color_list_picker,{labels:[(0,build_module.__)("Shadows"),(0,build_module.__)("Highlights")],colors:colorPalette,value:isUnset?void 0:value,disableCustomColors,enableAlpha:!0,onChange:newColors=>{newColors[0]||(newColors[0]=defaultDark),newColors[1]||(newColors[1]=defaultLight);const newValue=newColors.length>=2?newColors:void 0;onChange(newValue)}})]})})})}DuotonePicker.displayName="DuotonePicker";const duotone_picker=DuotonePicker;try{DuotonePicker.displayName="DuotonePicker",DuotonePicker.__docgenInfo={description:"```jsx\nimport { DuotonePicker, DuotoneSwatch } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst DUOTONE_PALETTE = [\n\t{ colors: [ '#8c00b7', '#fcff41' ], name: 'Purple and yellow', slug: 'purple-yellow' },\n\t{ colors: [ '#000097', '#ff4747' ], name: 'Blue and red', slug: 'blue-red' },\n];\n\nconst COLOR_PALETTE = [\n\t{ color: '#ff4747', name: 'Red', slug: 'red' },\n\t{ color: '#fcff41', name: 'Yellow', slug: 'yellow' },\n\t{ color: '#000097', name: 'Blue', slug: 'blue' },\n\t{ color: '#8c00b7', name: 'Purple', slug: 'purple' },\n];\n\nconst Example = () => {\n\tconst [ duotone, setDuotone ] = useState( [ '#000000', '#ffffff' ] );\n\treturn (\n\t\t<>\n\t\t\t<DuotonePicker\n\t\t\t\tduotonePalette={ DUOTONE_PALETTE }\n\t\t\t\tcolorPalette={ COLOR_PALETTE }\n\t\t\t\tvalue={ duotone }\n\t\t\t\tonChange={ setDuotone }\n\t\t\t/>\n\t\t\t<DuotoneSwatch values={ duotone } />\n\t\t</>\n\t);\n};\n```",displayName:"DuotonePicker",props:{clearable:{defaultValue:{value:"true"},description:"Whether there should be a button to clear the duotone value.",name:"clearable",required:!1,type:{name:"boolean"}},unsetable:{defaultValue:{value:"true"},description:"Whether there should be an `unset` option.",name:"unsetable",required:!1,type:{name:"boolean"}},colorPalette:{defaultValue:null,description:"Array of color presets of the form `{ color: '#000000', name: 'Black', slug: 'black' }`.",name:"colorPalette",required:!0,type:{name:"Color[]"}},duotonePalette:{defaultValue:null,description:"Array of duotone presets of the form `{ colors: [ '#000000', '#ffffff' ], name: 'Grayscale', slug: 'grayscale' }`.",name:"duotonePalette",required:!0,type:{name:"DuotoneColor[]"}},disableCustomColors:{defaultValue:{value:"false"},description:"Whether custom colors should be disabled.",name:"disableCustomColors",required:!1,type:{name:"boolean"}},disableCustomDuotone:{defaultValue:{value:"false"},description:"Whether custom duotone values should be disabled.",name:"disableCustomDuotone",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"An array of colors for the duotone effect.",name:"value",required:!1,type:{name:'string[] | "unset"'}},onChange:{defaultValue:null,description:"Callback which is called when the duotone colors change.",name:"onChange",required:!0,type:{name:'(value: string[] | "unset") => void'}},asButtons:{defaultValue:{value:"false"},description:"Whether the control should present as a set of buttons,\neach with its own tab stop.",name:"asButtons",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"true"},description:"Prevents keyboard interaction from wrapping around.\nOnly used when `asButtons` is not true.",name:"loop",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"A label to identify the purpose of the control.\n@todo [#54055] Either this or `aria-labelledby` should be required",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An ID of an element to provide a label for the control.\n@todo [#54055] Either this or `aria-label` should be required",name:"aria-labelledby",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/duotone-picker/duotone-picker.tsx#DuotonePicker"]={docgenInfo:DuotonePicker.__docgenInfo,name:"DuotonePicker",path:"packages/components/src/duotone-picker/duotone-picker.tsx#DuotonePicker"})}catch(__react_docgen_typescript_loader_error){}const duotone_picker_story={title:"Components/DuotonePicker",component:duotone_picker,argTypes:{onChange:{action:"onChange"},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/duotone-picker",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=({onChange,...args})=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(duotone_picker,{...args,onChange:(...changeArgs)=>{setValue(...changeArgs),onChange(...changeArgs)},value})};Template.displayName="Template";const Default=Template.bind({});Default.args={colorPalette:[{color:"#ff4747",name:"Red",slug:"red"},{color:"#fcff41",name:"Yellow",slug:"yellow"},{color:"#000097",name:"Blue",slug:"blue"},{color:"#8c00b7",name:"Purple",slug:"purple"}],duotonePalette:[{colors:["#8c00b7","#fcff41"],name:"Purple and yellow",slug:"purple-yellow"},{colors:["#000097","#ff4747"],name:"Blue and red",slug:"blue-red"}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<DuotonePickerProps['value']>();\n  return <DuotonePicker {...args} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange(...changeArgs);\n  }} value={value} />;\n}",...Default.parameters?.docs?.source}}}}}]);