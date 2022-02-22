import { Component, OnInit } from '@angular/core';
import { MarsService } from 'src/app/core/services/mars.service';
import { Photo } from 'src/app/shared/interfaces/mars.interfaces';

@Component({
  selector: 'app-mars-all',
  templateUrl: './mars-all.component.html',
  styleUrls: ['./mars-all.component.css']
})
export class MarsAllComponent implements OnInit {

  marsPhotos: Photo[] = [];
  loading = true;

  constructor( private marsService: MarsService ) { }

  ngOnInit(): void {
    this.getMarsPhotos();
  }

  /**
   * Search through Spirit's filter and return an array of Photos[ ]
   */
  getMarsPhotos(): void{

    this.loading = true;

    this.marsService.getMarsPhotos().subscribe( resp => {

      this.loading = false;
      this.marsPhotos = resp.photos;
    })
  }

}
