(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),i=a.n(r),o=(a(72),a(60)),s=a(61),c=a(65),d=a(62),u=a(66),h=a(6),p=a(19),m=a.n(p),g=a(20),C=a.n(g),E=a(4),v=a.n(E),y=a(25),f=a.n(y),b=a(26),x=a.n(b),B=a(36),D=a.n(B);a(75);function P(e){return l.a.createElement(D.a,{component:"div",style:{padding:24}},e.children)}var w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleChangeCat=function(e,t){a.setState({valueCat:t})},a.handleChangeGDP=function(e,t){a.setState({valueGDP:t})},a.handleChangeRevenue=function(e,t){a.setState({valueRev:t})},a.handleChangeCountryGDP=function(e,t){a.setState({countryGDP:t})},a.handleChangeCountryRev=function(e,t){a.setState({countryRev:t})},a.state={valueCat:0,valueGDP:0,valueRev:0,countryGDP:0,countryRev:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App",id:"grad",style:{display:"flex",justifyContent:"space-around",alignItems:"center"}},l.a.createElement("div",{style:{width:"80%",position:"fixed",top:"90px"}},l.a.createElement("div",{style:{width:"80%",position:"fixed",top:"5px"}},l.a.createElement("b",{id:"myHead"},"Ministry of Agriculture and Cooperatives")),l.a.createElement(m.a,{position:"static",color:"default"},l.a.createElement(C.a,{value:this.state.valueCat,onChange:this.handleChangeCat,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},l.a.createElement(v.a,{label:"General",style:{width:"25%",margin:"auto"}}),l.a.createElement(v.a,{label:"Overview Budget",style:{width:"25%",margin:"auto"}})," ",l.a.createElement(v.a,{label:"Budget Distribution",style:{width:"25%",margin:"auto"}})," ",l.a.createElement(v.a,{label:"Budget Allocation",style:{width:"25%",margin:"auto"}})," ")),l.a.createElement("div",null,0===this.state.valueCat&&l.a.createElement(P,null,l.a.createElement("div",{style:{width:"96%"}},l.a.createElement(f.a,null,l.a.createElement(x.a,{title:"Overview Eastern Region",subheader:"Year Information 2561 - 2562"}),l.a.createElement("div",{class:"zoom",style:{display:"flex",justifyContent:"space-around",margin:"auto"}},0===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"GeoChart",data:[["Province","Population"],["Chon Buri",1535445],["Rayong",723316],["Chanthaburi",536496],["Trat",229914]],options:{region:"TH",resolution:"provinces",colorAxis:{colors:["#C9E4CA","#87BBA2","#55828B","#3B6064","#364958"]},backgroundColor:"#88d2ff",datalessRegionColor:"#ffffff",defaultColor:"#f5f5f5"},mapsApiKey:"AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8",rootProps:{"data-testid":"4"}})),1===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"GeoChart",data:[["Province","AllBudget"],["Chon Buri",23970120494],["Rayong",8014286544],["Chanthaburi",6253304134],["Trat",2828784744]],options:{region:"TH",resolution:"provinces",colorAxis:{colors:["#C9E4CA","#87BBA2","#55828B","#3B6064","#364958"]},backgroundColor:"#88d2ff",datalessRegionColor:"#ffffff",defaultColor:"#f5f5f5"},mapsApiKey:"AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8",rootProps:{"data-testid":"4"}})),2===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"GeoChart",data:[["Province","MAC Budget"],["Chon Buri",1348902100],["Rayong",574015e3],["Chanthaburi",1734170800],["Trat",543389400]],options:{region:"TH",resolution:"provinces",colorAxis:{colors:["#C9E4CA","#87BBA2","#55828B","#3B6064","#364958"]},backgroundColor:"#88d2ff",datalessRegionColor:"#ffffff",defaultColor:"#f5f5f5"},mapsApiKey:"AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8",rootProps:{"data-testid":"4"}}))),l.a.createElement(m.a,{position:"static",color:"default"},l.a.createElement(C.a,{value:this.state.valueGDP,onChange:this.handleChangeGDP,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",style:{display:"flex",margin:"auto"}},l.a.createElement(v.a,{label:"\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23"}),l.a.createElement(v.a,{label:"\u0e07\u0e1a\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14"}),l.a.createElement(v.a,{label:"\u0e07\u0e1a\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07\u0e40\u0e01\u0e29\u0e15\u0e23\u0e41\u0e25\u0e30\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c"})))))),1===this.state.valueCat&&l.a.createElement(P,null,l.a.createElement("div",{style:{width:"96%"}},l.a.createElement(f.a,null,l.a.createElement(x.a,{title:"Budget Variation Rate and Trendline",subheader:"Shows all budget of each country in 2547 - 2562"}),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"auto"}},0===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"LineChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","Budget"],[2547,147.880473],[2548,169.898087],[2549,263.863673],[2550,418.245615],[2551,384.96894],[2552,172.82059],[2553,473.3295],[2554,1212.111538],[2555,2373.592334],[2556,10520.593054],[2557,1205.452833],[2558,750.505423],[2559,572.0142],[2560,631.3966],[2561,1417.0282],[2562,1348.9021]],options:{hAxis:{title:"Year"},vAxis:{title:"Budget (Million Baht)"},series:{1:{curveType:"function"}},explorer:{actions:["dragToZoom","rightClickToReset"]},trendlines:{0:{type:"exponential",visibleInLegend:!0,color:"green"}}},rootProps:{"data-testid":"2"}})),1===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"LineChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","Budget"],[2547,179.746356],[2548,263.620717],[2549,191.971794],[2550,755.304377],[2551,1037.951132],[2552,696.334408],[2553,491.465457],[2554,533.679994],[2555,259.682095],[2556,181.257454],[2557,170.764123],[2558,347.882511],[2559,565.8767],[2560,835.56011],[2561,1075.2048],[2562,574.015]],options:{hAxis:{title:"Year"},vAxis:{title:"Budget (Million Baht)"},series:{1:{curveType:"function"}},explorer:{actions:["dragToZoom","rightClickToReset"]},trendlines:{0:{type:"exponential",visibleInLegend:!0,color:"green"}}},rootProps:{"data-testid":"2"}})),2===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"LineChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","Budget"],[2547,152.145509],[2548,185.228819],[2549,210.426275],[2550,259.519332],[2551,308.408961],[2552,335.7463],[2553,241.746962],[2554,994.382445],[2555,2787.440897],[2556,1596.719613],[2557,1696.189523],[2558,802.258751],[2559,1132.86044],[2560,956.0565],[2561,1509.4408],[2562,1734.1708]],options:{hAxis:{title:"Year"},vAxis:{title:"Budget (Million Baht)"},series:{1:{curveType:"function"}},explorer:{actions:["dragToZoom","rightClickToReset"]},trendlines:{0:{type:"exponential",visibleInLegend:!0,color:"green"}}},rootProps:{"data-testid":"2"}})),3===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"LineChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","Budget"],[2547,140.489245],[2548,152.876356],[2549,225.10545],[2550,325.981056],[2551,246.307501],[2552,322.617884],[2553,240.09431],[2554,351.57008],[2555,165.842496],[2556,151.886439],[2557,219.011843],[2558,255.22356],[2559,210.00324],[2560,231.2664],[2561,325.144],[2562,543.3894]],options:{hAxis:{title:"Year"},vAxis:{title:"Budget (Million Baht)"},series:{1:{curveType:"function"}},explorer:{actions:["dragToZoom","rightClickToReset"]},trendlines:{0:{type:"exponential",visibleInLegend:!0,color:"green"}}},rootProps:{"data-testid":"2"}}))),l.a.createElement(m.a,{position:"static",color:"default"},l.a.createElement(C.a,{value:this.state.valueGDP,onChange:this.handleChangeGDP,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",style:{display:"flex",margin:"auto"}},l.a.createElement(v.a,{label:"Chonburi"}),l.a.createElement(v.a,{label:"Rayong"}),l.a.createElement(v.a,{label:"Chanthaburi"}),l.a.createElement(v.a,{label:"Trat"})))))),2===this.state.valueCat&&l.a.createElement(P,null,l.a.createElement("div",{style:{width:"96%"}},l.a.createElement(f.a,null,l.a.createElement(x.a,{title:"Distribution ratio of Department in Ministry of Agriculture",subheader:"Shows distribution of budget in each department w/o Royal Irrigation Department"}),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"auto"}},0===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"PieChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Department","Budget Ratio"],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e1b\u0e25\u0e31\u0e14\u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07\u0e40\u0e01\u0e29\u0e15\u0e23\u0e41\u0e25\u0e30\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",147200],["\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07",6449800],["\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c",14973e3],["\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19",17409e3],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23",303e3],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",93300],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e0f\u0e34\u0e23\u0e39\u0e1b\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23\u0e23\u0e21",1635800]],options:{title:"Budget Ratio in each deaprtment of Chonburi"}})),1===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"PieChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Department","Budget Ratio"],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e1b\u0e25\u0e31\u0e14\u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07\u0e40\u0e01\u0e29\u0e15\u0e23\u0e41\u0e25\u0e30\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",15800],["\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07",3551300],["\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c",1857e3],["\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19",11493e3],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23",2318900],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",220800],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e0f\u0e34\u0e23\u0e39\u0e1b\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23\u0e23\u0e21",73600]],options:{title:"Budget Ratio in each deaprtment of Rayong"}})),2===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"PieChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Department","Budget Ratio"],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e1b\u0e25\u0e31\u0e14\u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07\u0e40\u0e01\u0e29\u0e15\u0e23\u0e41\u0e25\u0e30\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",1526e3],["\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07",2984400],["\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c",1805900],["\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19",49488e3],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23",2759300],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",2506800],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e0f\u0e34\u0e23\u0e39\u0e1b\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23\u0e23\u0e21",36800]],options:{title:"Budget Ratio in each deaprtment of Chanthaburi"}})),3===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"PieChart",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Department","Budget Ratio"],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e1b\u0e25\u0e31\u0e14\u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07\u0e40\u0e01\u0e29\u0e15\u0e23\u0e41\u0e25\u0e30\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",28600],["\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c",1124e3],["\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19",36811400],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23",508800],["\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",70400],["\u0e2a\u0e4d\u0e32\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e0f\u0e34\u0e23\u0e39\u0e1b\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23\u0e23\u0e21",36800]],options:{title:"Budget Ratio in each deaprtment of Trat"}}))),l.a.createElement(m.a,{position:"static",color:"default"},l.a.createElement(C.a,{value:this.state.valueGDP,onChange:this.handleChangeGDP,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",style:{display:"flex",margin:"auto"}},l.a.createElement(v.a,{label:"Chonburi"}),l.a.createElement(v.a,{label:"Rayong"}),l.a.createElement(v.a,{label:"Chanthaburi"}),l.a.createElement(v.a,{label:"Trat"})))))),3===this.state.valueCat&&l.a.createElement(P,null,l.a.createElement("div",{style:{width:"96%"}},l.a.createElement(f.a,null,l.a.createElement(x.a,{title:"Main Department of MAC",subheader:"MAC - Ministry of Agriculture and Cooperatives"}),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"auto"}},0===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"Bar",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","Chonburi","Rayong","Chanthaburi","Trat"],["2558",577458500,230306800,654480500,191292600],["2559",467390200,442770100,1026334600,125626500],["2560",582640300,794572800,894507900,203750200],["2561",1321047600,999376200,1380748800,271496800],["2562",1305509900,546407200,1665939e3,503646400]],options:{chart:{title:"Budget Allocation to Royal Irrigation Department",subtitle:"Distribution of budget in 2558-2562"}},rootProps:{"data-testid":"2"}})),1===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"Bar",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07","\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c","\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19","\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23"],["2558",29468650,55409920,34571500,15e4],["2559",15007800,2008500,17504900,65193200],["2560",11089500,9631500,17264400,431e3],["2561",1020600,9735200,6857200,11658e3],["2562",6449800,14973e3,17409e3,303e3]],options:{chart:{title:"Budget Allocation w/o Royal Irrigation Department",subtitle:"Distribution of budget to Main Department in 2558-2562"}},rootProps:{"data-testid":"2"}})),2===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"Bar",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07","\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c","\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19","\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23"],["2558",48439745,11305752,17169575,5e5],["2559",17947900,65e3,12708900,66221900],["2560",17379500,1815e3,6564e3,1707e3],["2561",4670600,2137500,16004e3,11816e3],["2562",3551300,1857e3,11493e3,2318900]],options:{chart:{title:"Budget Allocation w/o Royal Irrigation Department",subtitle:"Distribution of budget to Main Department in 2558-2562"}},rootProps:{"data-testid":"2"}})),3===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"Bar",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07","\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c","\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19","\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23"],["2558",41078090,21335e3,28256e3,0],["2559",13408300,2577800,22970040,48696900],["2560",6327e3,808100,39331500,3137800],["2561",3536200,5771400,27177e3,4730100],["2562",2984400,1805900,49488e3,2759300]],options:{chart:{title:"Budget Allocation w/o Royal Irrigation Department",subtitle:"Distribution of budget to Main Department in 2558-2562"}},rootProps:{"data-testid":"2"}})),4===this.state.valueGDP&&l.a.createElement(P,null,l.a.createElement(h.a,{width:"645px",height:"375px",chartType:"Bar",loader:l.a.createElement("div",null,"Loading Chart"),data:[["Year","\u0e01\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e07","\u0e01\u0e23\u0e21\u0e1b\u0e28\u0e38\u0e2a\u0e31\u0e15\u0e27\u0e4c","\u0e01\u0e23\u0e21\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19","\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e40\u0e01\u0e29\u0e15\u0e23"],["2558",19388770,7056530,16769100,171200],["2559",12258100,16505e3,20255640,33798700],["2560",2356e3,1928600,17189700,844600],["2561",13956800,1017e3,30331e3,1104500],["2562",21e4,1124e3,36811400,508800]],options:{chart:{title:"Budget Allocation w/o Royal Irrigation Department",subtitle:"Distribution of budget to Main Department in 2558-2562"}},rootProps:{"data-testid":"2"}}))),l.a.createElement(m.a,{position:"static",color:"default"},l.a.createElement(C.a,{value:this.state.valueGDP,onChange:this.handleChangeGDP,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",style:{display:"flex",margin:"auto"}},l.a.createElement(v.a,{label:"\u0e01\u0e23\u0e21\u0e0a\u0e25\u0e1b\u0e23\u0e30\u0e17\u0e32\u0e19"}),l.a.createElement(v.a,{label:"Chonburi"}),l.a.createElement(v.a,{label:"Rayong"}),l.a.createElement(v.a,{label:"Chanthaburi"}),l.a.createElement(v.a,{label:"Trat"})))))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){e.exports=a(177)},72:function(e,t,a){},75:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.45d89fe2.chunk.js.map