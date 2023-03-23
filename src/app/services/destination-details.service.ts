import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationDetailsService {

  constructor() { }

  //destinationdetails
  destinationDetails = [
    {
      id:1,
      destinationName:"Via Krupp",
      destinationDetails:"While the risk of tumbling rocks means you can no longer stroll the elegant switchback bends that make up Via Krupp, that doesn’t stop the view at the top from being any less spectacular. Head up to the Augustus Gardens and gaze out at the best of Capri laid before you.",
      destinationImg:"https://images.unsplash.com/photo-1603991915499-ebaa1e8ab558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id:2,
      destinationName:"San Cassiano",
      destinationDetails:"Not only is San Cassiano the epitome of alpine charm (think wooden-clad chalets with castle-like turrets), but it’s also home to a rich Ladin culture and a consequently authentic South Tyrolean experience. Soak it all in from a rustic-luxe loft suite at Rosa Alpina.",
      destinationImg:"https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:3,
      destinationName:"San Gimignano, Tuscany",
      destinationDetails:"Serving up some of the country’s best gelato (an accolade that isn’t given out freely), an afternoon in San Gimignano is always one well spent. The hilltop town provides a relaxed antidote to the bustle of Siena and with its enchanting views across the cypress-topped hillsides, it feels a million miles from city life.",
      destinationImg:"https://images.unsplash.com/photo-1625139180258-ea3cc987f24c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id:4,
      destinationName:"Isola Bella, Sicily",
      destinationDetails:"Tucked away in a quiet cove and joined onto the mainland by just a narrow strip of land, Isola Bella is a pinprick of an island with more than its fair share of natural beauty. So-called ‘The Pearl of the Ionian Sea’, wait for low tide before heading across the island to discover hidden sea grottoes and pebbled beaches in a place that will feel all your own.",
      destinationImg:"https://hips.hearstapps.com/hmg-prod/images/hbz-italy-sicily-sunrise-captured-over-famous-island-isola-bella-ocean-view-pink-skies-1541710899.jpg?crop=1xw:1xh;center,top&resize=980:*"
    },
    {
      id:5,
      destinationName:"Bologna, Emilia-Romagna",
      destinationDetails:"Bologna is one of those places that really comes into its own come sunrise and sunset. Clad in terracotta, the shifting sun adds a whole new dimension to the city as those red hues are lifted and bathed in a golden light, most befitting of the city nicknamed ‘La Rossa’.",
      destinationImg:"https://hips.hearstapps.com/hmg-prod/images/hbz-italy-bologna-quiet-streets-in-autumn-1541710890.jpg?crop=1xw:1xh;center,top&resize=980:*"
    },
    {
      id:6,
      destinationName:"Rinella Bay, Salina, Aeolian Islands",
      destinationDetails:"Set to a backdrop of verdant hillsides and conical volcanoes, the beauty of the bay of Rinella is that peculiar kind, born out of contrast. Volcanic sands the color of night, are lapped by those aquamarine Mediterranean waters and perfectly offset by the pastel pink, blue, and white hues of the seafront villages.",
      destinationImg:"https://hips.hearstapps.com/hmg-prod/images/hbz-italy-aeolians-salina-coastline-1541710896.jpg?crop=1xw:1xh;center,top&resize=980:*"
    },
  ]

 
}



