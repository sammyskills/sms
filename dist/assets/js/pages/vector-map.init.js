!function(o){"use strict";function r(){}r.prototype.init=function(){o("#world-map-markers").vectorMap({map:"world_en",normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,backgroundColor:"#transparent",color:"#f2f5f7",borderColor:"#bcbfc7",colors:{in:"#2fa97c",au:"#2fa97c",gl:"#2fa97c",us:"#2fa97c",sa:"#2fa97c"},borderColors:{in:"#2fa97c",au:"#2fa97c",gl:"#2fa97c",us:"#2fa97c",sa:"#2fa97c"}}),o("#usa").vectorMap({map:"usa_en",enableZoom:!0,showTooltip:!0,selectedColor:null,hoverColor:"#47b38b",backgroundColor:"transparent",color:"#2fa97c",borderColor:"#bcbfc7",colors:{ca:"#47b38b",tx:"#47b38b",mt:"#47b38b",ny:"#47b38b"},onRegionClick:function(o,r,a){o.preventDefault()}}),o("#canada").vectorMap({map:"canada_en",backgroundColor:"transparent",color:"#2fa97c",hoverColor:"#47b38b",borderColor:"#bcbfc7",enableZoom:!0,showTooltip:!0}),o("#france").vectorMap({map:"france_fr",backgroundColor:"transparent",color:"#2fa97c",borderColor:"#bcbfc7",hoverColor:"#47b38b",enableZoom:!0,showTooltip:!0}),o("#germany").vectorMap({map:"germany_en",backgroundColor:"transparent",color:"#2fa97c",borderColor:"#bcbfc7",hoverColor:"#47b38b",enableZoom:!0,showTooltip:!0}),o("#brazil").vectorMap({map:"brazil_br",backgroundColor:"transparent",color:"#2fa97c",borderColor:"#bcbfc7",hoverColor:"#47b38b",enableZoom:!0,showTooltip:!0})},o.VectorMap=new r,o.VectorMap.Constructor=r}(window.jQuery),function(){"use strict";window.jQuery.VectorMap.init()}();