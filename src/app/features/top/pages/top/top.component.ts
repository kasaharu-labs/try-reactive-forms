import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
