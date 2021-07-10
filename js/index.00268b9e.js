(function(e){function t(t){for(var a,r,o=t[0],d=t[1],l=t[2],c=0,u=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);m&&m(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var d=s[o];0!==n[d]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={index:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var m=d;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"071c":function(e){e.exports=JSON.parse('{"title":"A Unified Model for Zero-shot Music Source Separation, Transcription and Synthesis","abstract":"We propose a unified model for three inter-related tasks: 1) to separate individual sound sources from a mixed music audio, 2) to transcribe each sound source to MIDI notes, and 3) to synthesize new pieces based on the timber of separated sources. The model is inspired by the fact that when humans listen to music, our minds can not only separate the sounds of different instruments, but also at the same time perceive high-level representations such as score and timbre.","method1":"The proposed model comprises three components: 1) a query-by-example (QBE) network, 2) a pitch-timber disentanglement module, 3) a transcriptor, and 4) an audio encoder-decoder network.","method2":"First, the QBE network summarizes the clean query example audio (which contains only one instrument) into a low-dimensional query vector, conditioned on which the audio encoder extracts the latent representation of an individual sound source. Second, the model disentangles the latent representation into pitch and timber vectors while transcribing the score by quantizing the pitch vector. Finally, the audio decoder takes in both the disentangled pitch and timbre representations, generating a separated sound source. When the model further equips the timbre representation with a pitch-transformation invariance loss, the decoder becomes a synthesizer, capable of generating new sounds based on an existing timber vector and new scores. We term the model without pitch-transformation invariance loss multi-task informed (MSI) model. And we term MSI model with further disentanglement via pitch-transformation invariance loss MSI-DIS model."}')},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),n={class:"title-wrap"},i={class:"title"};function r(e,t,s,r,o,d){var l=Object(a["K"])("wired-divider"),m=Object(a["K"])("Home");return Object(a["D"])(),Object(a["i"])("div",n,[Object(a["m"])("div",null,[Object(a["m"])("div",i,Object(a["O"])(o.paperTitle),1)]),Object(a["m"])("div",null,[Object(a["m"])(l,{elevation:"3"})]),Object(a["m"])("div",null,[Object(a["m"])(m)])])}var o=s("071c"),d=(s("b0c0"),{style:{margin:"20px"}}),l={class:"menuBar"},m=Object(a["m"])("div",{class:"menuCard"},[Object(a["m"])("a",{href:"#introduction",style:{"text-decoration":"none"}},"Introduction")],-1),c=Object(a["m"])("div",{class:"menuCard"},[Object(a["m"])("a",{href:"#model",style:{"text-decoration":"none"}},"Model architecture")],-1),u=Object(a["m"])("div",{class:"menuCard"},[Object(a["m"])("a",{href:"#demos",style:{"text-decoration":"none"}},"Demos")],-1),p=Object(a["m"])("div",{class:"menuCard"},[Object(a["m"])("a",{href:"https://github.com/anonymous-16/a-unified-model-for-zero-shot-musical-source-separation-transcription-and-synthesis",style:{"text-decoration":"none"}},"Github")],-1),h={class:"content"},b=Object(a["m"])("div",{id:"introduction"},null,-1),_=Object(a["m"])("div",{class:"abstractTitle"},"What did we do?",-1),v={class:"abstractContent"},y=Object(a["m"])("div",{class:"abstractTitle"},"How to do?",-1),S={class:"abstractContent"},f=Object(a["m"])("div",{id:"model"},null,-1),O=Object(a["m"])("div",{class:"modelArchitecture"},null,-1),I={class:"abstractContent"},j=Object(a["m"])("div",{id:"demos"},null,-1),w={style:{"margin-left":"40px","margin-top":"20px",width:"850px"}},M=Object(a["m"])("div",{class:"abstractTitle"},"Synthesised and separated audio demos",-1),g={style:{"margin-left":"10px",width:"840px"}},x=Object(a["m"])("div",{class:"myLogo"},null,-1);function D(e,t,s,n,i,r){var o=Object(a["K"])("wired-divider"),D=Object(a["K"])("wired-card"),C=Object(a["K"])("MiniDemo");return Object(a["D"])(),Object(a["i"])("div",d,[Object(a["m"])("div",l,[Object(a["m"])(o,{elevation:"1",style:{width:"200px"}}),m,Object(a["m"])(o,{elevation:"2",style:{width:"200px"}}),c,Object(a["m"])(o,{elevation:"2",style:{width:"200px"}}),u,Object(a["m"])(o,{elevation:"2",style:{width:"200px"}}),p,Object(a["m"])(o,{elevation:"1",style:{width:"200px"}})]),Object(a["m"])("div",h,[b,Object(a["m"])(D,{elevation:"2",style:{width:"750px","background-color":"white"}},{default:Object(a["Z"])((function(){return[_,Object(a["m"])("div",v,Object(a["O"])(i.paperAbstract),1)]})),_:1}),Object(a["m"])(D,{elevation:"3",style:{"margin-left":"30px","margin-top":"20px",width:"850px","background-color":"white"}},{default:Object(a["Z"])((function(){return[y,Object(a["m"])("div",S,Object(a["O"])(i.paperMethod1),1),f,O,Object(a["m"])("div",I,Object(a["O"])(i.paperMethod2),1)]})),_:1}),j,Object(a["m"])("div",w,[Object(a["m"])(o,{elevation:"3",style:{width:"800px"}}),M,Object(a["m"])("div",g,[(Object(a["D"])(!0),Object(a["i"])(a["b"],null,Object(a["I"])(i.demoData,(function(e){return Object(a["D"])(),Object(a["i"])(C,{key:e.name,sampleData:e.data},null,8,["sampleData"])})),128))]),Object(a["m"])(o,{elevation:"2",style:{"margin-top":"30px","margin-bottom":"30px",width:"800px"}})])]),x])}var C={class:"sampleTitle"},T={class:"sampleOption"},P={class:"sampleOption"},k=Object(a["l"])("The proposed MSI-DIS model"),K=Object(a["l"])("The proposed MSI model");function V(e,t,s,n,i,r){var o=Object(a["K"])("wired-radio"),d=Object(a["K"])("wired-radio-group"),l=Object(a["K"])("wired-item"),m=Object(a["K"])("wired-combo"),c=Object(a["K"])("wired-divider"),u=Object(a["K"])("MiniPlayer"),p=Object(a["K"])("wired-card");return Object(a["D"])(),Object(a["i"])(p,{elevation:"3",style:i.demoCss},{default:Object(a["Z"])((function(){return[Object(a["m"])("div",C," Test sample "+Object(a["O"])(i.sampleId),1),Object(a["m"])("div",T,[Object(a["m"])(d,{selected:i.selectedInstr,onChange:r.instrSelectChange},{default:Object(a["Z"])((function(){return[Object(a["m"])(o,{name:"instr1"},{default:Object(a["Z"])((function(){return[Object(a["l"])(Object(a["O"])(i.instr1),1)]})),_:1}),Object(a["m"])(o,{name:"instr2"},{default:Object(a["Z"])((function(){return[Object(a["l"])(Object(a["O"])(i.instr2),1)]})),_:1})]})),_:1},8,["selected","onChange"])]),Object(a["m"])("div",P,[Object(a["m"])(m,{id:"combo",selected:i.selectedModel,onSelected:r.modelSelectChange},{default:Object(a["Z"])((function(){return[Object(a["m"])(l,{value:"dis"},{default:Object(a["Z"])((function(){return[k]})),_:1}),Object(a["m"])(l,{value:"msi"},{default:Object(a["Z"])((function(){return[K]})),_:1})]})),_:1},8,["selected","onSelected"])]),Object(a["m"])(c,{elevation:"2",style:{"margin-bottom":"20px","margin-top":"10px"}}),Object(a["m"])(u,{trackName:"Mixture",audioUrl:i.mixturePath,themeColor:"rgba(255,0,0,0.5)"},null,8,["audioUrl"]),Object(a["m"])(u,{trackName:"Separated",audioUrl:i.separatedPath,themeColor:"rgba(0,255,0,0.5)"},null,8,["audioUrl"]),Object(a["m"])(u,{trackName:"Synthesised",audioUrl:i.synthesisPath,themeColor:"rgba(0,0,255,0.5)"},null,8,["audioUrl"])]})),_:1},8,["style"])}var A={class:"miniPlayerCss"},Z={class:"trackNameCss"},N={class:"trackNameContentCss"},U={class:"miniAudioPlayerCss"},q={class:"toggleCss"},H={class:"progressCss"};function F(e,t,s,n,i,r){var o=Object(a["K"])("wired-card"),d=Object(a["K"])("wired-toggle"),l=Object(a["K"])("wired-progress");return Object(a["D"])(),Object(a["i"])("div",A,[Object(a["m"])("audio",{src:s.audioUrl,ref:"audio",onPlay:t[1]||(t[1]=function(){return r.onPlay&&r.onPlay.apply(r,arguments)}),onPause:t[2]||(t[2]=function(){return r.onPause&&r.onPause.apply(r,arguments)}),onTimeupdate:t[3]||(t[3]=function(){return r.onTimeupdate&&r.onTimeupdate.apply(r,arguments)}),onLoadedmetadata:t[4]||(t[4]=function(){return r.onLoadedmetadata&&r.onLoadedmetadata.apply(r,arguments)})},null,40,["src"]),Object(a["m"])("div",Z,[Object(a["m"])(o,{fill:s.themeColor,style:{width:"90px"}},{default:Object(a["Z"])((function(){return[Object(a["m"])("div",N,Object(a["O"])(s.trackName),1)]})),_:1},8,["fill"])]),Object(a["m"])("div",U,[Object(a["m"])("div",q,[Object(a["m"])(d,{style:i.toggleStyle,checked:i.audio.isPlaying,disabled:i.audio.loading,onChange:r.play},null,8,["style","checked","disabled","onChange"])]),Object(a["m"])("div",H,[Object(a["m"])(l,{style:i.progressStyle,percentage:"true",ref:"slider",value:i.progressVal,min:"0",max:i.sliderInterval},null,8,["style","value","max"])])])])}s("d3b7");var $={name:"MiniPlayer",props:{trackName:{type:String,required:!0},audioUrl:{type:String,required:!0},themeColor:{type:String,required:!0}},data:function(){var e={isPlaying:!1,loading:!1,currentTime:0,maxTime:0};return{audio:e,sliderInterval:100,progressVal:0,toggleStyle:{"--wired-toggle-on-color":this.themeColor},progressStyle:{"--wired-progress-color":this.themeColor,width:"120px"}}},mounted:function(){this.$refs.audio.volume=1},methods:{loadNewAudio:function(){var e=this.audio.isPlaying;e&&this.pausePlay();var t=this,s=this.progressVal;setTimeout((function(){this.progressVal=s,t.$refs.audio.currentTime=s/t.sliderInterval*t.audio.maxTime,e&&t.playAudio(t),t.audio.loading=!1}),50)},play:function(){return this.audio.isPlaying?this.pausePlay():this.startPlay()},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},playAudio:function(e){e.audio.isPlaying=!0,e.$refs.audio.play()},firstPlay:function(){var e=this.$refs.audio;e.play();var t=this;setTimeout((function(){e.pause(),t.playAudio(t),t.loading=!1}),1e3)},startPlay:function(){this.$refs.audio.play(),this.audio.isPlaying=!0},pausePlay:function(){this.audio.isPlaying=!1,this.$refs.audio.pause()},onLoadedmetadata:function(e){this.audio.maxTime=e.target.duration},onTimeupdate:function(e){this.audio.currentTime=e.target.currentTime;var t=this.audio.maxTime>0?this.audio.maxTime:1;this.progressVal=parseInt(this.audio.currentTime/t*this.sliderInterval)},onPlay:function(e){},onPause:function(){}}};$.render=F;var z=$,L={name:"MiniDemo",components:{MiniPlayer:z},props:{sampleData:{type:String,required:!0}},data:function(){Math.floor(40*Math.random()),Math.floor(60*Math.random());var e=(Math.random()+1)/2,t=this.sampleData;return console.log(t),{selectedModel:"dis",selectedInstr:"instr1",instr1:t.instruments.instr1,instr2:t.instruments.instr2,mixturePath:t.mixture,separatedPath:t["MSI-DIS"].separated.instr1,synthesisPath:t["MSI-DIS"].synthesised.instr1,sampleId:t.sampleId,demoCss:{"background-color":"rgba(255, 255, 255,"+e+")"}}},methods:{modelSelectChange:function(e){var t=e.target.value.value;this.selectedModel=t;var s=this.selectedInstr,a={dis:"MSI-DIS",msi:"MSI"},n=a[t];this.selectedModel=t,this.separatedPath=this.sampleData[n].separated[s],this.synthesisPath=this.sampleData[n].synthesised[s]},instrSelectChange:function(e){var t=e.target.name;this.selectedInstr=t;var s={dis:"MSI-DIS",msi:"MSI"},a=s[this.selectedModel];this.separatedPath=this.sampleData[a].separated[t],this.synthesisPath=this.sampleData[a].synthesised[t]}}};L.render=V;var J=L,W=s("cda1"),B={name:"Home",data:function(){var e=[],t=1;for(var s in W){var a=W[s];a["sampleId"]=t,e.push({name:t,data:a}),t++}return{demoData:e,paperAbstract:o.abstract,paperMethod1:o.method1,paperMethod2:o.method2,modelUrl:"../../static/data/model.png"}},components:{MiniDemo:J}};B.render=D;var E=B,Q={name:"App",components:{Home:E},data:function(){return{paperTitle:o.title}},mounted:function(){},methods:{}};Q.render=r;var G=Q,R=(s("7dd6"),s("48f2"),s("bc3a")),X=s.n(R),Y=s("3fd4"),ee=(s("7d05"),Object(a["h"])(G));ee.use(Y["a"]),ee.config.globalProperties.axios=X.a,ee.mount("#app")},"7d05":function(e,t,s){},cda1:function(e){e.exports=JSON.parse('{"sample_1":{"instruments":{"instr1":"Cello","instr2":"Viola"},"MSI-DIS":{"separated":{"instr1":"demos/sample_1/MSI-DIS_Cello_separated.wav","instr2":"demos/sample_1/MSI-DIS_Viola_separated.wav"},"synthesised":{"instr1":"demos/sample_1/MSI-DIS_Cello_synthesised.wav","instr2":"demos/sample_1/MSI-DIS_Viola_synthesised.wav"}},"mixture":"demos/sample_1/mixture.wav","MSI":{"separated":{"instr1":"demos/sample_1/MSI_Viola_separated.wav","instr2":"demos/sample_1/MSI_Cello_separated.wav"},"synthesised":{"instr1":"demos/sample_1/MSI_Viola_synthesised.wav","instr2":"demos/sample_1/MSI_Cello_synthesised.wav"}}},"sample_2":{"instruments":{"instr1":"Violin","instr2":"Double bass"},"MSI-DIS":{"separated":{"instr1":"demos/sample_2/MSI-DIS_Violin_separated.wav","instr2":"demos/sample_2/MSI-DIS_Double_separated.wav"},"synthesised":{"instr1":"demos/sample_2/MSI-DIS_Violin_synthesised.wav","instr2":"demos/sample_2/MSI-DIS_Double_synthesised.wav"}},"mixture":"demos/sample_2/mixture.wav","MSI":{"separated":{"instr1":"demos/sample_2/MSI_Double_separated.wav","instr2":"demos/sample_2/MSI_Violin_separated.wav"},"synthesised":{"instr1":"demos/sample_2/MSI_Double_synthesised.wav","instr2":"demos/sample_2/MSI_Violin_synthesised.wav"}}},"sample_3":{"instruments":{"instr1":"Tuba","instr2":"Saxophone"},"MSI-DIS":{"separated":{"instr1":"demos/sample_3/MSI-DIS_Tuba_separated.wav","instr2":"demos/sample_3/MSI-DIS_Saxophone_separated.wav"},"synthesised":{"instr1":"demos/sample_3/MSI-DIS_Tuba_synthesised.wav","instr2":"demos/sample_3/MSI-DIS_Saxophone_synthesised.wav"}},"mixture":"demos/sample_3/mixture.wav","MSI":{"separated":{"instr1":"demos/sample_3/MSI_Saxophone_separated.wav","instr2":"demos/sample_3/MSI_Tuba_separated.wav"},"synthesised":{"instr1":"demos/sample_3/MSI_Saxophone_synthesised.wav","instr2":"demos/sample_3/MSI_Tuba_synthesised.wav"}}},"sample_4":{"instruments":{"instr1":"Cello","instr2":"Flute"},"MSI-DIS":{"separated":{"instr1":"demos/sample_4/MSI-DIS_Cello_separated.wav","instr2":"demos/sample_4/MSI-DIS_Flute_separated.wav"},"synthesised":{"instr1":"demos/sample_4/MSI-DIS_Cello_synthesised.wav","instr2":"demos/sample_4/MSI-DIS_Flute_synthesised.wav"}},"mixture":"demos/sample_4/mixture.wav","MSI":{"separated":{"instr1":"demos/sample_4/MSI_Cello_separated.wav","instr2":"demos/sample_4/MSI_Flute_separated.wav"},"synthesised":{"instr1":"demos/sample_4/MSI_Cello_synthesised.wav","instr2":"demos/sample_4/MSI_Flute_synthesised.wav"}}},"sample_5":{"instruments":{"instr1":"Clarinet","instr2":"Horn"},"MSI-DIS":{"separated":{"instr1":"demos/sample_5/MSI-DIS_Clarinet_separated.wav","instr2":"demos/sample_5/MSI-DIS_Horn_separated.wav"},"synthesised":{"instr1":"demos/sample_5/MSI-DIS_Clarinet_synthesised.wav","instr2":"demos/sample_5/MSI-DIS_Horn_synthesised.wav"}},"mixture":"demos/sample_5/mixture.wav","MSI":{"separated":{"instr1":"demos/sample_5/MSI_Clarinet_separated.wav","instr2":"demos/sample_5/MSI_Horn_separated.wav"},"synthesised":{"instr1":"demos/sample_5/MSI_Clarinet_synthesised.wav","instr2":"demos/sample_5/MSI_Horn_synthesised.wav"}}},"sample_6":{"instruments":{"instr1":"Trumpet","instr2":"Trombone"},"MSI-DIS":{"separated":{"instr1":"demos/sample_6/MSI-DIS_Trumpet_separated.wav","instr2":"demos/sample_6/MSI-DIS_Trombone_separated.wav"},"synthesised":{"instr1":"demos/sample_6/MSI-DIS_Trumpet_synthesised.wav","instr2":"demos/sample_6/MSI-DIS_Trombone_synthesised.wav"}},"mixture":"demos/sample_6/mixture.wav","MSI":{"separated":{"instr1":"demos/sample_6/MSI_Trombone_separated.wav","instr2":"demos/sample_6/MSI_Trumpet_separated.wav"},"synthesised":{"instr1":"demos/sample_6/MSI_Trombone_synthesised.wav","instr2":"demos/sample_6/MSI_Trumpet_synthesised.wav"}}}}')}});