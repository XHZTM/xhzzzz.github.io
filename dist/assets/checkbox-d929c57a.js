import{u as k,b as V,l as S}from"./index-a33061b4.js";import{B as C,q as I,ag as p,x as L,y as z,J as B,P as E,K as n,Q as d,F as _,R as T,L as b,V as m,S as y,a9 as j,aa as A,U as O}from"./main-84acb2a7.js";const F={name:"RenderCheckbox",props:{itemData:{type:Object,default:()=>({id:"--"})},itemIdToLogicData:{type:Object||void 0,default:()=>{}}},components:{},setup(i){const{isSelect:D,style:t,customStyle:o}=k(i),u=V(),e=C([]),r=I("handleTriggerEvent"),c=p(()=>{const a=i.itemData.attribute,{options:l}=a;return l===void 0?[]:l.isUseVariable&&u.editerData.variable[l.value]?u.editerData.variable[l.value].value:!l.isUseVariable&&Array.isArray(l)?l:[]});L(()=>e.value,()=>{x()},{deep:!0}),(()=>{const a=i.itemData.attribute,{value:l,bindVariable:s}=a;s&&u.editerData.variable[s]?e.value=u.editerData.variable[s].value:e.value=i.itemData.attribute.value,Array.isArray(e.value)||(e.value=[])})();const v=[],f=()=>{i.itemIdToLogicData&&Object.values(i.itemIdToLogicData).forEach(a=>{a.type===S.checkboxValueChange&&v.push(a.id)})},x=()=>{const a=i.itemData.attribute,{value:l,bindVariable:s}=a;s&&u.editerData.variable[s]?u.editerData.variable[s].value=e.value:i.itemData.attribute.value=e.value,v.length>0&&r(v,{value:e.value})},g=a=>{e.value.includes(a.value)?e.value.splice(e.value.indexOf(a.value),1):e.value.push(a.value)};return z(()=>{f()}),{editerStore:u,isSelect:D,style:t,customStyle:o,inputValue:e,options:c,selectValue:g}}};const N=["id"],U=["onClick"];function w(i,D,t,o,u,e){const r=E("my-icon");return n(),d("div",{id:t.itemData.id,class:O([{itemSelect:o.isSelect,horizontal:t.itemData.attribute.direction==="horizontal",disabled:t.itemData.attribute.disabled},"radio-box"]),style:m([o.style,o.customStyle])},[(n(!0),d(_,null,T(o.options,(c,h)=>(n(),d("div",{class:"radio-item",key:h,onClick:v=>o.selectValue(c)},[o.inputValue.includes(c.value)?(n(),d(_,{key:0},[t.itemData.attribute.shape==="round"?(n(),b(r,{key:0,type:"icon-danxuan_xuanzhong",style:m({color:t.itemData.attribute.selectedColor})},null,8,["style"])):y("",!0),t.itemData.attribute.shape==="rect"?(n(),b(r,{key:1,type:"icon-duoxuan-yixuan",style:m({color:t.itemData.attribute.selectedColor})},null,8,["style"])):y("",!0)],64)):(n(),d(_,{key:1},[t.itemData.attribute.shape==="round"?(n(),b(r,{key:0,type:"icon-danxuan1"})):y("",!0),t.itemData.attribute.shape==="rect"?(n(),b(r,{key:1,type:"icon-duoxuanweixuan"})):y("",!0)],64)),j("span",{class:"text",style:m({top:`-${Number(parseFloat(t.itemData.styles.fontSize))/6}px`})},A(c.text),5)],8,U))),128))],14,N)}const J=B(F,[["render",w],["__scopeId","data-v-73a1595a"]]);export{J as default};
