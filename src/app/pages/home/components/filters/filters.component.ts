import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.components.html',
  })

export class FiltersComponent implements OnInit {
  categories = ['food', 'clothes'];

  constructor() { }

  ngOnInit(): void {
  }

}
