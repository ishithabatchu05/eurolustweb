import { Component, OnInit } from '@angular/core';
import { DestinationDetailsService } from 'src/app/services/destination-details.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  constructor(private service:DestinationDetailsService) {}
  destinationData:any;
  ngOnInit(): void{
    this.destinationData = this.service.destinationDetails;

  }


}
