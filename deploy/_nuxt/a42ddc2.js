(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{169:function(t,e,o){"use strict";o(50),o(116);var r=o(171),n=o.n(r),c=o(172),l=o.n(c);o(173),o(174),o(175),o(176),o(177),o(178),o(179),o(180),o(181),o(182),o(183),o(184);n.a.setOptions({highlight:function(code,t){return l.a.highlight(code,l.a.languages[t],t)}});var d=n.a,k={data:function(){return{bases:["https://api.storyblok.com/v1","https://mapi.storyblok.com/v1"]}},props:{url:String,requestObject:Object,httpMethod:String,keepToken:Boolean},methods:{output:function(t){var code="```"+t+"\n";return code+=this.request,d(code+="\n```")}},computed:{path:function(){for(var t=this.url,e=0,o=this.bases.length;e<o;e++){var base=this.bases[e];t=t.replace(base,"")}return this.url.indexOf("?")<=0?t.substring(t.indexOf("/")+1,t.length):t.substring(t.indexOf("/")+1,t.indexOf("?"))},queryParams:function(){if(this.url.indexOf("?")<=0)return{};for(var t,e=this.url.substring(this.url.indexOf("?")+1),o=/([^&=]+)=?([^&]*)/g,r=/\+/g,n=function(t){return decodeURIComponent(t.replace(r," "))},c={},l=o.exec(e);l;){var d=n(l[1]),k=n(l[2]);"[]"===d.substring(d.length-2)?d=d.substring(0,d.length-2)(c[d]||(c[d]=[])).push(k):c[d]="true"===(t=k)||"false"!==t&&("null"===t?null:+t==+t?+t:t),l=o.exec(e)}var h=function(t,e,o){for(var r=e.length-1,i=0;i<r;++i){var n=e[i];n in t||(t[n]={}),t=t[n]}t[e[r]]=o};for(var f in c){var _=f.split("[");_.length>1&&function(){var t=[];_.forEach((function(e){var o=e.replace(/[?[\]\\ ]/g,"");t.push(o)})),h(c,t,c[f]),delete c[f]}()}return this.keepToken||delete c.token,c},urlWithoutParams:function(){return this.url.indexOf("?")<=0?this.url:this.url.substring(0,this.url.indexOf("?"))},request:function(){return"".concat(this.path)}}},h=o(12),component=Object(h.a)(k,undefined,undefined,!1,null,null,null);e.a=component.exports},253:function(t,e,o){"use strict";o.r(e);o(50),o(117);var r=o(169),n={"GET:https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=ask9soUkv02QqbZgmZdeDAtt":"client.story('posts/my-third-post')","GET:https://api.storyblok.com/v1/cdn/stories?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(starts_with: 'posts/')","GET:https://api.storyblok.com/v1/cdn/stories?token=wANpEQEsMYGOwLxwXQ76Ggtt":"client.stories","GET:https://api.storyblok.com/v1/cdn/spaces/me?token=wANpEQEsMYGOwLxwXQ76Ggtt":"client.space","GET:https://api.storyblok.com/v1/cdn/stories?cv=1541863983&token=wANpEQEsMYGOwLxwXQ76Ggtt":"client.stories","GET:https://api.storyblok.com/v1/cdn/stories/?per_page=2&page=1&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(per_page: 2, page: 1, starts_with: 'posts/')","GET:https://api.storyblok.com/v1/cdn/spaces/me/?token=dtONJHwmxhdJOwKxyjlqAgtt":"client.space","GET:https://api.storyblok.com/v1/cdn/datasource_entries?datasource=labels&token=ask9soUkv02QqbZgmZdeDAtt":"client.datasource_entries(datasource: 'labels')","GET:https://api.storyblok.com/v1/cdn/links/?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt":"client.links(starts_with: 'posts/')","GET:https://api.storyblok.com/v1/cdn/tags/?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt":"client.tags(starts_with: 'posts/')","GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[author][in]=22f4fb1b-50b3-4bf2-816e-7d589e307421&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(filter_query: {author: {in: '22f4fb1b-50b3-4bf2-816e-7d589e307421'}, starts_with: 'posts/'})","GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[author][not_in]=22f4fb1b-50b3-4bf2-816e-7d589e307421&token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(filter_query: {author: {not_in: '22f4fb1b-50b3-4bf2-816e-7d589e307421'}, starts_with: 'posts/'})","GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[categories][in_array]=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(filter_query: {categories: {in_array: ['9aa72a2f-04ae-48df-b71f-25f53044dc97', '84550816-245d-4fe6-8ae8-b633d4a328f4']}, starts_with: 'posts/'})","GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[categories][all_in_array]=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(filter_query: {categories: {in_array: ['9aa72a2f-04ae-48df-b71f-25f53044dc97', '84550816-245d-4fe6-8ae8-b633d4a328f4']}, starts_with: 'posts/'})","GET:https://api.storyblok.com/v1/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&filter_query[schedule][gt-date]=2019-12-24 09:00":"client.stories(filter_query: {schedule: {gt-date: '2019-12-24 09:00'}, starts_with: 'posts/'})","GET:https://api.storyblok.com/v1/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&filter_query[schedule][lt-date]=2018-12-24 09:00":"client.stories(filter_query: {schedule: {lt-date: '2019-12-24 09:00'}, starts_with: 'posts/'})","GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/stories/?version=draft&starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(version: 'draft', starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=de/*&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(starts_with: 'de/*')","GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[featured][in]=true&starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(starts_with: 'products/', filter_query: {featured: {in: true}})","GET:https://api.storyblok.com/v1/cdn/stories?sort_by=position:desc&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(sort_by: 'position:desc')","GET:https://api.storyblok.com/v1/cdn/stories?sort_by=content.name:asc&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(sort_by: 'content.name:asc')","GET:https://api.storyblok.com/v1/cdn/stories?sort_by=name:asc&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(sort_by: 'name:asc')","GET:https://api.storyblok.com/v1/cdn/spaces/me/?cv=CURRENT_TIMESTAMP&token=ask9soUkv02QqbZgmZdeDAtt":"client.space","GET:https://api.storyblok.com/v1/cdn/stories?version=draft&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(version: 'draft')","GET:https://api.storyblok.com/v1/cdn/stories/?resolve_relations=categories&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(resolve_relations: 'categories', starts_with: 'posts/')","GET:https://api.storyblok.com/v1/cdn/stories?is_startpage=false&starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt":"client.stories(is_startpage: false, starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/stories/ac0d2ed0-e323-43ca-ae59-5cd7d38683cb?token=ask9soUkv02QqbZgmZdeDAtt&find_by=uuid&language=de":"client.story('ac0d2ed0-e323-43ca-ae59-5cd7d38683cb', {find_by: 'uuid', language: 'de'})","GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt-int]=100":"client.stories(filter_query: {price: {'gt-int': 100}}, starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][lt-int]=100":"client.stories(filter_query: {price: {'lt-int': 100}}, starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt-float]=100.50":"client.stories(filter_query: {price: {'gt-float': 100.5}}, starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][lt-float]=100.50":"client.stories(filter_query: {price: {'lt-float': 100.5}}, starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt-float]=100.50&filter_query[price][lt-float]=300.50":"client.stories(filter_query: {price: {'gt-float': 100.5, 'lt-float': 300.5}}, starts_with: 'products/')","GET:https://api.storyblok.com/v1/cdn/datasources?token=ask9soUkv02QqbZgmZdeDAtt":"client.datasources"},c={mixins:[r.a],computed:{request:function(){if(n[(this.httpMethod||"GET")+":"+this.url])return"require 'storyblok'\nclient = Storyblok::Client.new(token: 'YOUR_TOKEN')\n\n".concat(n[(this.httpMethod||"GET")+":"+this.url]);var t="";switch("{}"!=JSON.stringify(this.queryParams)&&(t=", {:params => ".concat(JSON.stringify(this.queryParams,null,2).replace(new RegExp(":","g")," => "),"}")),this.httpMethod){case"POST":return"require 'storyblok'\nclient = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')\n\npayload = ".concat(JSON.stringify(this.requestObject,null,2).replace(new RegExp(":","g")," => "),"\n\nclient.post('").concat(this.path,"', payload)");case"PUT":return"require 'storyblok'\nclient = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')\n\npayload = ".concat(JSON.stringify(this.requestObject,null,2).replace(new RegExp(":","g")," => "),"\n\nclient.put('").concat(this.path,"', payload)");case"DELETE":return"require 'storyblok'\nclient = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')\n\nclient.delete('".concat(this.path,"')");case"GETOAUTH":default:return"require 'storyblok'\nclient = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')\n\nclient.get('".concat(this.path,"'").concat(t,")")}}}},l=o(12),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.output("ruby"))}})}),[],!1,null,null,null);e.default=component.exports}}]);