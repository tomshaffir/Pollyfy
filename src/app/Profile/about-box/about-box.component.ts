import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-box',
  templateUrl: './about-box.component.html',
  styleUrls: ['./about-box.component.scss']
})
export class AboutBoxComponent implements OnInit {

  activePollsCount = 5;
  createdPollsCount = 100;
  sharedPicksCount = 50;
  votesCount = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
