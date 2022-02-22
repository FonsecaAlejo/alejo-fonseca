import { Component, OnInit } from '@angular/core';
import { MarsService } from 'src/app/core/services/mars.service';
import { Photo } from 'src/app/shared/interfaces/mars.interfaces';

@Component({
  selector: 'app-mars-filter',
  templateUrl: './mars-filter.component.html',
  styleUrls: ['./mars-filter.component.css']
})
export class MarsFilterComponent implements OnInit {

  marsPhotos: Photo[] = [];
  loading = true;

  constructor( private marsService: MarsService ) { }

  ngOnInit( ): void {

    this.getMarsPhotosFilter();
  }

  /**
   * Searches photos by 3 filter types and returns an array of Photos[ ]
   *
   * @param name Curiosity | Opportunity | Spirit
   */
  getMarsPhotosFilter( name?: string ): void{

    this.loading = true;

    if (!name) { name = 'spirit'; }

    this.marsService.getMarsPhotosFilter(name).subscribe( resp => {

      this.marsPhotos = resp.photos;
      this.loading = false;
    })
  }

}
