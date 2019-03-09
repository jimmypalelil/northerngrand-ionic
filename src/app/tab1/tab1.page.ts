import {Component, OnInit} from '@angular/core';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: any;

  constructor(private listService: ListService) {}

  ngOnInit() {
  }
}
