import { SongsService } from './../services/songs.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private service:SongsService) { }

  ngOnInit(): void {
  }
  songs:any;
  loading:boolean=true;
  data:any;
  obsSongs:any;

  getAllSongs(){
    this.songs= this.service.getSongs();
    this.obsSongs=from(this.songs);

    this.obsSongs.subscribe({
      next: (data:any)=>this.data=data,
      error:(error:any)=>this.data=error,
      // complete:()=>this.data="complete"
    });
  }





}
