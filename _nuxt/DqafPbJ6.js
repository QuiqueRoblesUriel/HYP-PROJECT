import{_ as m,r as v,c as o,a as e,F as f,n as h,z as P,x as b,s as r,v as n,o as u,t as p,p as w,e as x}from"./CZihCunZ.js";import{u as S}from"./VCCGKuNx.js";import"./BeZEj2xh.js";const d=a=>(w("data-v-8b52c2c5"),a=a(),x(),a),V={class:"people-list"},I=d(()=>e("h1",null,"People List",-1)),N=["src","alt"],U={class:"person-details"},g={class:"add-person"},k=d(()=>e("h2",null,"Add a New Person",-1)),q=d(()=>e("button",{type:"submit",class:"submit-button"},"Add Person",-1)),y={__name:"people",setup(a){const i=S(),c=i.people,t=v({name:"",picture_url:"",cv:""});function _(){i.addPerson({...t.value}),t.value={name:"",picture_url:"",cv:""}}return(B,l)=>(u(),o("div",V,[I,e("ul",null,[(u(!0),o(f,null,h(P(c),s=>(u(),o("li",{key:s.id,class:"person-card"},[e("img",{src:s.picture_url,alt:s.name,width:"100",class:"person-avatar"},null,8,N),e("div",U,[e("h2",null,p(s.name),1),e("p",null,p(s.cv),1)])]))),128))]),e("div",g,[k,e("form",{onSubmit:b(_,["prevent"]),class:"add-person-form"},[r(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>t.value.name=s),placeholder:"Name",required:"",class:"input-field"},null,512),[[n,t.value.name]]),r(e("input",{"onUpdate:modelValue":l[1]||(l[1]=s=>t.value.picture_url=s),placeholder:"Picture URL",required:"",class:"input-field"},null,512),[[n,t.value.picture_url]]),r(e("textarea",{"onUpdate:modelValue":l[2]||(l[2]=s=>t.value.cv=s),placeholder:"CV",required:"",class:"input-field"},null,512),[[n,t.value.cv]]),q],32)])]))}},F=m(y,[["__scopeId","data-v-8b52c2c5"]]);export{F as default};