(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),l=a(3),n=a.n(l),r=(a(15),a(4)),o=a(5),c=a(7),u=a(6),d=a(8),m=a(1),h=(a(16),function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).clickedCarouselLeft=function(){this.carouselPage>0&&(document.getElementsByClassName("carouselSlider")[0].style.animation="p"+this.carouselPage+"to"+--this.carouselPage+" 1s 1",document.getElementsByClassName("carouselSlider")[0].style.left=this.sliderPositions[this.carouselPage])},a.clickedCarouselRight=function(){this.carouselPage<this.maxcarouselPage-1&&(document.getElementsByClassName("carouselSlider")[0].style.animation="p"+this.carouselPage+"to"+ ++this.carouselPage+" 1s 1",document.getElementsByClassName("carouselSlider")[0].style.left=this.sliderPositions[this.carouselPage])},a.displayCarousel=function(e){return 0===e.length?s.a.createElement("div",null,"No Photos Available for this property"):(this.carouselPage=0,this.maxcarouselPage=e.length,s.a.createElement("div",{className:"carousel"},s.a.createElement("div",{className:"carouselButtons"},s.a.createElement("button",{className:"carouselLeft",onClick:this.clickedCarouselLeft},"Prev Photo"),s.a.createElement("button",{className:"carouselRight",onClick:this.clickedCarouselRight},"Next Photo")),s.a.createElement("div",{className:"carouselWindow"},s.a.createElement("table",{className:"carouselSlider"},s.a.createElement("tbody",null,s.a.createElement("tr",null,e.map(function(e,t){return s.a.createElement("td",{key:"photo_"+t},s.a.createElement("img",{src:e.urlMedium,alt:e.id}))})))))))},a.showListingDetail=function(e){this.setState({listingDetail:e})},a.hideListingDetail=function(){this.setState({listingDetail:null})},a.toggleListView=function(){this.setState({isListView:!this.state.isListView})},a.formatNumber=function(e){return String(e).replace(/(^|[^\w.])(\d{4,})/g,function(e,t,a){return t+a.replace(/\d(?=(?:\d\d\d)+(?!\d))/g,"$&,")})},a.formatPhysical=function(e){var t="";return t+=e.bedRooms?e.bedRooms+"bd, ":"?bd, ",t+=e.bathRooms?e.bathRooms+"ba | ":"?ba | ",t+=e.squareFeet?this.formatNumber(e.squareFeet)+"sqft | ":"?sqft | ",t+=" Built in "+(e.yearBuilt?e.yearBuilt:"?")},a.formatAddress=function(e){return s.a.createElement("div",{className:"address"},e.address1?s.a.createElement("div",null,e.address1):null,e.address2?s.a.createElement("div",null,e.address2):null,s.a.createElement("div",{className:"city_state_zip"},e.city?s.a.createElement("span",null,e.city+", "):null,e.state?s.a.createElement("span",null,e.state," "):null,e.zip?s.a.createElement("span",null,e.zip):null))},a.state={listings:null,isListView:!1,listingDetail:null},fetch("//dev1-sample.azurewebsites.net/properties.json",{mode:"cors"}).then(function(e){return e.json()}).then(function(e){a.setState({listings:e.properties.filter(function(e){return"Public"===e.visibility})})}).catch(function(){console.error("failure fetching listings data")}),a.toggleListView=a.toggleListView.bind(Object(m.a)(Object(m.a)(a))),a.showListingDetail=a.showListingDetail.bind(Object(m.a)(Object(m.a)(a))),a.hideListingDetail=a.hideListingDetail.bind(Object(m.a)(Object(m.a)(a))),a.clickedCarouselLeft=a.clickedCarouselLeft.bind(Object(m.a)(Object(m.a)(a))),a.clickedCarouselRight=a.clickedCarouselRight.bind(Object(m.a)(Object(m.a)(a))),a.carouselPage=0,a.maxcarouselPage=0,a.sliderPositions=[];for(var i=0;i<10;i++)a.sliderPositions.push("-"+680*i+"px");return a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isListView?"List View":"Grid View",a=null===this.state.listings?s.a.createElement("img",{src:"spinner.gif",alt:"loading"}):this.state.listings.map(function(t,a){return s.a.createElement("div",{onClick:function(){return e.showListingDetail(t)},className:"property_listing",key:"property_listing_"+a},s.a.createElement("div",{className:"img_container"},s.a.createElement("img",{className:"mainImage",src:t.mainImageUrl,alt:t.id})),s.a.createElement("div",{className:"price"},t.financial?"$"+e.formatNumber(t.financial.listPrice.toFixed(2)):"Price Not Available"),s.a.createElement("div",{className:"physical"},t.physical?e.formatPhysical(t.physical):"Physical data not available"),s.a.createElement("div",{className:"rent"},t.lease&&t.lease.leaseSummary?"Current Rent : $"+e.formatNumber(t.lease.leaseSummary.monthlyRent.toFixed(2)):"Lease data not available"),t.address?e.formatAddress(t.address):"Unknown Address",s.a.createElement("div",{className:"grossYield"},t.financial&&t.lease&&t.lease.leaseSummary?"Gross Yield : "+(12*t.lease.leaseSummary.monthlyRent.toFixed(2)/t.financial.listPrice.toFixed(2)*100).toFixed(2)+"%":"Gross Yield Not Available"),"   ")}),i=this.state.listingDetail?s.a.createElement("div",null,this.state.listingDetail.address?this.formatAddress(this.state.listingDetail.address):s.a.createElement("div",null,"Unknown Address"),this.state.listingDetail.resources&&this.state.listingDetail.resources.photos?this.displayCarousel(this.state.listingDetail.resources.photos):s.a.createElement("div",null,"No Photos Available")):null;return s.a.createElement("div",{className:"App"},this.state.listingDetail?s.a.createElement("button",{onClick:this.hideListingDetail},"Back to "+t):s.a.createElement("button",{onClick:this.toggleListView},t),s.a.createElement("div",{className:this.state.isListView?"list_view":"grid_view"},this.state.listingDetail?i:a))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4440cb76.chunk.js.map