if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const b=e=>i(e,r),n={module:{uri:r},exports:c,require:b};s[r]=Promise.all(a.map((e=>n[e]||b(e)))).then((e=>(d(...e),c)))}}define(["./workbox-97d31bb8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"636f90191e591d16887abfd5fa2520f9"},{url:"android-chrome-512x512.png",revision:"c2b052ac8908f85c333dbb0eebc9fc1c"},{url:"apple-touch-icon.png",revision:"eeb6052564d9e0894bf2a0950ca5c8d2"},{url:"build/assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"build/assets/AccordionTrigger-0DBMEuX_.js",revision:"3205d6b390698b98a94eeb337c55c8a4"},{url:"build/assets/ActionSection-Ch6ORAN_.js",revision:"dd4e86288e2d7ea5b91e7c0dfb343c83"},{url:"build/assets/AlertDescription-JrwDD1vQ.js",revision:"3aad2882855b02ebd45cd3486a0185f3"},{url:"build/assets/AlertTitle-BRnJV7ox.js",revision:"2e07e6fb2314ce3b9ec53c1da60107c9"},{url:"build/assets/AnnouncementsCard-CMsY7IkG.js",revision:"940fbe550412e3766cc142401d3e3cfe"},{url:"build/assets/ApiTokenManager-DfeSdYeG.js",revision:"47047151179fc0eac4c3f3e4e09e0211"},{url:"build/assets/app-BjE7ZQ_P.js",revision:"11bd625195c8707d9f7b6efe626713cf"},{url:"build/assets/app-CzPw_Sdz.css",revision:"844b6b059e17acd8034a055f8a3a8540"},{url:"build/assets/AppLayout-C1ccdwXJ.js",revision:"5bfb623f7dbe6861dc50a0e4412a6629"},{url:"build/assets/AppLayout-tn0RQdqM.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"build/assets/ApplicationLogo.vue_vue_type_script_setup_true_lang-BrtXqKVY.js",revision:"b6c58deaa8947f73080aa4fcf17f6921"},{url:"build/assets/AssignmentsCard-CHLZmndQ.js",revision:"d12879413432c42a07d2f425fe00a426"},{url:"build/assets/Button-DNt9mZjB.js",revision:"032fa47b3542eaab532ca3e165058cd1"},{url:"build/assets/Card-BnzCqh1F.js",revision:"9c891abae43aeec92c4b6cccf36913fa"},{url:"build/assets/CardContent-BXl36Apf.js",revision:"7b482084fec4a29498fd908318978acb"},{url:"build/assets/CardDescription-BUVV5LpA.js",revision:"abc7b8ec9e41e6132ed6b272e90d7a2e"},{url:"build/assets/CardFooter-HUJAAeJM.js",revision:"9585935ab79486e886ebf86d38ce3ce8"},{url:"build/assets/CardTitle-BHJO7r9t.js",revision:"0bf790ec3d6bb63544e24e8048ba8a13"},{url:"build/assets/check-DWFfTpoK.js",revision:"c9e73588a005ad4c18fd12ad9c1450a4"},{url:"build/assets/Checkbox-DkOOeTwk.js",revision:"62ab73a91e8bc6cc233f50e8fa7ba922"},{url:"build/assets/chevron-down-BHN_OOuC.js",revision:"fc81d61ac1c8abb9507ab614e5c2c962"},{url:"build/assets/ConfirmationModal-Bf_5uetH.js",revision:"c6fba3a570f9bc14aedbb8b92e2f3cee"},{url:"build/assets/ConfirmPassword-DWldaSO0.js",revision:"e9357101310f5ee1ae2905ec6dbe8029"},{url:"build/assets/ConfirmsPassword-CZGzqqmU.js",revision:"aa2325b02d512751bb85ca71317c37d6"},{url:"build/assets/ConnectionLines-C79ZDtRk.js",revision:"9a9bf950fd154210860a5c87eed252b5"},{url:"build/assets/Create-DLT23lEI.js",revision:"4ae014236bf4045c365b40d3835e369d"},{url:"build/assets/createLucideIcon-D_TeAV61.js",revision:"2012712d5c8fe1233965abe792ec96f5"},{url:"build/assets/CreateTeamForm-DDfSRCE0.js",revision:"31767d492ca5e08b49d79e1df6c031b6"},{url:"build/assets/CurrentClassCard-BwA68WuJ.js",revision:"d4d2cac09b0ff86af8584e5a24534b9e"},{url:"build/assets/CurriculumMap-CZwGs4Az.js",revision:"46eae1dfc42be552372df8ca76763f66"},{url:"build/assets/CurriculumMapHeader-BcAoM7lx.js",revision:"ae27676655e773f45e472c627f40d2b4"},{url:"build/assets/CurriculumMapView-CrB7oPA1.js",revision:"64388704cfd20be228ca305ad15863e4"},{url:"build/assets/Dashboard-C4osDRck.js",revision:"75c800f8b4f12b8d94b6d412bc702d96"},{url:"build/assets/DeleteTeamForm-m8zzymi0.js",revision:"34c37c71afbd573b98ca9cc0024d86c7"},{url:"build/assets/DeleteUserForm-Xbp2dbeR.js",revision:"28326e9afe4a317842c5dc69d7451660"},{url:"build/assets/DialogTitle-D7Bofzgn.js",revision:"e5f799faf180d6ac1dd92454430f3455"},{url:"build/assets/DropdownMenuTrigger-BzJPRKnu.js",revision:"2dbd2d33f9462d63636a44ae4f441769"},{url:"build/assets/ExamsCard-DB1yOEc-.js",revision:"1065553a1cdbd15b2fb77f251eec3cd0"},{url:"build/assets/ForgotPassword-D0PLMvJ9.js",revision:"6a2754174fad5cc049f9f8fcb20dfdcd"},{url:"build/assets/format-BzRktsyD.js",revision:"de4ae5028e0d30a2c84602163837e584"},{url:"build/assets/FormSection-DAHtmeZ3.js",revision:"610392bb959d479f3dbbe5d45b19280f"},{url:"build/assets/GradesCard-C8Hjn39U.js",revision:"f368d2be257c3fdbf771dcb2a5083cc2"},{url:"build/assets/iconify-dTxdhvv1.js",revision:"6a215e03b47684da91d1faedd6a3c36d"},{url:"build/assets/Index-BLONr1pm.js",revision:"a4da24affe4d6049979b7aeb98eda9d4"},{url:"build/assets/index-BMAXOr1r.js",revision:"25028b5361d30de94def801620ef81f3"},{url:"build/assets/index-BwobEAja.js",revision:"c152fddeb92933822301bffaf10f23ca"},{url:"build/assets/index-BY5QvBbD.js",revision:"27d28781085cc09cbc6e08542aa13054"},{url:"build/assets/Index-BzuuGp59.css",revision:"f59a8c642e009567a597318bd5d21a37"},{url:"build/assets/index-CAFOOrXe.js",revision:"a2b00512c36745ddb03cb7ce5c125481"},{url:"build/assets/Index-Ckxmlnxm.js",revision:"f983c426d12b4d5efab6f23d3b84ec64"},{url:"build/assets/index-CliGGX-l.js",revision:"d87a3aff8981857ab22f30d0ffd5cffa"},{url:"build/assets/Index-CsWimps8.css",revision:"ad2c21aaf9463cdf89a9c00017798c38"},{url:"build/assets/index-CTE_5RN8.js",revision:"6448acfdbe0eee95da3e78a4f76c992b"},{url:"build/assets/Index-CTLw9hUK.js",revision:"804c6bbb3627d0dc015466993ab2038d"},{url:"build/assets/Index-DbPrqNVV.js",revision:"6e6393885c9236754ba49761457af7d4"},{url:"build/assets/index-DLdznlN5.js",revision:"4dd87088a1a8c518306fe5830f3e37cf"},{url:"build/assets/Index-DQdXiVbo.js",revision:"f1c25148682646135c5356d3a40d64b3"},{url:"build/assets/Index-DqlYTi3J.js",revision:"22e9467aec70a133eb1e018067a434d2"},{url:"build/assets/Index-DZAjXFJN.js",revision:"e85a0dca95d4cb9307fd645d9be5ea08"},{url:"build/assets/Input-H0Unj_FV.js",revision:"02f5ad0801636677c43969177d569553"},{url:"build/assets/InputError-DWRZAE6G.js",revision:"188fd7c301ef7f591c36560dafdcd9a8"},{url:"build/assets/InvoiceManager-TZciDxe4.js",revision:"72e39de9c2f7adb1c4cda769b4002efe"},{url:"build/assets/Label-cgBWipbd.js",revision:"929588bfed3016dc435f6000a60fa2df"},{url:"build/assets/LinkedAccountsForm-BazhIteJ.js",revision:"3fb1ab100b80db05f2e25e43499697c7"},{url:"build/assets/Login-BiDYS850.js",revision:"a84cc027b6b11b17c731a0d8a97c2ceb"},{url:"build/assets/LogoRedirect-DbNiw00u.js",revision:"ce5521145e8320731ae02fe03d24dd56"},{url:"build/assets/LogoutOtherBrowserSessionsForm-CP0ww0Xa.js",revision:"7bbc0343e88d5a016fe46294e15c2cd9"},{url:"build/assets/ModelSelector-0N8EfRrM.js",revision:"a15555260623324a638f5208e46ff33f"},{url:"build/assets/Offline-Dq_H-KS_.js",revision:"5412fe648510add8be2dd07df9afc1ad"},{url:"build/assets/PaymentInstructions-DdamCOuh.js",revision:"ff73b8226e1b82523e8718a49e8a42a2"},{url:"build/assets/PaymentSummary-CpAweOP2.js",revision:"77bedd8290134acbb949677b75722c61"},{url:"build/assets/PricingCard-BNX8JIoO.js",revision:"4f3bf505fecb11d84c8d0366629197fe"},{url:"build/assets/PrivacyPolicy-DJPcObWK.js",revision:"6613797c5bab3472dcc0da50a1dae526"},{url:"build/assets/Progress-DKJeoX8b.js",revision:"ef605b12e05772bb54b4a0147c8cd52a"},{url:"build/assets/ProgressCards-BrYvnVT7.js",revision:"35217a27b651e61ceba2bc61ed4d1b58"},{url:"build/assets/ProgressOverview-D_iE-K9y.js",revision:"9698bc84c01ded9666257b14f5c303e2"},{url:"build/assets/Register-B3XQlba9.css",revision:"04762eb12393c73875c9c151f17ab209"},{url:"build/assets/Register-D0lTSRT7.js",revision:"54249d4435aa0f3ec11764a1e25c98ea"},{url:"build/assets/ResetPassword-P0aHijyH.js",revision:"39472aba837c49de246d826a0585101f"},{url:"build/assets/ResourcesCard-Ca6Vw8Qv.js",revision:"960c107d5766e896377fbae1f3c5eabd"},{url:"build/assets/ScheduleCard-94MvgRzt.js",revision:"3616a823707f8012666d33c9286b60d2"},{url:"build/assets/ScheduleCard-BIEefXBA.css",revision:"d0c28e3f73d6317f27f7fd006a61a1e4"},{url:"build/assets/ScheduleCard-I9paHOxA.js",revision:"39aca63e4ffdc0a4135240ecccc43a7e"},{url:"build/assets/ScheduleGrid-542Rg7b4.js",revision:"8d4645c4e1b119bcec29932941760b81"},{url:"build/assets/ScheduleGrid-DqyZOJFF.css",revision:"5a982b62d6894e55f1399f58104239d0"},{url:"build/assets/ScheduleHeader-ClQ9kPzz.js",revision:"65f173173dd46b26cfeb50b12d8b6f2c"},{url:"build/assets/ScheduleList-1CDamKF6.js",revision:"272f9f6bbc3beb2984606410b1dace98"},{url:"build/assets/ScheduleStats-BPBtjFFa.js",revision:"81936cb35148c0071d88faad789a7645"},{url:"build/assets/ScheduleTimeline-C0pSXybr.css",revision:"18adc21302f17618c25c61bea3733248"},{url:"build/assets/ScheduleTimeline-CLhtnBws.js",revision:"b79a174b38d18ad88d0ccaa617f12da8"},{url:"build/assets/SearchBar-D9_WRjVL.js",revision:"b62c7cedd2d269018e7338a3e69a73ed"},{url:"build/assets/SelectValue-DqNNh4yC.js",revision:"a074d3375debd7ee7855d94087e18334"},{url:"build/assets/Separator-C4yGw9Nc.js",revision:"5b3407b872a79bc5ee884564525c1a41"},{url:"build/assets/SheetContent-CiBY3ucy.js",revision:"3020098dfd3f014fc47ce180558816c3"},{url:"build/assets/Show-BlmiG9fO.js",revision:"d8bea054eda6532a01db1aa79f958d37"},{url:"build/assets/Show-z0iIGTIU.js",revision:"e4c01dd3fd07bcf64c5a13fa8c327e4e"},{url:"build/assets/Sonner-DEhwx-9q.js",revision:"5f292fb182bbb6f05473e8a2d47e8191"},{url:"build/assets/StatsCards-t6562lyO.js",revision:"881cfe03a73932c7aad7de8d8251de4e"},{url:"build/assets/StudentHeader-DHFb83Mj.js",revision:"0bd8f54c963ba317c989b05fd08286da"},{url:"build/assets/SubjectCards-BJvL-Jyu.js",revision:"2da8e29d0f2ff82d4a82103dcc5794f5"},{url:"build/assets/SubjectFilters-C-Q1zf7p.js",revision:"9428b356d91f46a1fc4a616b5906fba6"},{url:"build/assets/SubjectNode-B4zr3P4F.js",revision:"63096cf3a92494ed82dfb0fddbee6b40"},{url:"build/assets/SubjectTable-B7UQuude.js",revision:"94b27c3b67a47341570b252977856f24"},{url:"build/assets/SubjectVisualizer-CouCJgTm.js",revision:"13dcf79e8aa7ca87c0ffde66edc6cc95"},{url:"build/assets/SubscriptionManager-BWr0b86H.js",revision:"09f4e148962eb327af6797fe9623ebbd"},{url:"build/assets/Switch-Ba8PW4SU.js",revision:"d9b96e73e9fdb8c6cfd39accf6db73f5"},{url:"build/assets/TableHeader-CJYkBYV-.js",revision:"1c474fe5b00ffad85597599d7aac6555"},{url:"build/assets/TabsContent-BI9oUCpo.js",revision:"1e8f42a4f3cb446ab059b3feb19f62da"},{url:"build/assets/TabsTrigger-CnIteQlL.js",revision:"39648be1d993e4c561e62d448d7fd4b1"},{url:"build/assets/TeamMemberManager-B0xKcF0Z.js",revision:"81f84bc77f09bccf01228d7925961c92"},{url:"build/assets/TemperatureSelector-CByT1HAI.js",revision:"5bc92f1946fcd1c323a6bce0b10e9307"},{url:"build/assets/TermsOfService-Coi9sJXt.js",revision:"113ca18c755464cf81b761e9072fee36"},{url:"build/assets/TooltipTrigger-BQ5EKoiq.js",revision:"6ed3cac1ddfdeab837212de9f168a5a9"},{url:"build/assets/TransactionDetails-DHRxW9sv.js",revision:"b23c2135479c5b5c09fe42b7b8724ad7"},{url:"build/assets/TransactionHistory-B14BXZkG.js",revision:"88805e1f7da30299ccc2efb41fac089e"},{url:"build/assets/TuitionBreakdown-BHEHrRBb.js",revision:"621be918647085e0bb6b476a3e975327"},{url:"build/assets/TwoFactorAuthenticationForm-CBsmNQ8e.js",revision:"417b52f1b467d7bfd78eb4199dc3c9ab"},{url:"build/assets/TwoFactorChallenge-C4EOz7TJ.js",revision:"9b624c70e63609f5be474e24be61f2f2"},{url:"build/assets/UpdatePasswordForm-qvKMQD2s.js",revision:"696c7f761d7e00c7b8a85c8d7dddcd30"},{url:"build/assets/UpdateProfileInformationForm-86vM5-1e.js",revision:"8d590a7384f670dce83cb3c54424081f"},{url:"build/assets/UpdateTeamNameForm-sUHiEsom.js",revision:"fc68aaf898939a6dadb65bee51c6b7ff"},{url:"build/assets/useChangeCase-CNNrRe03.js",revision:"f4f4a1a98c1bba120fcee184498478b3"},{url:"build/assets/useSeoMetaTags-7GtkhvfL.js",revision:"ac429b8b390a11c0e94431776f5f8453"},{url:"build/assets/utils-CytzSlOG.js",revision:"a9e3a387eab1eebf42b55246e8763642"},{url:"build/assets/VerifyEmail-Dsaq8jwf.js",revision:"0e9e907da8a623271951206db1bae243"},{url:"build/assets/vue-sonner-Cl-EEs7T.js",revision:"94e1cfbc1045d2f61952cb6f319b5eac"},{url:"build/assets/Welcome-CJ7xB8Pa.js",revision:"a2aff2cbdf89df1ab401e21a6e22fb18"},{url:"build/assets/x-MApLhTmC.js",revision:"e956314612c59e96b263acb831310a14"},{url:"build/manifest.json",revision:"737815cda0457e533bd2450835241c38"},{url:"css/filament/filament/app.css",revision:"12f839262efc5a1ff0dbc615531355f8"},{url:"css/filament/forms/forms.css",revision:"188554aeab4cfcabe45066fc81aaf20d"},{url:"css/filament/support/support.css",revision:"42e8e03bb68c8a5a26103ec116d6cf5d"},{url:"favicon-16x16.png",revision:"60d8cef643caef4fa035411c8a8cffa2"},{url:"favicon-32x32.png",revision:"d16902f4665ea938b3cf1274ab150c4b"},{url:"favicon.ico",revision:"9e8b80f113ddab334ba549af08b6f68c"},{url:"images/dashboard-dark.webp",revision:"9a8446900c1ed92d9331261ddb8b9665"},{url:"images/dashboard-light.webp",revision:"1157eaf87599e6822760fccbea77385a"},{url:"images/icons/icon-128x128.png",revision:"3e7db4d73e8129de62371d5b05d5fcd4"},{url:"images/icons/icon-144x144.png",revision:"4a1d6474058b153d6a3701db33a63f3c"},{url:"images/icons/icon-152x152.png",revision:"de4ad4410b0375493c8c0e8d88bd9119"},{url:"images/icons/icon-192x192.png",revision:"957dfc347925a4809a880c87534d85eb"},{url:"images/icons/icon-384x384.png",revision:"149f682f0d9357c39f6c9cf5c5c95199"},{url:"images/icons/icon-512x512.png",revision:"18e8d82d9df4ff90df686811d09339b2"},{url:"images/icons/icon-72x72.png",revision:"3b79af186cd91681758b03225e69bf5e"},{url:"images/icons/icon-96x96.png",revision:"38f31e5cc3fc52566a2fbcb14f1a09cc"},{url:"images/icons/splash-1125x2436.png",revision:"4991d9139ac4a5cca00761448bcc61b4"},{url:"images/icons/splash-1242x2208.png",revision:"41849a55e70e9af8f55c9d18f6ee6563"},{url:"images/icons/splash-1242x2688.png",revision:"04936d82edce793f90e2d4af7715703f"},{url:"images/icons/splash-1536x2048.png",revision:"a13ea6fd727c4e37db172d3371452ed7"},{url:"images/icons/splash-1668x2224.png",revision:"a0670816158f43b823058da33be87fb4"},{url:"images/icons/splash-1668x2388.png",revision:"0bd50a4d0a0da075bd1e284e956b49b8"},{url:"images/icons/splash-2048x2732.png",revision:"163d887752c919b4eccea5bcd5be0a5a"},{url:"images/icons/splash-640x1136.png",revision:"c9ad775561223eee7802b0f8d4eb3a13"},{url:"images/icons/splash-750x1334.png",revision:"fe9c9fbe2e7e6b6b0d6663bfeb72fa78"},{url:"images/icons/splash-828x1792.png",revision:"f68fecc50c9f87e78a323dabaabfd7ef"},{url:"images/og.webp",revision:"dda492d9aabfccc52e156c184982dd39"},{url:"images/rocket-dark.png",revision:"275526cd823c5320350b8edb3ccecde1"},{url:"js/filament/filament/app.js",revision:"f284313f9aa2ef596670857c616c572f"},{url:"js/filament/filament/echo.js",revision:"93aeb81b50c3272130a5896d42f1acce"},{url:"js/filament/forms/components/color-picker.js",revision:"4393c422493e0e6143a80d58647ff2b7"},{url:"js/filament/forms/components/date-time-picker.js",revision:"283f91bd54aa81d255fef7e71a598a43"},{url:"js/filament/forms/components/file-upload.js",revision:"ea99ff50cdf46b4b1c84b312db13a3df"},{url:"js/filament/forms/components/key-value.js",revision:"b23b4554a7073f7911cb39a35b88f4e9"},{url:"js/filament/forms/components/markdown-editor.js",revision:"a594189e1ddb5fba4d3f6d95936376e9"},{url:"js/filament/forms/components/rich-editor.js",revision:"4c3820e6b93bd069495f3611a20354b8"},{url:"js/filament/forms/components/select.js",revision:"5ec29d715ecde23a6471d55924bf3258"},{url:"js/filament/forms/components/tags-input.js",revision:"0c2de9797b4b240e4c0f706863491e03"},{url:"js/filament/forms/components/textarea.js",revision:"abb98c0edb3e7228142c14a8422ef7c6"},{url:"js/filament/notifications/notifications.js",revision:"f873fe0caab22e4a8740d51d4f31a6da"},{url:"js/filament/support/async-alpine.js",revision:"3ead001eec400f258c1013db2430e58d"},{url:"js/filament/support/support.js",revision:"a67594682bfbd05ea09a8b6572537eb8"},{url:"js/filament/tables/components/table.js",revision:"09a22c2a575eca2fd38168c239db784e"},{url:"js/filament/tables/tables.js",revision:"2f5d485e5b5960385f44ad02fedf5e93"},{url:"js/filament/widgets/components/chart.js",revision:"a53c84c1b2b835139299492fd4278382"},{url:"js/filament/widgets/components/stats-overview/stat/chart.js",revision:"5a891480fd5fd333f4d506b657d7d548"},{url:"llms.txt",revision:"999735373a7c3c3f8bc9a9d5989d3e58"},{url:"manifest.json",revision:"ca63318fc614ac37b832fc9a3c7521f4"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"serviceworker.js",revision:"003c71c2fdc501d01e1d027290111299"},{url:"site.webmanifest",revision:"87f2c9773055d618519a9f276a8d1e0f"},{url:"sitemap.xml",revision:"62983548e3dc27175dceb2e71300e3cd"},{url:"vendor/telescope/app-dark.css",revision:"1ea407db56c5163ae29311f1f38eb7b9"},{url:"vendor/telescope/app.css",revision:"de4c978567bfd90b38d186937dee5ccf"},{url:"vendor/telescope/app.js",revision:"99e99836705c54c9dc04352a9907bc7f"},{url:"vendor/telescope/favicon.ico",revision:"a903f931a3fcbcb88c8c8ab8d5b189b8"},{url:"vendor/telescope/mix-manifest.json",revision:"252c91f8629b02919948959058b24c3e"},{url:"offline.html",revision:"9a1245dad0a89c34d43dc7d1f44507ec"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/offline.html"),{denylist:[/^\/admin/,/^\/api/,/^\/storage/]})),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\/api\//,new e.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:300})]}),"GET"),e.registerRoute(/.*/,new e.NetworkFirst({cacheName:"dynamic-content",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));
//# sourceMappingURL=sw.js.map
