import{S as q,i as z,s as G,e as f,t as $,k as D,c as v,a as d,h as N,d as i,m as F,b as n,g as L,J as a,n as M,x as R,y as T,z as B,L as J,j as O,r as P,p as U,C as Y}from"../../chunks/index-0b8a7a3e.js";import{b as V}from"../../chunks/paths-396f020f.js";function K(x){let e,t,r,s,h,c,w,m,o,g;return{c(){e=f("div"),t=f("nav"),r=f("a"),s=$("Home"),h=D(),c=f("a"),w=$("About Me"),m=D(),o=f("a"),g=$("My Achievements"),this.h()},l(_){e=v(_,"DIV",{class:!0});var p=d(e);t=v(p,"NAV",{class:!0});var l=d(t);r=v(l,"A",{href:!0,class:!0});var k=d(r);s=N(k,"Home"),k.forEach(i),h=F(l),c=v(l,"A",{href:!0,class:!0});var b=d(c);w=N(b,"About Me"),b.forEach(i),m=F(l),o=v(l,"A",{href:!0,class:!0});var E=d(o);g=N(E,"My Achievements"),E.forEach(i),l.forEach(i),p.forEach(i),this.h()},h(){n(r,"href",V+"/"),n(r,"class","svelte-1u5wy80"),n(c,"href",V+"/#about"),n(c,"class","svelte-1u5wy80"),n(o,"href",V+"/#portfolio"),n(o,"class","svelte-1u5wy80"),n(t,"class","svelte-1u5wy80"),n(e,"class","wrapper")},m(_,p){L(_,e,p),a(e,t),a(t,r),a(r,s),a(t,h),a(t,c),a(c,w),a(t,m),a(t,o),a(o,g)},p:M,i:M,o:M,d(_){_&&i(e)}}}class Q extends q{constructor(e){super(),z(this,e,null,K,G,{})}}function W(x){let e,t,r,s,h,c,w,m,o=(x[0]||"")+"",g,_,p,l,k,b,E,I;return t=new Q({}),{c(){e=f("div"),R(t.$$.fragment),r=D(),s=f("div"),h=f("h2"),c=$("Random Fact About Numbers"),w=D(),m=f("p"),g=$(o),_=D(),p=f("div"),l=f("button"),k=$("Get Fact!"),this.h()},l(u){e=v(u,"DIV",{class:!0,id:!0});var y=d(e);T(t.$$.fragment,y),r=F(y),s=v(y,"DIV",{class:!0});var A=d(s);h=v(A,"H2",{class:!0});var j=d(h);c=N(j,"Random Fact About Numbers"),j.forEach(i),w=F(A),m=v(A,"P",{class:!0});var C=d(m);g=N(C,o),C.forEach(i),_=F(A),p=v(A,"DIV",{class:!0});var H=d(p);l=v(H,"BUTTON",{class:!0});var S=d(l);k=N(S,"Get Fact!"),S.forEach(i),H.forEach(i),A.forEach(i),y.forEach(i),this.h()},h(){n(h,"class","svelte-1836pkr"),n(m,"class","svelte-1836pkr"),n(l,"class","svelte-1836pkr"),n(p,"class","button_wrapper svelte-1836pkr"),n(s,"class","api"),n(e,"class","wrapper"),n(e,"id","api")},m(u,y){L(u,e,y),B(t,e,null),a(e,r),a(e,s),a(s,h),a(h,c),a(s,w),a(s,m),a(m,g),a(s,_),a(s,p),a(p,l),a(l,k),b=!0,E||(I=J(l,"click",x[1]),E=!0)},p(u,[y]){(!b||y&1)&&o!==(o=(u[0]||"")+"")&&O(g,o)},i(u){b||(P(t.$$.fragment,u),b=!0)},o(u){U(t.$$.fragment,u),b=!1},d(u){u&&i(e),Y(t),E=!1,I()}}}const ae=!1;function X(){return fetch("http://numbersapi.com/random/math").then(x=>x.text())}function Z(x,e,t){let r;async function s(){t(0,r="Loading..."),t(0,r=await X())}return[r,s]}class se extends q{constructor(e){super(),z(this,e,Z,W,G,{})}}export{se as default,ae as prerender};