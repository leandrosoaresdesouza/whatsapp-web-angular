import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.scss']
})
export class FriendSearchComponent implements OnInit {

  search = '';
  isFocus = false;
  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  clearSearch() {
    this.search = '';
  }

  searchFocus() {
    this.isFocus = true;
  }

  searchFocusOut() {
    this.isFocus = false;
  }

}
