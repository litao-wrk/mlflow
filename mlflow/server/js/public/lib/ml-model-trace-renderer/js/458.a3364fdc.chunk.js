"use strict";(self.webpackChunkdatabricks_mlModelTraceRenderer=self.webpackChunkdatabricks_mlModelTraceRenderer||[]).push([[458],{67458:(e,r,n)=>{n.r(r),n.d(r,{ModelTraceRendererTelemetryContextProvider:()=>l,default:()=>p});var t=n(25656),o=n(65848),a=n(22087),d=n(3434),s=n(39910),i=n(98358);const c=e=>{let{error:r}=e;return(0,i.Y)(d.Empty,{description:r instanceof Error?r.message:"An unexpected error has occurred. Please wait a bit and refresh the page or contact support.",title:"Error",image:(0,i.Y)(s.y,{})})},l=e=>{let{children:r}=e;return(0,o.useEffect)((()=>{const e=e=>{const r=e instanceof PromiseRejectionEvent,n=r?e.reason:e.error;!n||null!=n&&n._isErrorHandled||((0,t.isObjectLike)(n)&&(n._isErrorHandled=!0),window.parent.postMessage({type:"LOG_ERROR",error:n,isPromiseRejection:r}))};return window.addEventListener("error",e),window.addEventListener("unhandledrejection",e),()=>{window.removeEventListener("error",e),window.removeEventListener("unhandledrejection",e)}}),[]),(0,i.Y)(s.P,{callback:e=>{var r;window.parent.postMessage({type:"LOG_EVENT",payload:{eventType:e.eventType,componentType:e.componentType,componentId:e.componentId,value:e.value,shouldStartInteraction:e.shouldStartInteraction,eventDefaultPrevented:null===(r=e.event)||void 0===r?void 0:r.defaultPrevented}})},children:(0,i.Y)(a.tH,{onError:e=>{window.parent.postMessage({type:"LOG_ERROR",error:e})},fallbackRender:c,children:r})})},p=l}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/ml-model-trace-renderer/js/458.a3364fdc.chunk.js.map