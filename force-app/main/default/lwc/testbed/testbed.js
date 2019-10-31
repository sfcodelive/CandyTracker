import { LightningElement, track } from "lwc";

export default class Testbed extends LightningElement {
  @track latitude = 0.0;
  @track longitude = 0.0;
  @track position = {
    coords: {}
  };

  @track mapMarkers = [];

  // Called when component is displayed
  // connectedCallback() {
  //   console.log("Candy Tracker Online");
  //   navigator.geolocation.getCurrentPosition(
  //     this.displayPosition,
  //     this.displayError
  //   );
  // }

  tappedGetGeoFix(event) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.position = position;
          this.mapMarkers.push({
            location: {
              Latitude: position.coords.latitude,
              Longitude: position.coords.longitude
            }
          });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

  displayPosition(position) {
    this.position = position;
    console.log("test");
  }

  displayError(error) {
    var errors = {
      1: "Permission denied",
      2: "Position unavailable",
      3: "Request timeout"
    };
    this.message = "Error: " + errors[error.code];
    console.log("Error: " + errors[error.code]);
  }
}
