(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3y5d":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class i{}var u=e("pMnS"),a=e("z/Lv"),s=e("FVZe"),o=e("i8We"),r=e("A1CB"),c=e("fvbr"),d=e("on8i"),p=e("Rgni"),m=e("SVse"),h=e("iInd"),y=e("1nAt");class f{constructor(l,n){this.appApi=l,this.store=n,this.playlists$=this.store.select(y.c),this.currentPlaylist$=this.store.select(y.d),this.isSignedIn$=this.store.select(y.a)}ngOnInit(){}signInUser(){this.appApi.signinUser()}}var v=e("DQLy"),g=[["app-user article{padding-bottom:5rem;padding-top:7rem}app-user h2 small{color:gray}app-user .youtube-items-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}"]],b=t["\u0275crt"]({encapsulation:2,styles:g,data:{}});function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"p",[["class","well lead"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" To view your playlists in youtube, you need to sign in. "])),(l()(),t["\u0275eld"](2,0,null,null,3,"button",[["class","btn btn-lg btn-primary"]],null,[[null,"click"]],function(l,n,e){var t=!0,i=l.component;"click"===n&&(t=!1!==i.signInUser()&&t);return t},null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"icon",[["name","google"]],null,null,null,null,null)),t["\u0275did"](4,606208,null,0,o.a,[t.ElementRef,t.Renderer2],{name:[0,"name"]},null),(l()(),t["\u0275ted"](-1,null,[" Sign In "]))],function(l,n){l(n,4,0,"google")},null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"article",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-navbar",[],null,null,null,r.b,r.a)),t["\u0275did"](2,114688,null,0,c.a,[d.a,p.a],{header:[0,"header"],headerIcon:[1,"headerIcon"]},null),(l()(),t["\u0275and"](16777216,null,null,2,null,w)),t["\u0275did"](4,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,m.AsyncPipe,[t.ChangeDetectorRef]),(l()(),t["\u0275eld"](6,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](7,212992,null,0,h.o,[h.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,n){var e=n.component;l(n,2,0,"My Profile - My Playlists","heart"),l(n,4,0,!t["\u0275unv"](n,4,0,t["\u0275nov"](n,5).transform(e.isSignedIn$))),l(n,7,0)},null)}var I=t["\u0275ccf"]("app-user",f,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-user",[],null,null,null,P,b)),t["\u0275did"](1,114688,null,0,f,[p.a,v.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=e("xg+j"),R=e("rJEC"),S=(e("dJ3e"),e("A60w")),k=e("V3/2");class A{constructor(l,n,e){this.nowPlaylistService=l,this.userProfile=n,this.store=e}playSelectedPlaylist(l){this.userProfile.fetchPlaylistItems(l.id,"").subscribe(l=>{this.store.dispatch(new S.h(l)),this.nowPlaylistService.updateIndexByMedia(l[0].id),this.store.dispatch(new k.c(l[0]))})}queuePlaylist(l){this.userProfile.fetchPlaylistItems(l.id,"").subscribe(l=>(this.store.dispatch(new S.h(l)),l))}queueVideo(l){this.store.dispatch(new S.g(l))}playVideo(l){this.store.dispatch(new k.c(l)),this.store.dispatch(new S.g(l)),this.store.dispatch(new S.n(l))}}class M{constructor(l,n){this.store=l,this.userPlayerService=n,this.playlists$=this.store.select(l=>l.user.playlists)}ngOnInit(){}playSelectedPlaylist(l){this.userPlayerService.playSelectedPlaylist(l)}queueSelectedPlaylist(l){this.userPlayerService.queuePlaylist(l)}}var F=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"youtube-playlist",[["link","/user/"]],null,[[null,"play"],[null,"queue"]],function(l,n,e){var t=!0,i=l.component;"play"===n&&(t=!1!==i.playSelectedPlaylist(l.context.$implicit)&&t);"queue"===n&&(t=!1!==i.queueSelectedPlaylist(l.context.$implicit)&&t);return t},C.b,C.a)),t["\u0275did"](1,49152,null,0,R.a,[],{media:[0,"media"],link:[1,"link"]},{play:"play",queue:"queue"})],function(l,n){l(n,1,0,n.context.$implicit,"/user/")},null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"section",[["class","videos-list"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","list-unstyled ux-maker youtube-items-container clearfix"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,N)),t["\u0275did"](3,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,m.AsyncPipe,[t.ChangeDetectorRef])],function(l,n){var e=n.component;l(n,3,0,t["\u0275unv"](n,3,0,t["\u0275nov"](n,4).transform(e.playlists$)))},null)}var O=t["\u0275ccf"]("playlists",M,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"playlists",[],null,null,null,L,F)),t["\u0275did"](1,114688,null,0,M,[v.m,A],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),x=e("s7LF"),T=e("QtUs"),q=e("IheW"),D=e("VZc2"),V=e("xXUb"),$=e("7iwo");class E{constructor(l,n){this.authorization=l,this.router=n}canActivate(l,n){const e=n.url;return this.checkLogin(e)}canActivateChild(l,n){return this.canActivate(l,n)}checkLogin(l){return!!this.authorization.isSignIn()||(this.router.navigate(["/user"]),!1)}}var U=e("//FL"),j=e("Hzbm"),z=e("MNke"),_=e("dyNX"),J=e("7mek"),X=e("M0ag"),Z=e("AZlO"),B=e("2gtn"),K=e("DRws"),Q=e("EAg1"),W=e("GZtC");e.d(n,"UserModuleNgFactory",function(){return G});var G=t["\u0275cmf"](i,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,a.a,s.a,I,O]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[t.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,x.o,x.o,[]),t["\u0275mpd"](4608,T.c,T.c,[t.NgZone]),t["\u0275mpd"](4608,q.k,q.u,[m.DOCUMENT,t.PLATFORM_ID,q.s]),t["\u0275mpd"](4608,q.v,q.v,[q.k,q.t]),t["\u0275mpd"](5120,q.p,q.q,[]),t["\u0275mpd"](4608,q.l,q.l,[q.p,m.DOCUMENT]),t["\u0275mpd"](5120,q.a,function(l,n){return[l,new q.m(n)]},[q.v,q.l]),t["\u0275mpd"](4608,q.r,q.r,[]),t["\u0275mpd"](6144,q.n,null,[q.r]),t["\u0275mpd"](4608,q.j,q.j,[q.n]),t["\u0275mpd"](6144,q.b,null,[q.j]),t["\u0275mpd"](4608,q.g,q.o,[q.b,t.Injector]),t["\u0275mpd"](4608,q.c,q.c,[q.g]),t["\u0275mpd"](4608,D.a,D.a,[v.m,V.c,$.a,p.a]),t["\u0275mpd"](4608,E,E,[d.a,h.k]),t["\u0275mpd"](4608,A,A,[U.a,j.a,v.m]),t["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),t["\u0275mpd"](1073742336,x.m,x.m,[]),t["\u0275mpd"](1073742336,x.g,x.g,[]),t["\u0275mpd"](1073742336,h.n,h.n,[[2,h.t],[2,h.k]]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,q.f,q.f,[]),t["\u0275mpd"](1073742336,q.e,q.e,[]),t["\u0275mpd"](1073742336,q.d,q.d,[]),t["\u0275mpd"](1073742336,_.a,_.a,[]),t["\u0275mpd"](1073742336,J.TooltipModule,J.TooltipModule,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,q.s,"XSRF-TOKEN",[]),t["\u0275mpd"](256,q.t,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,h.i,function(){return[[{path:"playlist/:id",component:K.a,resolve:{videos:Q.a,playlist:W.a}}],[{path:"",component:f,children:[{path:"",redirectTo:"playlists",pathMatch:"full"},{path:"playlists",component:M},{path:"playlist/:id",component:K.a,canActivate:[E],canActivateChild:[E],resolve:{videos:Q.a,playlist:W.a}}]}]]},[])])})}}]);
//# sourceMappingURL=0.6309d006e051c67b7582.js.map