"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8768],{"./packages/components/src/external-link/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedExternalLink(props,ref){const{href,children,className,rel="",...additionalProps}=props,optimizedRel=[...new Set([...rel.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),classes=(0,clsx.Z)("components-external-link",className),isInternalAnchor=!!href?.startsWith("#");return(0,jsx_runtime.jsxs)("a",{...additionalProps,className:classes,href,onClick:event=>{isInternalAnchor&&event.preventDefault(),props.onClick&&props.onClick(event)},target:"_blank",rel:optimizedRel,ref,children:[(0,jsx_runtime.jsx)("span",{className:"components-external-link__contents",children}),(0,jsx_runtime.jsx)("span",{className:"components-external-link__icon","aria-label":(0,build_module.__)("(opens in a new tab)"),children:"↗"})]})}UnforwardedExternalLink.displayName="UnforwardedExternalLink";const ExternalLink=(0,react.forwardRef)(UnforwardedExternalLink),external_link=ExternalLink;try{ExternalLink.displayName="ExternalLink",ExternalLink.__docgenInfo={description:"Link to an external resource.\n\n```jsx\nimport { ExternalLink } from '@wordpress/components';\n\nconst MyExternalLink = () => (\n  <ExternalLink href=\"https://wordpress.org\">WordPress.org</ExternalLink>\n);\n```",displayName:"ExternalLink",props:{children:{defaultValue:null,description:"The content to be displayed within the link.",name:"children",required:!0,type:{name:"ReactNode"}},href:{defaultValue:null,description:"The URL of the external resource.",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/external-link/index.tsx#ExternalLink"]={docgenInfo:ExternalLink.__docgenInfo,name:"ExternalLink",path:"packages/components/src/external-link/index.tsx#ExternalLink"})}catch(__react_docgen_typescript_loader_error){}try{externallink.displayName="externallink",externallink.__docgenInfo={description:"Link to an external resource.\n\n```jsx\nimport { ExternalLink } from '@wordpress/components';\n\nconst MyExternalLink = () => (\n  <ExternalLink href=\"https://wordpress.org\">WordPress.org</ExternalLink>\n);\n```",displayName:"externallink",props:{children:{defaultValue:null,description:"The content to be displayed within the link.",name:"children",required:!0,type:{name:"ReactNode"}},href:{defaultValue:null,description:"The URL of the external resource.",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/external-link/index.tsx#externallink"]={docgenInfo:externallink.__docgenInfo,name:"externallink",path:"packages/components/src/external-link/index.tsx#externallink"})}catch(__react_docgen_typescript_loader_error){}const index_story={component:external_link,title:"Components/ExternalLink",argTypes:{children:{control:{type:"text"}}},parameters:{sourceLink:"packages/components/src/external-link",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=({...args})=>(0,jsx_runtime.jsx)(external_link,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={children:"WordPress",href:"https://wordpress.org"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  return <ExternalLink {...args} />;\n}",...Default.parameters?.docs?.source}}}}}]);