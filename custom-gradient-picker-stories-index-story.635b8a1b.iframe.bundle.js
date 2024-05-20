(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[5175],{"./packages/components/src/custom-gradient-picker/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C6:()=>GRADIENT_OPTIONS,KE:()=>DEFAULT_LINEAR_GRADIENT_ANGLE,Pg:()=>HORIZONTAL_GRADIENT_ORIENTATION,dk:()=>DIRECTIONAL_ORIENTATION_ANGLE_MAP,ob:()=>DEFAULT_GRADIENT});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const DEFAULT_GRADIENT="linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)",DEFAULT_LINEAR_GRADIENT_ANGLE=180,HORIZONTAL_GRADIENT_ORIENTATION={type:"angular",value:"90"},GRADIENT_OPTIONS=[{value:"linear-gradient",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Linear")},{value:"radial-gradient",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial")}],DIRECTIONAL_ORIENTATION_ANGLE_MAP={top:0,"top right":45,"right top":45,right:90,"right bottom":135,"bottom right":135,bottom:180,"bottom left":225,"left bottom":225,left:270,"top left":315,"left top":315}},"./packages/components/src/custom-gradient-picker/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>custom_gradient_picker});__webpack_require__("./node_modules/react/index.js");var build_module=__webpack_require__("./packages/i18n/build-module/index.js"),angle_picker_control=__webpack_require__("./packages/components/src/angle-picker-control/index.tsx"),gradient_bar=__webpack_require__("./packages/components/src/custom-gradient-picker/gradient-bar/index.tsx"),component=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),select_control=__webpack_require__("./packages/components/src/select-control/index.tsx"),v_stack_component=__webpack_require__("./packages/components/src/v-stack/component.tsx"),node=__webpack_require__("./node_modules/gradient-parser/build/node.js"),colord=__webpack_require__("./node_modules/colord/index.mjs"),names=__webpack_require__("./node_modules/colord/plugins/names.mjs"),constants=__webpack_require__("./packages/components/src/custom-gradient-picker/constants.ts");function serializeGradientColorStop({type,value,length}){return`${function serializeGradientColor({type,value}){return"literal"===type?value:"hex"===type?`#${value}`:`${type}(${value.join(",")})`}({type,value})} ${function serializeGradientPosition(position){if(!position)return"";const{value,type}=position;return`${value}${type}`}(length)}`}function serializeGradient({type,orientation,colorStops}){const serializedOrientation=function serializeGradientOrientation(orientation){if(!Array.isArray(orientation)&&orientation&&"angular"===orientation.type)return`${orientation.value}deg`}(orientation);return`${type}(${[serializedOrientation,...colorStops.sort(((colorStop1,colorStop2)=>{const getNumericStopValue=colorStop=>void 0===colorStop?.length?.value?0:parseInt(colorStop.length.value);return getNumericStopValue(colorStop1)-getNumericStopValue(colorStop2)})).map(serializeGradientColorStop)].filter(Boolean).join(",")})`}function hasUnsupportedLength(item){return void 0===item.length||"%"!==item.length.type}function getStopCssColor(colorStop){switch(colorStop.type){case"hex":return`#${colorStop.value}`;case"literal":return colorStop.value;case"rgb":case"rgba":return`${colorStop.type}(${colorStop.value.join(",")})`;default:return"transparent"}}(0,colord.l7)([names.Z]);var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),flex_block_component=__webpack_require__("./packages/components/src/flex/flex-block/component.tsx");const SelectWrapper=(0,emotion_styled_base_browser_esm.Z)(flex_block_component.Z,{target:"e10bzpgi1"})({name:"1gvx10y",styles:"flex-grow:5"}),AccessoryWrapper=(0,emotion_styled_base_browser_esm.Z)(flex_block_component.Z,{target:"e10bzpgi0"})({name:"1gvx10y",styles:"flex-grow:5"});try{SelectWrapper.displayName="SelectWrapper",SelectWrapper.__docgenInfo={description:"",displayName:"SelectWrapper",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#SelectWrapper"]={docgenInfo:SelectWrapper.__docgenInfo,name:"SelectWrapper",path:"packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#SelectWrapper"})}catch(__react_docgen_typescript_loader_error){}try{AccessoryWrapper.displayName="AccessoryWrapper",AccessoryWrapper.__docgenInfo={description:"",displayName:"AccessoryWrapper",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#AccessoryWrapper"]={docgenInfo:AccessoryWrapper.__docgenInfo,name:"AccessoryWrapper",path:"packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#AccessoryWrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GradientAnglePicker=({gradientAST,hasGradient,onChange})=>{var _gradientAST$orientat;const angle=null!==(_gradientAST$orientat=gradientAST?.orientation?.value)&&void 0!==_gradientAST$orientat?_gradientAST$orientat:constants.KE;return(0,jsx_runtime.jsx)(angle_picker_control.Z,{onChange:newAngle=>{onChange(serializeGradient({...gradientAST,orientation:{type:"angular",value:`${newAngle}`}}))},value:hasGradient?angle:""})};GradientAnglePicker.displayName="GradientAnglePicker";const GradientTypePicker=({gradientAST,hasGradient,onChange})=>{const{type}=gradientAST;return(0,jsx_runtime.jsx)(select_control.Z,{__nextHasNoMarginBottom:!0,className:"components-custom-gradient-picker__type-picker",label:(0,build_module.__)("Type"),labelPosition:"top",onChange:next=>{"linear-gradient"===next&&onChange(serializeGradient({...gradientAST,orientation:gradientAST.orientation?void 0:constants.Pg,type:"linear-gradient"})),"radial-gradient"===next&&(()=>{const{orientation,...restGradientAST}=gradientAST;onChange(serializeGradient({...restGradientAST,type:"radial-gradient"}))})()},options:constants.C6,size:"__unstable-large",value:hasGradient?type:void 0})};function CustomGradientPicker({value,onChange,__experimentalIsRenderedInSidebar=!1}){const{gradientAST,hasGradient}=function getGradientAstWithDefault(value){let gradientAST,hasGradient=!!value;const valueToParse=null!=value?value:constants.ob;try{gradientAST=node.parse(valueToParse)[0]}catch(error){console.warn("wp.components.CustomGradientPicker failed to parse the gradient with error",error),gradientAST=node.parse(constants.ob)[0],hasGradient=!1}if(Array.isArray(gradientAST.orientation)||"directional"!==gradientAST.orientation?.type||(gradientAST.orientation={type:"angular",value:constants.dk[gradientAST.orientation.value].toString()}),gradientAST.colorStops.some(hasUnsupportedLength)){const{colorStops}=gradientAST,step=100/(colorStops.length-1);colorStops.forEach(((stop,index)=>{stop.length={value:""+step*index,type:"%"}}))}return{gradientAST,hasGradient}}(value),background=function getLinearGradientRepresentation(gradientAST){return serializeGradient({type:"linear-gradient",orientation:constants.Pg,colorStops:gradientAST.colorStops})}(gradientAST),controlPoints=gradientAST.colorStops.map((colorStop=>({color:getStopCssColor(colorStop),position:parseInt(colorStop.length.value)})));return(0,jsx_runtime.jsxs)(v_stack_component.Z,{spacing:4,className:"components-custom-gradient-picker",children:[(0,jsx_runtime.jsx)(gradient_bar.Z,{__experimentalIsRenderedInSidebar,background,hasGradient,value:controlPoints,onChange:newControlPoints=>{onChange(serializeGradient(function getGradientAstWithControlPoints(gradientAST,newControlPoints){return{...gradientAST,colorStops:newControlPoints.map((({position,color})=>{const{r,g,b,a}=(0,colord.Vi)(color).toRgb();return{length:{type:"%",value:position?.toString()},type:a<1?"rgba":"rgb",value:a<1?[`${r}`,`${g}`,`${b}`,`${a}`]:[`${r}`,`${g}`,`${b}`]}}))}}(gradientAST,newControlPoints)))}}),(0,jsx_runtime.jsxs)(component.Z,{gap:3,className:"components-custom-gradient-picker__ui-line",children:[(0,jsx_runtime.jsx)(SelectWrapper,{children:(0,jsx_runtime.jsx)(GradientTypePicker,{gradientAST,hasGradient,onChange})}),(0,jsx_runtime.jsx)(AccessoryWrapper,{children:"linear-gradient"===gradientAST.type&&(0,jsx_runtime.jsx)(GradientAnglePicker,{gradientAST,hasGradient,onChange})})]})]})}GradientTypePicker.displayName="GradientTypePicker",CustomGradientPicker.displayName="CustomGradientPicker";const custom_gradient_picker=CustomGradientPicker;try{CustomGradientPicker.displayName="CustomGradientPicker",CustomGradientPicker.__docgenInfo={description:"CustomGradientPicker is a React component that renders a UI for specifying\nlinear or radial gradients. Radial gradients are displayed in the picker as\na slice of the gradient from the center to the outside.\n\n```jsx\nimport { CustomGradientPicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyCustomGradientPicker = () => {\n  const [ gradient, setGradient ] = useState();\n\n  return (\n    <CustomGradientPicker\n\t\tvalue={ gradient }\n\t\tonChange={ setGradient }\n    />\n  );\n};\n```",displayName:"CustomGradientPicker",props:{__nextHasNoMargin:{defaultValue:{value:"false"},description:"Start opting in to the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)\n@deprecated Default behavior since WP 6.5. Prop can be safely removed.\n@ignore",name:"__nextHasNoMargin",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'"},description:"The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function called when a new gradient has been defined. It is passed to\nthe `currentGradient` as an argument.",name:"onChange",required:!0,type:{name:"(currentGradient: string) => void"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/index.tsx#CustomGradientPicker"]={docgenInfo:CustomGradientPicker.__docgenInfo,name:"CustomGradientPicker",path:"packages/components/src/custom-gradient-picker/index.tsx#CustomGradientPicker"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/gradient-parser/build/node.js":(__unused_webpack_module,exports)=>{var GradientParser={};GradientParser.parse=function(){var tokens={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},input="";function error(msg){var err=new Error(input+": "+msg);throw err.source=input,err}function getAST(){var ast=function matchListDefinitions(){return matchListing(matchDefinition)}();return input.length>0&&error("Invalid input not EOF"),ast}function matchDefinition(){return matchGradient("linear-gradient",tokens.linearGradient,matchLinearOrientation)||matchGradient("repeating-linear-gradient",tokens.repeatingLinearGradient,matchLinearOrientation)||matchGradient("radial-gradient",tokens.radialGradient,matchListRadialOrientations)||matchGradient("repeating-radial-gradient",tokens.repeatingRadialGradient,matchListRadialOrientations)}function matchGradient(gradientType,pattern,orientationMatcher){return matchCall(pattern,(function(captures){var orientation=orientationMatcher();return orientation&&(scan(tokens.comma)||error("Missing comma before color stops")),{type:gradientType,orientation,colorStops:matchListing(matchColorStop)}}))}function matchCall(pattern,callback){var captures=scan(pattern);if(captures)return scan(tokens.startCall)||error("Missing ("),result=callback(captures),scan(tokens.endCall)||error("Missing )"),result}function matchLinearOrientation(){return function matchSideOrCorner(){return match("directional",tokens.sideOrCorner,1)}()||function matchAngle(){return match("angular",tokens.angleValue,1)}()}function matchListRadialOrientations(){var radialOrientations,lookaheadCache,radialOrientation=matchRadialOrientation();return radialOrientation&&((radialOrientations=[]).push(radialOrientation),lookaheadCache=input,scan(tokens.comma)&&((radialOrientation=matchRadialOrientation())?radialOrientations.push(radialOrientation):input=lookaheadCache)),radialOrientations}function matchRadialOrientation(){var radialType=function matchCircle(){var circle=match("shape",/^(circle)/i,0);circle&&(circle.style=matchLength()||matchExtentKeyword());return circle}()||function matchEllipse(){var ellipse=match("shape",/^(ellipse)/i,0);ellipse&&(ellipse.style=matchDistance()||matchExtentKeyword());return ellipse}();if(radialType)radialType.at=function matchAtPosition(){if(match("position",/^at/,0)){var positioning=matchPositioning();return positioning||error("Missing positioning value"),positioning}}();else{var defaultPosition=matchPositioning();defaultPosition&&(radialType={type:"default-radial",at:defaultPosition})}return radialType}function matchExtentKeyword(){return match("extent-keyword",tokens.extentKeywords,1)}function matchPositioning(){var location=function matchCoordinates(){return{x:matchDistance(),y:matchDistance()}}();if(location.x||location.y)return{type:"position",value:location}}function matchListing(matcher){var captures=matcher(),result=[];if(captures)for(result.push(captures);scan(tokens.comma);)(captures=matcher())?result.push(captures):error("One extra comma");return result}function matchColorStop(){var color=function matchColor(){return function matchHexColor(){return match("hex",tokens.hexColor,1)}()||function matchRGBAColor(){return matchCall(tokens.rgbaColor,(function(){return{type:"rgba",value:matchListing(matchNumber)}}))}()||function matchRGBColor(){return matchCall(tokens.rgbColor,(function(){return{type:"rgb",value:matchListing(matchNumber)}}))}()||function matchLiteralColor(){return match("literal",tokens.literalColor,0)}()}();return color||error("Expected color definition"),color.length=matchDistance(),color}function matchNumber(){return scan(tokens.number)[1]}function matchDistance(){return match("%",tokens.percentageValue,1)||function matchPositionKeyword(){return match("position-keyword",tokens.positionKeywords,1)}()||matchLength()}function matchLength(){return match("px",tokens.pixelValue,1)||match("em",tokens.emValue,1)}function match(type,pattern,captureIndex){var captures=scan(pattern);if(captures)return{type,value:captures[captureIndex]}}function scan(regexp){var captures,blankCaptures;return(blankCaptures=/^[\n\r\t\s]+/.exec(input))&&consume(blankCaptures[0].length),(captures=regexp.exec(input))&&consume(captures[0].length),captures}function consume(size){input=input.substr(size)}return function(code){return input=code.toString(),getAST()}}(),exports.parse=(GradientParser||{}).parse},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{YF:()=>useFloating,x7:()=>arrow});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}},"./packages/components/src/custom-gradient-picker/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/custom-gradient-picker/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CustomGradientPicker",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{sourceLink:"packages/components/src/custom-gradient-picker",badges:[],actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},CustomGradientPickerWithState=({onChange,...props})=>{const[gradient,setGradient]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,value:gradient,onChange:newGradient=>{setGradient(newGradient),onChange(newGradient)}})};CustomGradientPickerWithState.displayName="CustomGradientPickerWithState";const Default=CustomGradientPickerWithState.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<string>();\n  return <CustomGradientPicker {...props} value={gradient} onChange={newGradient => {\n    setGradient(newGradient);\n    onChange(newGradient);\n  }} />;\n}",...Default.parameters?.docs?.source}}}}}]);