import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view-window',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  constructor() { }

  userName = "Tom Shaffir";
  userFollowersCount = 2000;

  ngOnInit(): void {
  }

}
