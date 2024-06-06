import{_ as c,c as r,a as s,s as i,v as n,u as m,x as u,y as p,o as f,p as v,e as _}from"./CZihCunZ.js";const h={name:"ContactPage",data(){return{name:"",surname:"",email:"",interest:[],message:""}},methods:{submitForm(){console.log("Form submitted with data:",{name:this.name,surname:this.surname,email:this.email,interest:this.interest,message:this.message})}}},a=l=>(v("data-v-df22a057"),l=l(),_(),l),b={class:"container"},g=a(()=>s("h1",{class:"title"},"CONTACT US",-1)),w=a(()=>s("p",{class:"subtitle"},"If you have any questions, please fill out the form below and we will get in touch with you shortly. You can also call us or even come visit us.",-1)),S=a(()=>s("p",{class:"subtitle"},"We look forward to seeing you soon!",-1)),y=a(()=>s("p",{class:"message-title"},"Send us a message:",-1)),x={class:"form-group"},V=a(()=>s("label",{for:"name"},"Name:",-1)),k={class:"form-group"},U=a(()=>s("label",{for:"surname"},"Surname:",-1)),q={class:"form-group"},F=a(()=>s("label",{for:"email"},"Email:",-1)),I={class:"form-group"},C=a(()=>s("label",{for:"interest"},"You need more information about:",-1)),M=a(()=>s("option",{value:"Projects"},"Projects",-1)),N=a(()=>s("option",{value:"Services"},"Services",-1)),A=a(()=>s("option",{value:"Activities"},"Activities",-1)),B=[M,N,A],E={class:"form-group"},P=a(()=>s("label",{for:"message"},"Message:",-1)),T=a(()=>s("button",{type:"submit",class:"btn btn-primary"},"Submit",-1)),j=p('<div class="separator" data-v-df22a057></div><div class="contact-info" data-v-df22a057><div class="contact-info-item" data-v-df22a057><p class="contact-label" data-v-df22a057><span class="icon" data-v-df22a057>📞</span> Call us: </p><p class="contact-detail" data-v-df22a057>+39 691718090</p></div><div class="contact-info-item" data-v-df22a057><p class="contact-label" data-v-df22a057><span class="icon" data-v-df22a057>✉️</span> Email: </p><p class="contact-detail" data-v-df22a057><a href="mailto:anti_violence@gmail.com" data-v-df22a057>anti_violence@gmail.com</a></p></div></div><div class="follow-us" data-v-df22a057><p class="follow-label" data-v-df22a057>Follow us:</p><div class="social-icons" data-v-df22a057><a href="#" target="_blank" class="social-icon" data-v-df22a057><span class="icon" data-v-df22a057>🌐</span></a><a href="#" target="_blank" class="social-icon" data-v-df22a057><span class="icon" data-v-df22a057>🐦</span></a><a href="#" target="_blank" class="social-icon" data-v-df22a057><span class="icon" data-v-df22a057>▶️</span></a></div></div>',3);function Y(l,e,D,O,o,d){return f(),r("div",b,[g,w,S,y,s("form",{onSubmit:e[5]||(e[5]=u((...t)=>d.submitForm&&d.submitForm(...t),["prevent"]))},[s("div",x,[V,i(s("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>o.name=t),class:"form-control",required:""},null,512),[[n,o.name]])]),s("div",k,[U,i(s("input",{type:"text",id:"surname","onUpdate:modelValue":e[1]||(e[1]=t=>o.surname=t),class:"form-control",required:""},null,512),[[n,o.surname]])]),s("div",q,[F,i(s("input",{type:"email",id:"email","onUpdate:modelValue":e[2]||(e[2]=t=>o.email=t),class:"form-control",required:""},null,512),[[n,o.email]])]),s("div",I,[C,i(s("select",{id:"interest","onUpdate:modelValue":e[3]||(e[3]=t=>o.interest=t),class:"form-control",multiple:""},B,512),[[m,o.interest]])]),s("div",E,[P,i(s("textarea",{id:"message","onUpdate:modelValue":e[4]||(e[4]=t=>o.message=t),class:"form-control",rows:"5",required:""},null,512),[[n,o.message]])]),T],32),j])}const z=c(h,[["render",Y],["__scopeId","data-v-df22a057"]]);export{z as default};