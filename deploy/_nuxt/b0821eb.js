(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{169:function(n,t,e){"use strict";e(50),e(116);var r=e(171),o=e.n(r),l=e(172),h=e.n(l);e(173),e(174),e(175),e(176),e(177),e(178),e(179),e(180),e(181),e(182),e(183),e(184);o.a.setOptions({highlight:function(code,n){return h.a.highlight(code,h.a.languages[n],n)}});var c=o.a,d={data:function(){return{bases:["https://api.storyblok.com/v1","https://mapi.storyblok.com/v1"]}},props:{url:String,requestObject:Object,httpMethod:String,keepToken:Boolean},methods:{output:function(n){var code="```"+n+"\n";return code+=this.request,c(code+="\n```")}},computed:{path:function(){for(var n=this.url,t=0,e=this.bases.length;t<e;t++){var base=this.bases[t];n=n.replace(base,"")}return this.url.indexOf("?")<=0?n.substring(n.indexOf("/")+1,n.length):n.substring(n.indexOf("/")+1,n.indexOf("?"))},queryParams:function(){if(this.url.indexOf("?")<=0)return{};for(var n,t=this.url.substring(this.url.indexOf("?")+1),e=/([^&=]+)=?([^&]*)/g,r=/\+/g,o=function(n){return decodeURIComponent(n.replace(r," "))},l={},h=e.exec(t);h;){var c=o(h[1]),d=o(h[2]);"[]"===c.substring(c.length-2)?c=c.substring(0,c.length-2)(l[c]||(l[c]=[])).push(d):l[c]="true"===(n=d)||"false"!==n&&("null"===n?null:+n==+n?+n:n),h=e.exec(t)}var f=function(n,t,e){for(var r=t.length-1,i=0;i<r;++i){var o=t[i];o in n||(n[o]={}),n=n[o]}n[t[r]]=e};for(var O in l){var y=O.split("[");y.length>1&&function(){var n=[];y.forEach((function(t){var e=t.replace(/[?[\]\\ ]/g,"");n.push(e)})),f(l,n,l[O]),delete l[O]}()}return this.keepToken||delete l.token,l},urlWithoutParams:function(){return this.url.indexOf("?")<=0?this.url:this.url.substring(0,this.url.indexOf("?"))},request:function(){return"".concat(this.path)}}},f=e(12),component=Object(f.a)(d,undefined,undefined,!1,null,null,null);t.a=component.exports},263:function(n,t,e){"use strict";e.r(t);var r={mixins:[e(169).a],computed:{request:function(){var n=this.queryParams;switch(this.httpMethod){case"POST":return'import requests\n\nurl = "'.concat(this.urlWithoutParams,'"\n\nquerystring = ').concat(JSON.stringify(n),"\n\npayload = ").concat(JSON.stringify(JSON.stringify(this.requestObject)),'\nheaders = {\n  \'Content-Type\': "application/json",\n  \'Authorization\': "YOUR_OAUTH_TOKEN"\n}\n\nresponse = requests.request("POST", url, data=payload, headers=headers, params=querystring)\n\nprint(response.text)');case"PUT":return'import requests\n\nurl = "'.concat(this.urlWithoutParams,'"\n\nquerystring = ').concat(JSON.stringify(n),"\n\npayload = ").concat(JSON.stringify(JSON.stringify(this.requestObject)),'\nheaders = {\n  \'Content-Type\': "application/json",\n  \'Authorization\': "YOUR_OAUTH_TOKEN"\n}\n\nresponse = requests.request("PUT", url, data=payload, headers=headers, params=querystring)\n\nprint(response.text)');case"DELETE":return'import requests\n\nurl = "'.concat(this.urlWithoutParams,'"\n\nquerystring = ').concat(JSON.stringify(n),"\n\npayload = ").concat(JSON.stringify(JSON.stringify(this.requestObject)),'\nheaders = {\n  \'Content-Type\': "application/json",\n  \'Authorization\': "YOUR_OAUTH_TOKEN"\n}\n\nresponse = requests.request("DELETE", url, data=payload, headers=headers, params=querystring)\n\nprint(response.text)');case"GETOAUTH":return'import requests\n\nurl = "'.concat(this.urlWithoutParams,'"\n\nquerystring = ').concat(JSON.stringify(n),'\n\npayload = ""\nheaders = {\n  \'Content-Type\': "application/json",\n  \'Authorization\': "YOUR_OAUTH_TOKEN"\n}\n\nresponse = requests.request("GET", url, data=payload, headers=headers, params=querystring)\n\nprint(response.text)');default:return'import requests\n\nurl = "'.concat(this.urlWithoutParams,'"\n\nquerystring = ').concat(JSON.stringify(n),'\n\npayload = ""\nheaders = {}\n\nresponse = requests.request("GET", url, data=payload, headers=headers, params=querystring)\n\nprint(response.text)')}}}},o=e(12),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{domProps:{innerHTML:n._s(n.output("python"))}})}),[],!1,null,null,null);t.default=component.exports}}]);