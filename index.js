let map, Popup;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.357042, lng: -71.099824 },
    zoom: 17.25,
  });
  const vassarSquare = new google.maps.Rectangle({
    strokeColor: "#ffcc00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#ffcc00",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 42.3592,
      south: 42.3588,
      east: -71.0972,
      west: -71.098,
    },
  });
  const simmonsSquare = new google.maps.Rectangle({
    strokeColor: "#ffcc00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#ffcc00",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 42.3577,
      south: 42.3573,
      east: -71.1004,
      west: -71.1012,
    },
  });
  const maseehSquare = new google.maps.Rectangle({
    strokeColor: "#33cc33",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#33cc33",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 42.3580,
      south: 42.3576,
      east: -71.0930,
      west: -71.0938,
    },
  });
  const mccormickSquare = new google.maps.Rectangle({
    strokeColor: "#33cc33",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#33cc33",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 42.3575,
      south: 42.3571,
      east: -71.0941,
      west: -71.0949,
    },
  });
  const bakerSquare = new google.maps.Rectangle({
    strokeColor: "#ffcc00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#ffcc00",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 42.3569,
      south: 42.3565,
      east: -71.0954,
      west: -71.0962,
    },
  });
  const nextSquare = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 42.3550,
      south: 42.3546,
      east: -71.1016,
      west: -71.1024,
    },
  });
  class Popup extends google.maps.OverlayView {
    position;
    containerDiv;
    constructor(position, content) {
      super();
      this.position = position;
      content.classList.add("popup-bubble");

      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");

      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(content);
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes().floatPane.appendChild(this.containerDiv);
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position
      );
      // Hide the popup when it is far out of view.
      const display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }

  vassarPopup= new Popup(
    new google.maps.LatLng(42.3591576431904, -71.09753953359576),
    document.getElementById("vassarText")
  );
  vassarPopup.setMap(map);

  simmonsPopup = new Popup(
    new google.maps.LatLng(42.35760213369009, -71.10084304425365),
    document.getElementById("simmonsText")
  );
  simmonsPopup.setMap(map);

  nextPopup = new Popup(
    new google.maps.LatLng(42.354933648154106, -71.10194649503866),
    document.getElementById("nextText")
  );
  nextPopup.setMap(map);

  bakerPopup = new Popup(
    new google.maps.LatLng(42.356849216129376, -71.09574663443978),
    document.getElementById("bakerText")
  );
  bakerPopup.setMap(map);

  mccormickPopup = new Popup(
    new google.maps.LatLng(42.35744866400803, -71.09450749384513),
    document.getElementById("mccormickText")
  );
  mccormickPopup.setMap(map);

  maseehPopup = new Popup(
    new google.maps.LatLng(42.3578916953494354, -71.09333540631418),
    document.getElementById("maseehText")
  );
  maseehPopup.setMap(map);
}
 



