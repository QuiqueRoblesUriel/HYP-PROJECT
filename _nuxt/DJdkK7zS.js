import{_ as u,o as t,c as s,a as o,p as h,e as m,d as q,t as l,F as v,n as g,C as N,b as p,G as B}from"./CZihCunZ.js";const F=""+new URL("video1.CapeYd86.mp4",import.meta.url).href,Y={methods:{scrollToNextSection(){document.querySelector(".first-section").scrollIntoView({behavior:"smooth"})}}},f=e=>(h("data-v-f475e066"),e=e(),m(),e),j={class:"hero-banner"},R=f(()=>o("div",{class:"video-overlay"},null,-1)),V=f(()=>o("video",{autoplay:"",muted:"",loop:"",class:"hero-video"},[o("source",{src:F,type:"video/mp4"}),q(" Your browser does not support the video tag. ")],-1)),W={class:"container"},E=f(()=>o("h1",null,"Welcome to Our Support Center",-1)),G=f(()=>o("p",null,"Providing assistance and resources for women in need.",-1));function H(e,i,r,_,n,a){return t(),s("div",j,[R,V,o("div",W,[E,G,o("button",{class:"scroll-down-btn",onClick:i[0]||(i[0]=(...c)=>a.scrollToNextSection&&a.scrollToNextSection(...c))},"Scroll Down")])])}const x=u(Y,[["render",H],["__scopeId","data-v-f475e066"]]),L={name:"CallToAction"},$=e=>(h("data-v-b14be621"),e=e(),m(),e),O={class:"call-to-action"},P=$(()=>o("h2",null,"Seek Support Now",-1)),Q=$(()=>o("p",null,"If you or someone you know needs help, don't hesitate to reach out.",-1)),z=$(()=>o("button",null,"Contact Us",-1)),D=[P,Q,z];function U(e,i,r,_,n,a){return t(),s("div",O,D)}const S=u(L,[["render",U],["__scopeId","data-v-b14be621"]]),J={props:{resource:{type:Object,required:!0}}},K={class:"resource-card"},M=["src"],X={class:"resource-details"};function Z(e,i,r,_,n,a){return t(),s("div",K,[o("img",{src:r.resource.image,alt:"Resource Image",class:"resource-image"},null,8,M),o("div",X,[o("h3",null,l(r.resource.title),1),o("p",null,l(r.resource.description),1)])])}const y=u(J,[["render",Z],["__scopeId","data-v-8259089c"]]),ee={name:"Testimonials",data(){return{testimonials:[{text:"Thank you for your support. You've changed my life.",author:"Emily"},{text:"I felt safe and heard. Your team is amazing.",author:"Jessica"},{text:"I didn't know where to turn until I found you. Forever grateful.",author:"Sarah"}]}}},oe=e=>(h("data-v-ebeb86d2"),e=e(),m(),e),te={class:"testimonials"},se=oe(()=>o("h2",null,"What Our Clients Say",-1)),ne={class:"author"};function ce(e,i,r,_,n,a){return t(),s("div",te,[se,(t(!0),s(v,null,g(n.testimonials,(c,d)=>(t(),s("div",{key:d,class:"testimonial"},[o("p",null,l(c.text),1),o("p",ne,"- "+l(c.author),1)]))),128))])}const I=u(ee,[["render",ce],["__scopeId","data-v-ebeb86d2"]]),re={name:"FAQAccordion",data(){return{activeIndex:null,faqs:[{question:"How can I get help?",answer:"You can contact our helpline or visit our center for support."},{question:"Is the support confidential?",answer:"Yes, we prioritize confidentiality and your safety."},{question:"What services do you offer?",answer:"We offer counseling, legal assistance, emergency shelter, and more."}]}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e}}},ae={class:"faq-accordion"},ie=["onClick"],de={key:0,class:"accordion-content"};function le(e,i,r,_,n,a){return t(),s("div",ae,[(t(!0),s(v,null,g(n.faqs,(c,d)=>(t(),s("div",{key:d,class:"accordion-item"},[o("button",{onClick:w=>a.toggleAccordion(d),class:"accordion-button"},l(c.question),9,ie),n.activeIndex===d?(t(),s("div",de,l(c.answer),1)):N("",!0)]))),128))])}const b=u(re,[["render",le],["__scopeId","data-v-8f41ada8"]]),ue={name:"SupportPage",components:{HeroBanner:x,CallToAction:S,ResourceCard:y,Testimonials:I,FAQAccordion:b},data(){return{resources:[{title:"Counseling Services",description:"Professional counseling sessions to help women process their experiences and develop coping strategies.",image:"/images/counseling.jpg"},{title:"Legal Assistance",description:"Guidance and support for women navigating the legal system, including assistance with restraining orders and divorce proceedings.",image:"/images/legal.jpg"},{title:"Emergency Shelter",description:"Safe and secure shelter for women and their children who need immediate protection from violence.",image:"/images/shelter.jpg"},{title:"Support Groups",description:"Spaces for women to share experiences and receive emotional support from others who have faced similar challenges.",image:"/images/support.jpg"}]}}},_e=e=>(h("data-v-e66786a0"),e=e(),m(),e),pe={class:"support-page"},he={class:"container"},me=_e(()=>o("h2",null,"Resources for Women",-1)),fe={class:"resource-cards"};function ve(e,i,r,_,n,a){const c=x,d=S,w=y,C=I,k=b;return t(),s("div",pe,[p(c),p(d),o("div",he,[me,o("div",fe,[(t(!0),s(v,null,g(n.resources,(A,T)=>(t(),B(w,{key:T,resource:A},null,8,["resource"]))),128))]),p(C),p(k)])])}const $e=u(ue,[["render",ve],["__scopeId","data-v-e66786a0"]]);export{$e as default};