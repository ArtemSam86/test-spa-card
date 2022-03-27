(function(){"use strict";var e={662:function(e,i,s){var t=s(963),d=s(252);function o(e,i,s,t,o,r){const a=(0,d.up)("field");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(a)])}var r=s(577);const a={class:"field-calculate"},c={class:"win"},n={class:"loss"},l={class:"moves"},u={class:"field-card"};function m(e,i,s,t,o,m){const g=(0,d.up)("card");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",a,[(0,d._)("p",c,"Совпало пар: "+(0,r.zw)(e.getWinnings),1),(0,d._)("p",n,"Не совпало пар: "+(0,r.zw)(e.getLosses),1),(0,d._)("p",l,"Осталось ходов: "+(0,r.zw)(e.getMoves),1)]),(0,d._)("div",u,[(0,d.Wm)(g,{cards:e.getCardObject},null,8,["cards"])])],64)}const g=["disabled","onMouseenter","onClick"];function h(e,i,s,t,o,a){return(0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(o.arraySort,(i=>((0,d.wg)(),(0,d.iD)("button",{class:(0,r.C_)("card"),key:`card-${i.id}`,disabled:i.id===o.isDisabledOne||i.id===o.isDisabledTwo,onMouseenter:e=>a.CardFocus(i.id),onClick:e=>a.clickedToCard(i.comparedValues,i.id)},(0,r.zw)(i.id===o.isDisabledOne?e.clickedIdOne:i.id===o.isDisabledTwo?e.clickedIdTwo:"*|*"),41,g)))),128)}var p=s(907),O={name:"CardImage",props:{cards:{type:Array,require:!0}},data(){return{victoryColor:"",isDisabledOne:0,isDisabledTwo:0,counter:0,arraySort:[]}},updated(){0===this.arraySort.length&&(this.arraySort=this.cards)},computed:{...(0,p.Se)({clickedIdOne:"getClickedIdOne",clickedIdTwo:"getClickedIdTwo",getMoves:"getMoves"})},methods:{...(0,p.nv)({setClickedIdOne:"setClickedIdOne",setClickedIdTwo:"setClickedIdTwo",setWinnings:"setWinnings",setLosses:"setLosses",setMoves:"setMoves",resetWinLoss:"resetWinLoss"}),CardFocus(e){0===this.getMoves&&(0===this.arraySort.length?(this.setMoves(1),alert("Вы выйграли!!!"),this.resetWinLoss(0),this.arraySort=this.cards):(this.setMoves(1),alert("Вы проиграли!!!"),this.resetWinLoss(0),this.arraySort=this.cards)),0!==this.clickedIdOne&&0!==this.clickedIdTwo&&(this.clickedIdOne===this.clickedIdTwo&&(this.arraySort=this.arraySort.filter((e=>{if(e.id!==this.isDisabledOne&&e.id!==this.isDisabledTwo)return e}))),2===this.counter&&(this.counter=0,this.isDisabledOne=0,this.isDisabledTwo=0,this.setClickedIdOne(0),this.setClickedIdTwo(0)),e===this.isDisabledOne&&e===this.isDisabledTwo||this.arraySort.sort((()=>Math.random()-.5)))},clickedToCard(e,i){0===this.isDisabledOne?this.isDisabledOne=i:this.isDisabledTwo=i,0===this.clickedIdOne&&0===this.clickedIdTwo?this.setClickedIdOne(e):this.setClickedIdTwo(e),0!==this.clickedIdOne&&0!==this.clickedIdTwo&&(this.clickedIdOne===this.clickedIdTwo?(this.setWinnings(1),this.setMoves(-1)):this.setLosses(1),this.setMoves(1)),this.counter++}}},f=s(744);const v=(0,f.Z)(O,[["render",h],["__scopeId","data-v-4bc885ea"]]);var T=v,C={name:"CardField",components:{Card:T},computed:{...(0,p.Se)({getCardObject:"getCardObject",getWinnings:"getWinnings",getLosses:"getLosses",getMoves:"getMoves"})}};const I=(0,f.Z)(C,[["render",m],["__scopeId","data-v-678f6b5c"]]);var b=I,w={name:"App",components:{Field:b},created(){this.getTheCardObjectFromTheServer()},methods:{...(0,p.nv)({getTheCardObjectFromTheServer:"getTheCardObjectFromTheServer"})}};const k=(0,f.Z)(w,[["render",o]]);var _=k,S=s(669),V=s.n(S),D={shuffle:function(e){return e.sort((()=>Math.random()-.5))}},E=(0,p.MT)({state:{cardObjectDefault:[{id:1,img:"",comparedValues:41054},{id:2,img:"",comparedValues:61051},{id:3,img:"",comparedValues:21052},{id:4,img:"",comparedValues:71055},{id:5,img:"",comparedValues:81059},{id:6,img:"",comparedValues:91050},{id:7,img:"",comparedValues:41054},{id:8,img:"",comparedValues:61051},{id:9,img:"",comparedValues:21052},{id:10,img:"",comparedValues:71055},{id:11,img:"",comparedValues:81059},{id:12,img:"",comparedValues:91050},{id:13,img:"",comparedValues:41054},{id:14,img:"",comparedValues:61051},{id:15,img:"",comparedValues:21052},{id:16,img:"",comparedValues:71055},{id:17,img:"",comparedValues:81059},{id:18,img:"",comparedValues:91050},{id:19,img:"",comparedValues:41054},{id:20,img:"",comparedValues:61051},{id:21,img:"",comparedValues:21052},{id:22,img:"",comparedValues:71055},{id:23,img:"",comparedValues:81059},{id:24,img:"",comparedValues:91050},{id:25,img:"",comparedValues:41054},{id:26,img:"",comparedValues:61051},{id:27,img:"",comparedValues:21052},{id:28,img:"",comparedValues:71055},{id:29,img:"",comparedValues:81059},{id:30,img:"",comparedValues:91050},{id:31,img:"",comparedValues:41054},{id:32,img:"",comparedValues:61051},{id:33,img:"",comparedValues:21052},{id:34,img:"",comparedValues:71055},{id:35,img:"",comparedValues:81059},{id:36,img:"",comparedValues:91050}],cardObject:[],clickedIdOne:0,clickedIdTwo:0,winnings:0,losses:0,moves:40},getters:{getCardObject:e=>D.shuffle(e.cardObject),getClickedIdOne:e=>e.clickedIdOne,getClickedIdTwo:e=>e.clickedIdTwo,getWinnings:e=>e.winnings,getLosses:e=>e.losses,getMoves:e=>e.moves},mutations:{RESET_WIN_LOSS(e,i){e.winnings=i,e.losses=i},SET_WIN(e,i){e.winnings+=i},SET_LOSS(e,i){e.losses+=i},SET_MOV(e,i){0===e.moves?e.moves=40:e.moves-=i},SET_CARD_OBJECT(e,i){e.cardObject=i},SET_CLICKED_ID_ONE(e,i){e.clickedIdOne=i},SET_CLICKED_ID_TWO(e,i){e.clickedIdTwo=i}},actions:{async getTheCardObjectFromTheServer(e){let{commit:i,state:s}=e;V().get("http://localhost:3008").then((e=>{let{data:s}=e;i("SET_CARD_OBJECT",s)})).catch((e=>{console.log(e),i("SET_CARD_OBJECT",s.cardObjectDefault)}))},setClickedIdOne(e,i){let{commit:s}=e;s("SET_CLICKED_ID_ONE",i)},setClickedIdTwo(e,i){let{commit:s}=e;s("SET_CLICKED_ID_TWO",i)},setWinnings(e,i){let{commit:s}=e;s("SET_WIN",i)},setLosses(e,i){let{commit:s}=e;s("SET_LOSS",i)},setMoves(e,i){let{commit:s}=e;s("SET_MOV",i)},resetWinLoss(e,i){let{commit:s}=e;s("RESET_WIN_LOSS",i)}},modules:{}});(0,t.ri)(_).use(E).mount("#app")}},i={};function s(t){var d=i[t];if(void 0!==d)return d.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(i,t,d,o){if(!t){var r=1/0;for(l=0;l<e.length;l++){t=e[l][0],d=e[l][1],o=e[l][2];for(var a=!0,c=0;c<t.length;c++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](t[c])}))?t.splice(c--,1):(a=!1,o<r&&(r=o));if(a){e.splice(l--,1);var n=d();void 0!==n&&(i=n)}}return i}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,d,o]}}(),function(){s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,{a:i}),i}}(),function(){s.d=function(e,i){for(var t in i)s.o(i,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={143:0};s.O.j=function(i){return 0===e[i]};var i=function(i,t){var d,o,r=t[0],a=t[1],c=t[2],n=0;if(r.some((function(i){return 0!==e[i]}))){for(d in a)s.o(a,d)&&(s.m[d]=a[d]);if(c)var l=c(s)}for(i&&i(t);n<r.length;n++)o=r[n],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},t=self["webpackChunktest_spa"]=self["webpackChunktest_spa"]||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(662)}));t=s.O(t)})();
//# sourceMappingURL=app.51c480bf.js.map