import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/hero.interface';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() heroCard: any| undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
