# Woman Help Woman
## Site de abrigo para as refugiadas!

O site a seguir é um aplicativo onde as mulheres fora da ucrânia podem abrigar refugiadas ucranianas e seus dependentes enquanto os homens estão na guerra.

O site contém um carousel de cards feito em CSS, onde aparece todas as solicitações de morada das refugidas para a anfitriã da casa e, caso o usuário não mexa na tela, o carousel ficará rodando automaticamente. Além disso, o site contém um mapa feito em JAVA SCRIPT, no qual mostra onde as refugiadas estão abrigadas.
Para exibir esse mapa, basta clicar no botão "MOSTRAR MAPA!" que, além de mostrar o mapa, mostrará o estado, o país e as coordenadas do local onde as refugiadas estão.

Função mostrar a posição no mapa, em JavaScript:

	function  showPosition(pos) {

		var  lt = 50.33514898909946
		var  lg = 34.90596447104751
		document.getElementById("geo").innerHTML =
	"Okhtyrka, Ucrânia" + "<br>" + "Latitude: " + lt + " Longitude: " + lg
		var  map = L.map('map').setView([lt, lg], 13);
		var  marker = L.marker([lt, lg]).addTo(map);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

		attribution:  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom:  18,
		id:  'mapbox/streets-v11',
		tileSize:  512,
		zoomOffset: -1,
		accessToken:  'pk.eyJ1IjoibWFyc2gwOTAiLCJhIjoiY2wzMWhuZWh6MDl1ZTNnbGNoZjRsN290bCJ9.Y72b4pkvxSoskS8sFA5InA'
		}).addTo(map);
	}
