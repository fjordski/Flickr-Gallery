$(document).ready(function () {
	$('button').click(function () {
		//button styling on click
		$('button').removeClass("selected");
		$(this).addClass("selected");
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var search = $(this).text();
		var flickrOptions = {
			tags: search,
			format: "json"
		};

		function displayPhotos(data) {
			var photoHTML = '<ul>';
			//access data call back and pass into for loop to add html to page via search terms
			$.each(data.items, function (i, photo) {
				photoHTML += '<li class="picture">';
				photoHTML += '<a href="' + photo.link + '">';
				photoHTML += '<img src="' + photo.media.m + '" class="img-responsive"></a></div>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	});
	//fade results into grid
	$(".picture").fadeIn("slow", function(){
		//animation complete
	});
});