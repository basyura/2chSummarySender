// ==UserScript==
// @name        2chSummarySender
// @namespace	2chSummarySender@basyura.org
// @include     http://2ch.xn--o9j0bk.gaasuu.com/entry/*
// @version     1.0
// ==/UserScript==


//var a = document.evaluate("//div[@class='yui-g entry-full']/div/h2/a" , 
var a = document.evaluate("//h2/a" ,
                          document ,  
			  null , 
			  XPathResult.FIRST_ORDERED_NODE_TYPE ,
			  null).singleNodeValue;
window.location = a.href;
