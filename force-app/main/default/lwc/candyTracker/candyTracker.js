/* eslint-disable no-console */
import { LightningElement, track } from "lwc";

export default class CandyTracker extends LightningElement {
  @track error;
  @track mapMarkers = [];
  @track position = {
    coords: {}
  };

  //location: {
  //   Latitude: position.coords.latitude,
  //   Longitude: position.coords.longitude
  // }

  onTapGetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.position = position;
          const test = {
            location: {
              Latitude: position.coords.latitude,
              Longitude: position.coords.longitude
            }
          };
          console.log(test);
          console.log(this.mapMarkers);
          this.mapMarkers = [test];
        },
        error => {
          this.error = error;
          console.log(`No candy for you : ${error}`);
        }
      );
    } else {
      console.log("Geolocation not allowed. No candy for you.");
    }
  }

  renderedCallback() {}
}
