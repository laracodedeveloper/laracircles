(function($){

	$.fn.laracircles = function( options ) {

 
        // Default options
        var settings = $.extend({
        	circleWidth: 25,
        	circleHeight: 25,
        	circleMargin: 5,
            data: []
        }, options );


        const countCases = function(){
        	let sum = 0;

        	settings.data.forEach(function(c){
        		if(c.hasOwnProperty('size')){
	        		sum += c.size;
        		}
        	});

        	return sum;
        };


       return this.each(function(){

       		let el = document.createElement('ul');
       			el.setAttribute('class', 'laracircles');
       

       		if(settings.data && Array.isArray(settings.data)){

				let contentWidth = $(this).width(),
					countCircle = settings.data.length,
					circleWidth = settings.circleWidth + (settings.circleMargin * 2),
					circleSpaceWidth = circleWidth * countCircle,
					contentSpaceWidth = contentWidth - circleSpaceWidth,
					widthPerCase = parseFloat(contentSpaceWidth / countCases());

       			settings.data.forEach(function(list) {
       				
       				let li = document.createElement('li'),
       				    a  = document.createElement('a'),
       				    span = document.createElement('span'),
       				    sizeOfCases = parseFloat(widthPerCase * list.size);
       				
       				a.setAttribute('href', list.url);

       				$(a).width(sizeOfCases);
       				$(a).height(sizeOfCases);

       				span.textContent = list.name;
       				a.append(span);


       				li.append(a);
       				el.append(li);

       			});

       		}

       		return this.append(el);

       }); 
    };

}(jQuery));