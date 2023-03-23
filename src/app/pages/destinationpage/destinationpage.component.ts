import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationDetailsService } from 'src/app/services/destination-details.service';

@Component({
  selector: 'app-destinationpage',
  templateUrl: './destinationpage.component.html',
  styleUrls: ['./destinationpage.component.css']
})
export class DestinationpageComponent implements OnInit {
  constructor(private param:ActivatedRoute,private service:DestinationDetailsService) { }
  getdestinationId:any;
  destinationData:any;
  ngOnInit(): void {
      this.getdestinationId = this.param.snapshot.paramMap.get('id');
      console.log(this.getdestinationId,'getdestination');
      if(this.getdestinationId)
       {
        this.destinationData = this.service.destinationDetails.filter((value)=>{
          return value.id == this.getdestinationId;
          
        });
        console.log(this.destinationData,'destinationData>>');
          
        
      }
    }
  }
        