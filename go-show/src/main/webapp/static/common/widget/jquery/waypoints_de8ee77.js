!function(t,e,n,o){"$:nomunge";function i(t){for(var e=u.length-1;e>=0&&u[e].element[0]!==t[0];)e-=1;return e}function f(t,n){t.element.trigger(l,n),t.options.triggerOnce&&t.element[e]("destroy")}function r(){var e=s.scrollTop(),o=e>c,i=t.grep(u,function(t){return o?t.offset>c&&t.offset<=e:t.offset<=c&&t.offset>e});c&&e||t[n]("refresh"),c=e,i.length&&(t[n].settings.continuous?t.each(o?i:i.reverse(),function(t,e){f(e,[o?"down":"up"])}):f(i[o?i.length-1:0],[o?"down":"up"]))}var s=t(o),u=[],c=-99999,p=!1,h=!1,l="waypoint.reached",a={init:function(o,f){return this.each(function(){var r=t(this),s=i(r),c=0>s?t.fn[e].defaults:u[s].options,p=t.extend({},c,f);p.offset="bottom-in-view"===p.offset?function(){return t[n]("viewportHeight")-t(this).outerHeight()}:p.offset,0>s?u.push({element:r,offset:r.offset().top,options:p}):u[s].options=p,o&&r.bind(l,o)}),t[n]("refresh"),this},remove:function(){return this.each(function(){var e=i(t(this));e>=0&&u.splice(e,1)})},destroy:function(){return this.unbind(l)[e]("remove")}};t.fn[e]=function(n){return a[n]?a[n].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof n&&n?"object"==typeof n?a.init.apply(this,[null,n]):void t.error("Method "+n+" does not exist on jQuery"+e):a.init.apply(this,arguments)},t.fn[e].defaults={offset:0,triggerOnce:!1};var g={refresh:function(){t.each(u,function(e,o){var i=0,r=o.offset;if("function"==typeof o.options.offset)i=o.options.offset.apply(o.element);else if("string"==typeof o.options.offset)var s=parseFloat(o.options.offset),i=o.options.offset.indexOf("%")?Math.ceil(t[n]("viewportHeight")*(s/100)):s;else i=o.options.offset;o.offset=o.element.offset().top-i,c>r&&c<=o.offset?f(o,["up"]):r>c&&c>=o.offset&&f(o,["down"])}),u.sort(function(t,e){return t.offset-e.offset})},viewportHeight:function(){return o.innerHeight?o.innerHeight:s.height()},aggregate:function(){var e=t();return t.each(u,function(t,n){e=e.add(n.element)}),e}};t[n]=function(t){return g[t]?g[t].apply(this):g.aggregate()},t[n].settings={continuous:!0,resizeThrottle:200,scrollThrottle:100},s.scroll(function(){p||(p=!0,o.setTimeout(function(){r(),p=!1},t[n].settings.scrollThrottle))}).resize(function(){h||(h=!0,o.setTimeout(function(){t[n]("refresh"),h=!1},t[n].settings.resizeThrottle))}).load(function(){t[n]("refresh"),r()})}(jQuery,"waypoint","waypoints",this);