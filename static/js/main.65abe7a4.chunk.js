(this["webpackJsonpmodal-filter-app"]=this["webpackJsonpmodal-filter-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),r=a.n(o),l=(a(21),a(2)),i=(a(22),function(e){var t=e.openNavbar;return c.a.createElement("button",{onClick:t,className:"toggle-button",type:"button"},c.a.createElement("div",{className:"toggle-button__line"}),c.a.createElement("div",{className:"toggle-button__line"}),c.a.createElement("div",{className:"toggle-button__line"}))}),s=(a(23),function(e){var t=e.closeFunction,a=e.children;return c.a.createElement("div",{className:"backdrop",onClick:t},a)});s.defaultProps={closeFunction:function(){},children:""};var u=s,m=a(14),d=a(3),f="book",E="chart",b="phone",p="envelope",A="info",N="search",y="sort",v="calendar",D="next",O="previous",h={PERNAMENT:"Umowa o prac\u0119",PERIOD:"Umowa zlecenie",TASK:"Umowa o dzie\u0142o"},k=Object.values(h),g={COOK:"Kucharz",WAITER:"Kelner",CLEANER:"Konserwator",HELP:"Pomoc kuchenna",SERVICE:"Serwisant"},j=Object.values(g),S={ARKADY:"Arkady",PASAZ:"Pasa\u017c Grunwaldzki",BIELANY:"Aleja Bielany"},w=Object.values(S),_=["Imi\u0119 i nazwisko","Data","Stanowisko","Warunki zatrudnienia","Lokalizacje"],C={date:{startDate:null,endDate:null},jobs:[],locations:[],agreements:[],employees:[]},R={date:{startDate:null,endDate:null},jobs:[],locations:[],agreements:[]},P=[{ICON_NAME:"book",TEXT:"Pracownicy"},{ICON_NAME:"chart",TEXT:"Analiza"},{ICON_NAME:"phone",TEXT:"Kontakty"},{ICON_NAME:"envelope",TEXT:"Wiadomo\u015bci"}],K=[{id:1,name:"Adam Adamski",date:new Date(2020,0,1),job:g.COOK,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:2,name:"Bernadeta Bednarska",date:new Date(2020,1,2),job:g.WAITER,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:3,name:"Cecylia Cedy\u0144ska",date:new Date(2020,2,3),job:g.CLEANER,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]},{id:4,name:"Denis Dembski",date:new Date(2020,3,4),job:g.HELP,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:5,name:"Ernest Etstkowski",date:new Date(2020,4,5),job:g.SERVICE,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:6,name:"Franciszek Fretka",date:new Date(2020,5,6),job:g.COOK,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]},{id:7,name:"Gra\u017cyna Gasiuk",date:new Date(2020,6,7),job:g.WAITER,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:8,name:"Henryk Henrykowski",date:new Date(2020,7,8),job:g.CLEANER,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:9,name:"Irena Isierska",date:new Date(2020,8,9),job:g.HELP,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]},{id:10,name:"Jakub J\u0119drzychowski",date:new Date(2020,9,10),job:g.SERVICE,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:11,name:"Katarzyna Katarska",date:new Date(2020,10,11),job:g.COOK,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:12,name:"Lucjan Lukrowicz",date:new Date(2020,11,12),job:g.WAITER,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]},{id:13,name:"Miko\u0142aj Mi\u0142os\u0142awski",date:new Date(2020,0,13),job:g.CLEANER,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:14,name:"Nicol Ni\u017cna",date:new Date(2020,1,14),job:g.HELP,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:15,name:"Oskar Oparski",date:new Date(2020,2,15),job:g.SERVICE,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]},{id:16,name:"Patryk Przybylski",date:new Date(2020,3,16),job:g.COOK,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:17,name:"Roksana Rusiecka",date:new Date(2020,4,17),job:g.WAITER,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:18,name:"Sabina Sadowska",date:new Date(2020,5,18),job:g.CLEANER,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]},{id:19,name:"Tomasz Tokarz",date:new Date(2020,6,19),job:g.HELP,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:20,name:"Urszula Uniejska",date:new Date(2020,7,20),job:g.SERVICE,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:21,name:"Waldemar Wolski",date:new Date(2020,8,21),job:g.COOK,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]},{id:22,name:"Zofia Zamojska",date:new Date(2020,9,22),job:g.WAITER,agreement:h.PERNAMENT,locations:[S.ARKADY]},{id:23,name:"Adrianna Adamska",date:new Date(2020,10,23),job:g.CLEANER,agreement:h.PERIOD,locations:[S.ARKADY,S.PASAZ]},{id:24,name:"Tomasz Adamski",date:new Date(2020,11,24),job:g.HELP,agreement:h.TASK,locations:[S.ARKADY,S.PASAZ,S.BIELANY]}],F=[{title:"Stanowiska",options:j,filterKey:"jobs"},{title:"Lokalizacje",options:w,filterKey:"locations"},{title:"Pracownicy",options:K,filterKey:"employees"},{title:"Warunki zatrudnienia",options:k,filterKey:"agreements"}],I=(a(29),function(e){var t=e.iconName,a=e.customCSSClass,n=f,o=E,r=b,l=p,i=A,s=N,u=y,h=v,k=D,g=O;return c.a.createElement(m.a,{icon:function(e){switch(e){case n:return d.a;case o:return d.c;case r:return d.h;case l:return d.f;case i:return d.g;case s:return d.i;case u:return d.j;case h:return d.b;case k:return d.e;case g:return d.d;default:return d.g}}(t),className:a?"icon--".concat(a):"icon"})});I.defaultProps={iconName:"",customCSSClass:""};var L=I,T=(a(30),function(e){var t=e.isNavbarOpen;return c.a.createElement("nav",{className:"navbar ".concat(t&&"navbar--open")},c.a.createElement("ul",{className:"navbar__list"},P.map((function(e){var t=e.ICON_NAME,a=e.TEXT;return c.a.createElement("li",{className:"navbar__item",key:t},c.a.createElement(L,{iconName:t}),c.a.createElement("span",null,a))}))))}),z=(a(31),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,{openNavbar:function(){o(!0)}}),c.a.createElement(T,{isNavbarOpen:a}),a&&c.a.createElement(u,{closeFunction:function(){o(!1)}}))}),M=a(15),Y=a(8),x=a(5),W=(a(32),function(e){var t=e.text,a=e.buttonFunction;return c.a.createElement("button",{onClick:a,type:"button",className:"primary-button"},t)});W.defaultProps={buttonFunction:function(){}};var Z=W,B=(a(33),function(e){var t=e.placeholder,a=e.isDropdown,n=e.handeNameSearchChange,o=e.handleKeyPress;return c.a.createElement("div",{className:a?"text-input--container":void 0},a&&c.a.createElement(L,{iconName:N,customCSSClass:N}),c.a.createElement("input",{type:"text",placeholder:t,className:a?"text-input--dropdown":"text-input",onChange:n,onKeyPress:o}))});B.defaultProps={isDropdown:!1,handeNameSearchChange:function(){},handleKeyPress:function(){}};var H=B,J=(a(34),function(e){var t=e.data;return c.a.createElement("tr",{className:"table-row-head"},c.a.createElement(c.a.Fragment,null,t.map((function(e,t){return c.a.createElement("th",{className:t>0?"table-row-head__cell--high":void 0,key:e},e)})),c.a.createElement("th",{className:"table-row-head__cell--low"},"Szczeg\xf3\u0142y")))}),V=(a(35),function(e){var t=e.data;return c.a.createElement("thead",{className:"table-head"},c.a.createElement(J,{data:t}))}),U=a(1),q=a.n(U),X=function(){return window.innerWidth},G=function(e,t){return t.filter((function(t){var a="string"===typeof t?t:t.name;return e?a.toLowerCase().includes(e.toLowerCase()):t}))},Q=function(e){if(e instanceof Date){var t=e.getDay(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(t,"/").concat(a<10?"0".concat(a):a,"/").concat(n)}return"-"},$=q.a.shape({id:q.a.number.isRequired,name:q.a.string.isRequired,date:q.a.instanceOf(Date).isRequired,job:q.a.string.isRequired,agreement:q.a.string.isRequired,locations:q.a.arrayOf(q.a.string).isRequired}),ee=(q.a.shape({date:q.a.shape({startDate:q.a.oneOfType([q.a.instanceOf(Date),q.a.oneOf([null])]),endDate:q.a.oneOfType([q.a.instanceOf(Date),q.a.oneOf([null])])}),jobs:q.a.arrayOf(q.a.string),locations:q.a.arrayOf(q.a.string),agreements:q.a.arrayOf(q.a.string),employees:q.a.arrayOf($)}),a(36),function(e){var t=e.data,a=t.name,n=t.date,o=t.job,r=t.agreement,l=t.locations;return c.a.createElement("tr",{className:"table-row-body"},c.a.createElement("td",null,a),c.a.createElement("td",{className:"table-row-body__cell--high"},Q(n)),c.a.createElement("td",{className:"table-row-body__cell--high"},o),c.a.createElement("td",{className:"table-row-body__cell--high"},r),c.a.createElement("td",{className:"table-row-body__cell--high"},l.map((function(e,t){return t===l.length-1?e:"".concat(e,", ")}))),c.a.createElement("td",{className:"table-row-body__cell--low"},c.a.createElement(L,{iconName:A})))}),te=(a(37),function(e){var t=e.data,a=e.isValid;return c.a.createElement("tbody",{className:"table-body ".concat(a?void 0:"table-body--empty")},a?t.map((function(e){return c.a.createElement(ee,{data:e,key:e.id})})):c.a.createElement("tr",null,c.a.createElement("td",null,"Brak wynik\xf3w spe\u0142niaj\u0105cych wymagania")))});te.defaultProps={data:[]};var ae=te,ne=(a(38),function(e){var t=e.recordsNumber;return c.a.createElement("tfoot",{className:"table-foot"},c.a.createElement("tr",null,c.a.createElement("td",null,"Suma rekord\xf3w wynosi: ",t)))}),ce=(a(39),function(e){var t=e.data,a=t.length;return c.a.createElement("table",{className:"table-custom"},c.a.createElement(V,{data:_}),c.a.createElement(ae,{data:t,isValid:!!a}),c.a.createElement(ne,{recordsNumber:a}))});ce.defaultProps={data:[]};var oe=ce,re=a(11),le=(a(40),function(e){var t=e.element,a=e.isChecked,n="string"===typeof t?t:t.name;return c.a.createElement("div",{className:"checkbox",onClick:function(e){return function(e){e.preventDefault()}(e)},role:"button",tabIndex:0},c.a.createElement("label",{htmlFor:n,className:"checkbox__label ".concat(a?"checkbox__label--checked":void 0)},n,c.a.createElement("input",{type:"checkbox",id:n,className:"checkbox__input"})))}),ie=(a(41),function(e){var t=e.selectOptions,a=e.filtredRecords,o=e.selectedOptions,r=e.setSelectedOptions,i=e.isEmployeesMultiselect,s=e.areFiltersEmpty,u=i?a:t,m=Object(n.useState)(""),d=Object(l.a)(m,2),f=d[0],E=d[1],b=Object(n.useState)(u),p=Object(l.a)(b,2),A=p[0],N=p[1];Object(n.useEffect)((function(){N(i&&s?[]:G(f,u))}),[f,s]);var y=40*u.length+1,v=y>=161?161:y,D=80+v,O=A.length,h=JSON.stringify(A)===JSON.stringify(o);return c.a.createElement("div",{className:"multiselect-dropdown",style:{height:"".concat(D,"px")}},c.a.createElement("div",{className:"multiselect-dropdown__element"},c.a.createElement(H,{placeholder:"Szukaj...",isDropdown:!0,handeNameSearchChange:function(e){var t=e.target.value;E(t)}})),c.a.createElement("div",{className:"multiselect-dropdown__element",onClick:function(){return r(h?[]:A)}},c.a.createElement(le,{element:"Wszystkie",isChecked:h&&!!O})),c.a.createElement("ul",{className:"multiselect-dropdown__list ".concat(O?void 0:"multiselect-dropdown__list--empty"),style:{height:"".concat(v,"px")}},O?A.map((function(e){var t="string"===typeof e?e:e.name;return c.a.createElement("li",{key:t,className:"multiselect-dropdown__element",onClick:function(){return function(e){var t=o.indexOf(e);if(t>-1){var a=Object(re.a)(o);a.splice(t,1),r(a)}else{var n=[].concat(Object(re.a)(o),[e]);r(n)}}(e)},role:"menuitem"},c.a.createElement(le,{element:e,isChecked:o.includes(e)}))})):"Brak element\xf3w"))}),se=(a(42),function(e){var t=e.title,a=e.options,o=e.handleModalRuleChange,r=e.isAnyModalOpen,i=e.updateFilterValues,s=e.filterKey,u=e.areFiltersEmpty,m=e.filtredRecords,d=Object(n.useState)(!1),f=Object(l.a)(d,2),E=f[0],b=f[1],p=Object(n.useState)([]),A=Object(l.a)(p,2),N=A[0],v=A[1],D=function(){var e=Object(n.useState)(X()),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){c(X())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}()<=500;Object(n.useEffect)((function(){i(s,N)}),[N]);var O="employees"===s,h=N.every((function(e){return m.includes(e)})),k=function(e){return"object"===typeof e?e.name:e};return c.a.createElement("div",{className:"modal-multiselect"},c.a.createElement("div",{className:"modal-multiselect__texts-container",onClick:r?function(){E&&(b(!1),o(!1))}:function(){b(!0),o(!0)}},c.a.createElement("span",{className:"modal-multiselect__description"},t),c.a.createElement("div",{className:"modal-multiselect__value-container"},c.a.createElement("div",{className:"modal-multiselect__value"},function(){var e=N.length;if(!e)return"Wybierz";O&&function(){if(u||!h)v([])}();var t=k(N[0]),a="".concat(t,"  +").concat(e-1);switch(e){case 1:return"".concat(t);case 2:return D?a:"".concat(t,", ").concat(k(N[1]));default:return D?a:"".concat(t,", ").concat(k(N[1])," +").concat(e-2)}}()),c.a.createElement(L,{iconName:y,customCSSClass:y}))),E&&c.a.createElement(ie,{selectOptions:a,filtredRecords:m,selectedOptions:N,setSelectedOptions:v,isEmployeesMultiselect:O,areFiltersEmpty:u}))}),ue=a(4),me={January:"Stycze\u0144",February:"Luty",March:"Marzec",April:"Kwiecie\u0144",May:"Maj",June:"Czerwiec",July:"Lipiec",August:"Sierpie\u0144",September:"Wrzesie\u0144",October:"Pa\u017adziernik",November:"Listopad",December:"Grudzie\u0144"},de=c.a.createContext({focusedDate:null,isDateFocused:function(){return!1},isDateSelected:function(){return!1},isDateHovered:function(){return!1},isDateBlocked:function(){return!1},isFirstOrLastSelectedDate:function(){return!1},onDateFocus:function(){},onDateHover:function(){},onDateSelect:function(){}}),fe=(a(43),"#ffffff"),Ee="#000000",be="#ff6b01",pe="#ffac71",Ae=function(e){var t=e.dayLabel,a=e.date,o=Object(n.useContext)(de),r=Object(ue.c)(Object(x.a)({date:a},o)),l=r.isSelected,i=r.isSelectedStartOrEnd,s=r.onClick,u=function(e,t){return function(a){var n=a.selectedFirstOrLastColor,c=a.normalColor,o=a.selectedColor;return t?n:e?o:c}}(l,i);return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("button",{onClick:s,type:"button",className:"day-button",style:{color:u({selectedFirstOrLastColor:fe,normalColor:Ee,selectedColor:fe}),background:u({selectedFirstOrLastColor:be,normalColor:fe,selectedColor:pe})}},t):c.a.createElement("div",null))};Ae.defaultProps={dayLabel:""};var Ne=Ae,ye=(a(44),["Pon","Wto","\u015aro","Czw","Pi\u0105","Sob","Nie"]),ve=function(e){var t=e.year,a=e.month,n=e.firstDayOfWeek,o=Object(ue.d)({year:t,month:a,firstDayOfWeek:n}),r=o.days,l=o.monthLabel;return c.a.createElement("div",{className:"month"},c.a.createElement("div",{className:"month__month-label"},c.a.createElement("strong",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.split(" "),a=me[t[0]];return"".concat(a," ").concat(t[1])}())),c.a.createElement("div",{className:"month__day-container"},ye.map((function(e){return c.a.createElement("div",{className:"month__day-label",key:e},e)}))),c.a.createElement("div",{className:"month__day-space"},r.map((function(e,t){return e?c.a.createElement(Ne,{date:e.date,key:e.date.toString(),dayLabel:e.dayLabel}):c.a.createElement("div",{key:t})}))))},De=(a(45),function(e){var t=e.iconName,a=e.onClick;return c.a.createElement("button",{className:"nav-button",type:"button",onClick:a},c.a.createElement(L,{iconName:t,customCSSClass:t}))});De.defaultProps={onClick:function(){}};var Oe=De,he=(a(46),function(e){var t=e.text,a=e.clickFunction;return c.a.createElement("div",{onClick:a,role:"button",tabIndex:0,className:"date-picker-control "},t)});he.defaultProps={clickFunction:function(){}};var ke=he,ge=(a(47),function(e){var t=e.pickerState,a=t.startDate,n=t.endDate,o=t.focusedInput,r=e.handleDateChange,l=e.closeDropdown,i=e.clearDatePicker,s=Object(ue.b)({startDate:a,endDate:n,focusedInput:o,onDatesChange:r}),u=s.firstDayOfWeek,m=s.activeMonths,d=s.isDateSelected,f=s.isDateHovered,E=s.isFirstOrLastSelectedDate,b=s.isDateBlocked,p=s.isDateFocused,A=s.focusedDate,N=s.onDateHover,y=s.onDateSelect,v=s.onDateFocus,h=s.goToPreviousMonthsByOneMonth,k=s.goToNextMonthsByOneMonth,g=m[0].month,j=m[0].year,S=function(e,t){return g===e?null:t};return c.a.createElement(de.Provider,{value:{focusedDate:A,isDateFocused:p,isDateSelected:d,isDateHovered:f,isDateBlocked:b,isFirstOrLastSelectedDate:E,onDateSelect:y,onDateFocus:v,onDateHover:N}},c.a.createElement("div",{className:"date-picker"},c.a.createElement("div",{className:"date-picker__controls-container"},c.a.createElement(ke,{text:"Wyczy\u015b\u0107",clickFunction:i}),c.a.createElement(ke,{text:"Zamknij",clickFunction:l})),c.a.createElement(ve,{year:j,month:g,firstDayOfWeek:u}),c.a.createElement("div",{className:"date-picker__butons-container"},c.a.createElement(Oe,{iconName:O,onClick:S(0,h)}),c.a.createElement(Oe,{iconName:D,onClick:S(11,k)}))))});ge.defaultProps={closeDropdown:function(){}};var je=ge,Se=(a(48),{startDate:null,endDate:null,focusedInput:ue.a}),we=function(e){var t=e.handleModalRuleChange,a=e.isAnyModalOpen,o=e.updateFilterValues,r=Object(n.useState)(!1),i=Object(l.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)(Se),d=Object(l.a)(m,2),f=d[0],E=d[1],b=function(){s&&(u(!1),t(!1))},p=f.startDate,A=f.endDate;Object(n.useEffect)((function(){o("date",{startDate:p,endDate:A})}),[f]);var N=function(e){if(e instanceof Date){var t=e.getDate(),a=e.getMonth()+1;return"".concat(t,".").concat(a<10?"0".concat(a):a)}return""},y=p?"".concat(N(p)," - ").concat(N(A)):"Wybierz",D=a&&A||a&&!p&&!A;return c.a.createElement("div",{className:"modal-date"},c.a.createElement("div",{className:"modal-date__texts-container",onClick:D?b:function(){u(!0),t(!0)}},c.a.createElement(L,{iconName:v,customCSSClass:v}),c.a.createElement("div",{className:"modal-date__value-container"},c.a.createElement("span",{className:"modal-date__description"},"Okres"),c.a.createElement("div",{className:"modal-date__value"},y))),s&&c.a.createElement(je,{pickerState:f,handleDateChange:function(e){e.focusedInput?E(e):E(Object(x.a)(Object(x.a)({},e),{},{focusedInput:ue.a}))},clearDatePicker:function(){E(Se)},closeDropdown:D?b:null}))},_e=(a(49),function(e){var t=e.text,a=e.buttonFunction,n=e.isDisabled;return c.a.createElement("button",{onClick:a,type:"button",className:"secondary-button",disabled:n},t)});_e.defaultProps={buttonFunction:function(){},isDisabled:!1},_e.defaultProps={};var Ce=_e,Re=(a(50),function(e){var t=e.updateFilterValues,a=e.handleTableDisplay,o=e.filtredRecords,r=e.isEmployeeSelected,i=e.areFiltersEmpty,s=e.modalCloseFunction,u=Object(n.useState)(!1),m=Object(l.a)(u,2),d=m[0],f=m[1],E=function(e){f(e)};return c.a.createElement("div",{className:"modal"},c.a.createElement("button",{onClick:s,className:"modal__close-button",type:"button"},"x"),c.a.createElement("h2",{className:"modal__heading"},"Wybierz pracownik\xf3w"),c.a.createElement("div",{className:"modal__select-container"},c.a.createElement(we,{handleModalRuleChange:E,isAnyModalOpen:d,updateFilterValues:t}),F.map((function(e){var a=e.title,n=e.options,r=e.filterKey;return c.a.createElement(se,{title:a,options:n,handleModalRuleChange:E,isAnyModalOpen:d,updateFilterValues:t,filterKey:r,areFiltersEmpty:i,filtredRecords:o,key:r})}))),c.a.createElement("div",{className:"modal__button-container"},c.a.createElement(Ce,{text:"WY\u015aWIETL",buttonFunction:a,isDisabled:!r})))}),Pe=(a(51),function(e){var t=e.searchFilters,a=t.date,n=a.startDate,o=a.endDate,r=t.jobs,l=t.locations,i=t.agreements,s=function(e){return e.length?e.map((function(t,a){return a===e.length-1?t:" ".concat(t,", ")})):"-"};return c.a.createElement("div",{className:"filters-info"},c.a.createElement("p",{className:"filters-info__title"},"U\u017cyto nast\u0119puj\u0105cych filtr\xf3w:"),c.a.createElement("p",null,c.a.createElement("strong",null,"Data pocz\u0105tkowa"),":"," ",Q(n)),c.a.createElement("p",null,c.a.createElement("strong",null,"Data ko\u0144cowa"),": ",Q(o)),c.a.createElement("p",null,c.a.createElement("strong",null,"Stanowiska:")," ",s(r)),c.a.createElement("p",null,c.a.createElement("strong",null,"Lokalizacje:")," ",s(l)),c.a.createElement("p",null,c.a.createElement("strong",null,"Typ zatrudnienia"),":"," ",s(i)))}),Ke=(a(52),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),s=i[0],m=i[1],d=Object(n.useState)(!1),f=Object(l.a)(d,2),E=f[0],b=f[1],p=Object(n.useState)(""),A=Object(l.a)(p,2),N=A[0],y=A[1],v=Object(n.useState)(C),D=Object(l.a)(v,2),O=D[0],h=D[1],k=Object(n.useState)([]),g=Object(l.a)(k,2),j=g[0],S=g[1],w=Object(n.useState)([]),_=Object(l.a)(w,2),P=_[0],F=_[1],I=function(){o(!1)},L=function(){b(!0),setTimeout((function(){b(!1),m(!0)}),1e3)};Object(n.useEffect)((function(){F(G(N,K))}),[N]),Object(n.useEffect)((function(){S(function(e,t){var a=e.date,n=a.startDate,c=a.endDate,o=e.jobs,r=e.locations,l=e.agreements;return t.filter((function(e){return n?e.date>=n:e})).filter((function(e){return c?e.date<=c:e})).filter((function(e){return o.length?o.includes(e.job):e})).filter((function(e){return r.length?r.some((function(t){return e.locations.includes(t)})):e})).filter((function(e){return l.length?l.includes(e.agreement):e}))}(O,K))}),[O]);O.employees;var T=Object(M.a)(O,["employees"]),z=JSON.stringify(T)===JSON.stringify(R);return c.a.createElement("article",{className:"main"},s?c.a.createElement("section",{className:"main__section-table"},c.a.createElement(oe,{data:P}),c.a.createElement("div",{className:"main__filters-info-container"},c.a.createElement(Pe,{searchFilters:O}),c.a.createElement(Z,{text:"PON\xd3W",buttonFunction:function(){m(!1),y(""),h(C),S([]),F(K)}}))):c.a.createElement("section",{className:"main__section-search"},c.a.createElement("div",{className:"main__input-container"},c.a.createElement(H,{placeholder:"Wyszukaj po imieniu i nazwisku...",handeNameSearchChange:function(e){var t=e.target.value;y(t)},handleKeyPress:function(e){"Enter"===e.key&&L()}})),c.a.createElement("div",{className:"main__buttons-container"},c.a.createElement(Z,{text:"SZUKAJ",buttonFunction:L}),c.a.createElement(Z,{text:"FILTRUJ",buttonFunction:function(){y(""),o(!0)}}))),a&&c.a.createElement("section",null,c.a.createElement(Re,{updateFilterValues:function(e,t){h(Object(x.a)(Object(x.a)({},O),{},Object(Y.a)({},e,t)))},handleTableDisplay:function(){F(O.employees),I(),L()},filtredRecords:j,isEmployeeSelected:!!O.employees.length,areFiltersEmpty:z,modalCloseFunction:I}),c.a.createElement(u,null)),E&&c.a.createElement(u,null,"Loading..."))}),Fe=(a(53),function(){return c.a.createElement("div",{className:"app"},c.a.createElement(z,null),c.a.createElement(Ke,null))});r.a.render(c.a.createElement(Fe,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.65abe7a4.chunk.js.map