app.directive("borderHover",function(){
	return {
		restrict: "A",
		link: function(scope,element,attrs){
			element.on('mouseenter', function(){
				element.addClass("hover-border")
			})

			element.on('mouseleave',function(){
				element.removeClass("hover-border")
			})
		}
	}
})