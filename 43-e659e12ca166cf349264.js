(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"+S1Z":function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return h}));var t=a("q1tI"),i=a.n(t),r=a("9Koi"),l=a("Wbzz"),c=a("vOnD"),o=a("JSho"),u=a("hlFM"),s=a("1NhI"),d=a("AaR6"),m=a("7Qib"),g=a("6shs"),p=Object(c.e)(o.b).withConfig({displayName:"ConfirmedCaseDigestAge__AgeWrapper",componentId:"sc-uimx26-0"})(["flex-direction:row;","{flex-direction:column;}","{flex-direction:row;}"],d.b.between("md","lg"),d.b.up("lg")),f=Object(c.e)(u.a).withConfig({displayName:"ConfirmedCaseDigestAge__AgeBox",componentId:"sc-uimx26-1"})(["","{text-align:center;}"],d.b.up("md")),_=c.e.h4.withConfig({displayName:"ConfirmedCaseDigestAge__AgeTitle",componentId:"sc-uimx26-2"})(["display:inline;","{display:block;font-size:18px;}"],d.b.up("md")),b=c.e.span.withConfig({displayName:"ConfirmedCaseDigestAge__DataValue",componentId:"sc-uimx26-3"})(["","{font-size:48px;line-height:1.4;}"],d.b.up("md"));function h(e){var n=Object(r.a)().t,a=Object(l.useStaticQuery)("3948477228"),t=a.age.nodes,c=a.genderAge.group,o={ageArray:t,genderAge:c,female:c.find((function(e){return"F"===e.fieldValue})),male:c.find((function(e){return"M"===e.fieldValue}))},u=o.ageArray.map((function(e){return+e.age})),d=i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,null,i.a.createElement(p,null,i.a.createElement(f,null,i.a.createElement(_,null,n("cases_visual.age_range_title")),i.a.createElement(s.a,{mdUp:!0},": "),i.a.createElement(b,null,""+n("cases_visual.age_range",{min:u[0],max:u[o.ageArray.length-1]})),i.a.createElement(s.a,{smDown:!0},n("cases_visual.age_unit"))),i.a.createElement(f,null,i.a.createElement(_,null,""+n("cases_visual.median_age",{gender:n("dashboard.gender_"+o.male.fieldValue)})),i.a.createElement(s.a,{mdUp:!0},": "),i.a.createElement(b,null,Object(m.e)(o.male.edges.filter((function(e){return e.node.age})).map((function(e){return parseInt(e.node.age)})))),i.a.createElement(s.a,{smDown:!0},n("cases_visual.age_unit"))),i.a.createElement(f,null,i.a.createElement(_,null,""+n("cases_visual.median_age",{gender:n("dashboard.gender_"+o.female.fieldValue)})),i.a.createElement(s.a,{mdUp:!0},": "),i.a.createElement(b,null,Object(m.e)(o.female.edges.filter((function(e){return e.node.age})).map((function(e){return parseInt(e.node.age)})))),i.a.createElement(s.a,{smDown:!0},n("cases_visual.age_unit"))))));return i.a.createElement(i.a.Fragment,null,d)}},"6shs":function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a("zLVn"),i=a("q1tI"),r=a.n(i),l=a("vOnD"),c=a("hlFM"),o=["children"],u=Object(l.e)(c.a).withConfig({displayName:"Card__StyledBox",componentId:"sc-wdkuw5-0"})(["background:",";border-radius:12px;padding:16px;margin:16px 0;box-shadow:none;"],(function(e){return e.theme.palette.background.paper}));function s(e){var n=e.children,a=Object(t.a)(e,o);return r.a.createElement(u,a,n)}},JSho:function(e,n,a){"use strict";a.d(n,"c",(function(){return i})),a.d(n,"b",(function(){return r})),a.d(n,"a",(function(){return l}));var t=a("vOnD"),i=t.e.div.withConfig({displayName:"Row__UnstyledRow",componentId:"sc-15ul58p-0"})(["font-size:","px;margin:0;padding:0;display:flex;justify-content:space-between;align-items:center;"],(function(e){return e.theme.typography.smallFontSize})),r=Object(t.e)(i).withConfig({displayName:"Row",componentId:"sc-15ul58p-1"})(["margin:6px 0 6px;"]),l=Object(t.e)(r).withConfig({displayName:"Row__FlexStartRow",componentId:"sc-15ul58p-2"})(["&&{justify-content:flex-start;div{margin-right:64px;}}"])}}]);