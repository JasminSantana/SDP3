/**
 * Icon in markers
 */
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
google.maps.event.addDomListener(window, 'load', 
function(){
	var directionsRerenderOptions = {
			markerOptions:{
			//marker: new google.maps.MarkerImage("img/Oil-Barrel-icon.png")
	
			}};
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	map=new google.maps.Map(document.getElementById('div_map'),{
		zoom:6,
		center: new google.maps.LatLng(19.430, -99.100),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	});
	directionsDisplay.setMap(map);
		
/*agreue la segunda VERACRUZ*/
var info2=new google.maps.InfoWindow;
var clickMarker2= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info2.setContent('<h3>Veracruz </h3><img src="img/Veracruzz.png"/>'
			+"latitude "+latLng+"<br /><br />"
			+"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'
			+'<img src="img/gas1.PNG"/>' 
			+"<br /><br />"+
			"<a href='http://veracruz.gob.mx/'>Link of site Veracruz</a>");
	info2.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info2.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker2=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.1738,  -96.1342),
	//icon:iconMarker
});
google.maps.event.addListener(marker2,'mouseover',clickMarker2);


/*SE AGREGA TAMPICO*/

var info3=new google.maps.InfoWindow;
var clickMarker3= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info3.setContent('<h3>Tampico</h3><img src="img/tampicoo.jpg"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"
			+"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'
			+'<img src="img/gas1.PNG"/>' 
			+"<br /><br />"+
			"<a href='http://tamaulipas.gob.mx/tamaulipas/municipios/tampico//'>Link of site Tampico</a>");
	info3.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info3.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker3=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.1667, -97.6333),
	//icon:iconMarker
});
google.maps.event.addListener(marker3,'mouseover',clickMarker3);

/*agregando tamaulipas*/

var info4=new google.maps.InfoWindow;
var clickMarker4= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info4.setContent('<h3>TAMAULIPAS </h3><img src="img/tamaulipas.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"+
			"<a href='http://tamaulipas.gob.mx//'>Link of site TAMAULIAS</a>");
	info4.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info4.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker4=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(23.3557 , -99.1845),
	//icon:iconMarker
});
google.maps.event.addListener(marker4,'mouseover',clickMarker4);

/*agergando CAMPECHE*/

var info5=new google.maps.InfoWindow;
var clickMarker5= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info5.setContent('<h3>CAMPECHE </h3><img src="img/campeche.png"/>'
			+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"+
			"<a href='http://campeche.gob.mx//'>Link of site Campeche</a>");
	info5.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info5.close();
});

var marker5=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(18.6514,-90.791),
	
});
google.maps.event.addListener(marker5,'mouseover',clickMarker5);
/*guadalajara*/
var info6=new google.maps.InfoWindow;
var clickMarker6= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info6.setContent('<h3>Guadalajara</h3><img src="img/guadalajara.png"/>'
			+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"+
			"<a href='http://portal.guadalajara.gob.mx//'>Link of site Guadalajara</a>");
	info6.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info6.close();
});

var marker6=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(20.6736, -103.344),
	
});
google.maps.event.addListener(marker6,'mouseover',clickMarker6);

/*Aguascalientes*/
var info7=new google.maps.InfoWindow;
var clickMarker7= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info7.setContent('<h3>Aguascalientes</h3><img src="img/aguascalientes.png"/>'
			+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"
			+"type site: "+'<img src="img/Oil-Barrel-icon.png"'+"<br /><br />"+
			"<a href='http://aguascalientes.gob.mx//'>Link of site Aguascalientes</a>");
	info7.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info7.close();
});

var marker7=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(21.8833,  -102.283),
	
});
google.maps.event.addListener(marker7,'mouseover',clickMarker7);


/*Durango*/

var info8=new google.maps.InfoWindow;
var clickMarker8= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info8.setContent('<h3>Durango</h3><img src="img/durango.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"'+"<br /><br />"+
			"<a href='http://durango.gob.mx//'>Link of site Durango</a>");
	info8.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info8.close();
});

var marker8=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(24.016666,  -104.650002),
	
});
google.maps.event.addListener(marker8,'mouseover',clickMarker8);

});/*CIERRE*/
function handleDirectionsResponse(start, end, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML= Math.round(totalDistance/1000);
	}
  }
  function calcRoute(){
	var start = document.getElementById("start").value;
	var end = document.getElementById("end").value;
	var request = { origin: start, destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(
					start, end, directionsResult);
		}
	});
	
  }
 
