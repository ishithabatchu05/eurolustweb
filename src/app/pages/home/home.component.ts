import { Component, OnInit } from '@angular/core';
import { DestinationDetailsService } from 'src/app/services/destination-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:DestinationDetailsService){ }
  destinationData:any;
  ngOnInit(): void {
    this.destinationData = this.service.destinationDetails;
      
  }

}
