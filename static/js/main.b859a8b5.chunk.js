(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),a=i(8),r=i.n(a),o=(i(14),i(15),i(2)),c=i(3),l=i(5),u=i(4),m=i(1),d=i(6),h=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={timerSecond:0,intervalId:0,isSession:!0,running:!1,play:!1},console.log(i.props),i.playTimer=i.playTimer.bind(Object(m.a)(i)),i.countDown=i.countDown.bind(Object(m.a)(i)),i.resetTimer=i.resetTimer.bind(Object(m.a)(i)),i.audioPlay=i.audioPlay.bind(Object(m.a)(i)),i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"playTimer",value:function(){var e=document.querySelector(".play");if(console.log(this.state.intervalId),!1===this.state.running){e.style.backgroundImage='url("/static/media/stop-button-svgrepo-com.d2c37072.svg")';var t=setInterval(this.countDown,1e3);this.props.disableSitting(!0),this.setState({running:!0,intervalId:t})}else this.setState({running:!1}),this.props.disableSitting(!1),e.style.backgroundImage='url("/static/media/play-multimedia-outlined-button-circle-svgrepo-com.fff9f019.svg")',clearInterval(this.state.intervalId)}},{key:"countDown",value:function(){console.log(this.state.play);var e=this.state.timerSecond;switch(e){case 0:0===this.props.timeMinute&&0===e&&(this.setState({play:!0}),this.state.isSession?(this.setState({isSession:!1}),this.props.toggleInterval(this.state.isSession)):(this.setState({isSession:!0}),this.props.toggleInterval(this.state.isSession)),this.audioPlay()),this.props.updateMinute(),this.setState({timerSecond:59});break;default:this.setState((function(e){return{timerSecond:e.timerSecond-1}}))}}},{key:"audioPlay",value:function(){!0===this.state.play&&this.audioBeep.play()}},{key:"resetTimer",value:function(){this.props.reset(),this.setState({timerSecond:0,running:!1,play:!1}),this.audioBeep.pause(),document.querySelector(".play").style.backgroundImage="url('/static/media/play-multimedia-outlined-button-circle-svgrepo-com.fff9f019.svg')",clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this,t=0===this.props.timeMinute?"00":this.props.timeMinute<10?"0".concat(this.props.timeMinute):this.props.timeMinute,i=0===this.state.timerSecond?"00":this.state.timerSecond<10?"0".concat(this.state.timerSecond):this.state.timerSecond;return n.a.createElement("div",{className:"timer-clock"},n.a.createElement("div",{id:"time-left",className:"time"},n.a.createElement("h2",{id:"timer-label",className:"session-name"},!0===this.state.isSession?"Session":"Break"),n.a.createElement("h1",{id:"time-left",className:"time-left"},t,":",i),n.a.createElement("div",{className:"controlers"},n.a.createElement("button",{id:"start_stop",className:"play",onClick:this.playTimer}),n.a.createElement("button",{id:"reset",className:"refresh",onClick:this.resetTimer}))),n.a.createElement("audio",{id:"beep",preload:"auto",src:"http://www.accesscontrolsales.com/Ingram_Products/mp3/s7-c3tone.mp3",ref:function(t){e.audioBeep=t},type:"audio/mp3"}))}}]),t}(s.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.breakValue),n.a.createElement("div",{id:"break-label",className:"break"},n.a.createElement("button",{id:"break-increment",disabled:!0===this.props.isPlay?"disabled":"",onClick:this.props.onClick1},"+"),n.a.createElement("span",{id:"break-length"},this.props.breakValue),n.a.createElement("button",{id:"break-decrement",disabled:!0===this.props.isPlay?"disabled":"",onClick:this.props.onClick2},"-"))}}]),t}(s.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"session-label",className:"session"},n.a.createElement("button",{id:"session-increment",disabled:!0===this.props.isPlay?"disabled":"",onClick:this.props.incrementSession},"+"),n.a.createElement("span",{id:"session-length"},this.props.sessionValue),n.a.createElement("button",{id:"session-decrement",disabled:!0===this.props.isPlay?"disabled":"",onClick:this.props.decrementSession},"-"))}}]),t}(s.Component),k=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={break:5,session:25,timeMin:25,timerType:"session",running:!1,isSession:!0,isPlay:!1},i.decrementBreakTime=i.decrementBreakTime.bind(Object(m.a)(i)),i.incrementBreakTime=i.incrementBreakTime.bind(Object(m.a)(i)),i.onToggleInterval=i.onToggleInterval.bind(Object(m.a)(i)),i.updateMinute=i.updateMinute.bind(Object(m.a)(i)),i.onReset=i.onReset.bind(Object(m.a)(i)),i.disableSitting=i.disableSitting.bind(Object(m.a)(i)),i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"decrementBreakTime",value:function(){var e=document.getElementById("break-decrement");this.state.break>1&&this.state.break<=30&&(e.disable=!1,this.setState((function(e){return{break:e.break-1}})))}},{key:"incrementBreakTime",value:function(){var e=document.getElementById("break-increment");this.state.break<60?(console.log(this.state.break),e.disable=!1,this.setState((function(e){return{break:e.break+1}}))):e.disable=!0}},{key:"decrementSessionTime",value:function(){var e=document.getElementById("session-decrement");this.state.session>1&&this.state.session<=60&&(e.disable=!1,this.setState((function(e){return{session:e.session-1,timeMin:e.session-1}})))}},{key:"incrementSessionTime",value:function(){var e=document.getElementById("session-increment");this.state.session<60?(e.disable=!0,this.setState((function(e){return{session:e.session+1,timeMin:e.session+1}}))):e.disable=!1}},{key:"onToggleInterval",value:function(e){e?this.setState({timeMin:this.state.session}):this.setState({timeMin:this.state.break})}},{key:"updateMinute",value:function(){this.setState((function(e){return{timeMin:e.timeMin-1}}))}},{key:"onReset",value:function(){this.setState({break:5,session:25,timeMin:25,running:!1,isPlay:!1,isSession:!1})}},{key:"disableSitting",value:function(e){this.setState({isPlay:e})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"title"},"Pomodoro Clock"),n.a.createElement("div",{className:"setting-length"},n.a.createElement(p,{isPlay:this.state.isPlay,breakValue:this.state.break,onClick1:this.incrementBreakTime,onClick2:this.decrementBreakTime}),n.a.createElement(b,{isPlay:this.state.isPlay,sessionValue:this.state.session,incrementSession:function(t){return e.incrementSessionTime(t)},decrementSession:function(t){return e.decrementSessionTime(t)}})),n.a.createElement(h,Object.assign({},this.state,{timeMinute:this.state.timeMin,reset:this.onReset,updateMinute:this.updateMinute,toggleInterval:this.onToggleInterval,disableSitting:this.disableSitting})))}}]),t}(s.Component);var v=function(){return n.a.createElement("div",{className:"app-container"},n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,i){e.exports=i(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b859a8b5.chunk.js.map