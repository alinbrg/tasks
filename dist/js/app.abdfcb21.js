(function(){"use strict";var t={619:function(t,e,n){var o=n(963),a=n(252);const s={class:"container"};function r(t,e,n,o,r,i){const d=(0,a.up)("HeaderComp"),l=(0,a.up)("router-view"),c=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(d,{onToggleAddTask:i.toggleAddTask,title:"Tasks",showAddTask:r.showAddTask},null,8,["onToggleAddTask","showAddTask"]),(0,a.Wm)(l,{showAddTask:r.showAddTask},null,8,["showAddTask"]),(0,a.Wm)(c)])}var i=n(577);function d(t,e,n,s,r,d){const l=(0,a.up)("ButtonComp");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("h1",null,(0,i.zw)(n.title),1),(0,a.wy)((0,a.Wm)(l,{onBtnClick:e[0]||(e[0]=e=>t.$emit("toggle-add-task")),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"]),[[o.F8,d.homePage]])])}function l(t,e,n,o,s,r){return(0,a.wg)(),(0,a.iD)("button",{onClick:e[0]||(e[0]=t=>r.onClick()),style:(0,i.j5)({background:n.color}),class:"btn"},(0,i.zw)(n.text),5)}var c={name:"ButtonComp",props:{text:String,color:String},methods:{onClick(){this.$emit("btn-click")}}},u=n(744);const m=(0,u.Z)(c,[["render",l]]);var k=m,p={name:"HeaderComp",props:{title:String,showAddTask:Boolean},components:{ButtonComp:k},computed:{homePage(){return"/"===this.$route.path}}};const h=(0,u.Z)(p,[["render",d],["__scopeId","data-v-194a5638"]]);var f=h;const T=t=>((0,a.dD)("data-v-9b460dc6"),t=t(),(0,a.Cn)(),t),g=T((()=>(0,a._)("p",null,"Copyright © 2022",-1))),w=(0,a.Uk)("About");function v(t,e){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",null,[g,(0,a.Wm)(n,{to:"/about"},{default:(0,a.w5)((()=>[w])),_:1})])}const y={},b=(0,u.Z)(y,[["render",v],["__scopeId","data-v-9b460dc6"]]);var A=b,C={name:"App",components:{HeaderComp:f,FooterComp:A},data(){return{showAddTask:!1}},methods:{toggleAddTask(){this.showAddTask=!this.showAddTask}}};const _=(0,u.Z)(C,[["render",r]]);var D=_,x=n(119);const O=(0,a._)("h3",null,"Version 2.0.0",-1),j=(0,a.Uk)("Go Back");function S(t,e){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[O,(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[j])),_:1})],64)}const $={},W=(0,u.Z)($,[["render",S]]);var Z=W;function H(t,e,n,s,r,i){const d=(0,a.up)("AddTaskComp"),l=(0,a.up)("TasksComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.wy)((0,a.Wm)(d,{onAddTask:i.addTask},null,8,["onAddTask"]),[[o.F8,n.showAddTask]]),(0,a.Wm)(l,{onToggleReminder:i.toggleReminder,onDeleteTask:i.deleteTask,tasks:r.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])],64)}function P(t,e,n,o,s,r){const i=(0,a.up)("TaskComp");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tasks,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(i,{onToggleReminder:n=>t.$emit("toggle-reminder",e.id),onDeleteTask:n=>t.$emit("delete-task",e.id),task:e},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function B(t,e,n,o,s,r){return(0,a.wg)(),(0,a.iD)("div",{onDblclick:e[1]||(e[1]=e=>t.$emit("toggle-reminder",n.task.id)),class:(0,i.C_)([n.task.reminder?"reminder":"","task"])},[(0,a._)("h3",null,[(0,a.Uk)((0,i.zw)(n.task.text)+" ",1),(0,a._)("i",{onClick:e[0]||(e[0]=t=>r.onDelete(n.task.id)),class:"fas fa-times"})]),(0,a._)("p",null,(0,i.zw)(n.task.day),1)],34)}var R={name:"TaskComp",props:{task:Object},methods:{onDelete(t){this.$emit("delete-task",t)}}};const U=(0,u.Z)(R,[["render",B],["__scopeId","data-v-7e993f1b"]]);var E=U,F={name:"TasksComp",props:{tasks:Array},components:{TaskComp:E},emits:["delete-task","toggle-reminder"]};const V=(0,u.Z)(F,[["render",P]]);var z=V;const I=t=>((0,a.dD)("data-v-03af9da0"),t=t(),(0,a.Cn)(),t),Y={class:"form-control"},J=I((()=>(0,a._)("label",{for:"text"},"Task",-1))),N={class:"form-control"},G=I((()=>(0,a._)("label",{for:"day"},"Day & Time",-1))),K={class:"form-control form-control-check"},L=I((()=>(0,a._)("label",{for:"reminder"},"Set Reminder",-1))),q=I((()=>(0,a._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function M(t,e,n,s,r,i){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[3]||(e[3]=(...t)=>i.onSubmit&&i.onSubmit(...t)),class:"add-form"},[(0,a._)("div",Y,[J,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.text=t),name:"text",placeholder:"Add Task"},null,512),[[o.nr,r.text]])]),(0,a._)("div",N,[G,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.day=t),name:"day",placeholder:"Add Day & Time"},null,512),[[o.nr,r.day]])]),(0,a._)("div",K,[L,(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>r.reminder=t),name:"reminder"},null,512),[[o.e8,r.reminder]])]),q],32)}var Q={name:"AddTaskComp",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(t){if(t.preventDefault(),!this.text)return void alert("Please add a task");const e={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=!1}}};const X=(0,u.Z)(Q,[["render",M],["__scopeId","data-v-03af9da0"]]);var tt=X,et={name:"HomeView",props:{showAddTask:Boolean},components:{TasksComp:z,AddTaskComp:tt},data(){return{tasks:[]}},methods:{async addTask(t){const e=await fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}),n=await e.json();this.tasks=[...this.tasks,n]},async deleteTask(t){if(confirm("Are you sure?")){const e=await fetch(`api/tasks/${t}`,{method:"DELETE"});200===e.status?this.tasks=this.tasks.filter((e=>e.id!==t)):alert("Error")}},async toggleReminder(t){const e=await this.fetchTask(t),n={...e,reminder:!e.reminder},o=await fetch(`api/tasks/${t}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}),a=await o.json();this.tasks=this.tasks.map((e=>e.id===t?{...e,reminder:a.reminder}:e))},async fetchTasks(){const t=await fetch("api/tasks"),e=await t.json();return e},async fetchTask(t){const e=await fetch(`api/tasks/${t}`),n=await e.json();return n}},async created(){this.tasks=await this.fetchTasks()}};const nt=(0,u.Z)(et,[["render",H]]);var ot=nt;const at=[{path:"/about",name:"About",component:Z},{path:"/",name:"Home",component:ot}],st=(0,x.p7)({history:(0,x.PO)("/"),routes:at});var rt=st;(0,o.ri)(D).use(rt).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,s){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],s=t[c][2];for(var i=!0,d=0;d<o.length;d++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[d])}))?o.splice(d--,1):(i=!1,s<r&&(r=s));if(i){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,a,s]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,r=o[0],i=o[1],d=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(d)var c=d(n)}for(e&&e(o);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunktasks"]=self["webpackChunktasks"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(619)}));o=n.O(o)})();
//# sourceMappingURL=app.abdfcb21.js.map