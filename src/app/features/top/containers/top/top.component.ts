import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from '../../../../domain/category';
import { Flag, SearchCondition } from '../../../../domain/condition';
import { FlagService } from '../../../../infrastructures/gateways/flag.service';
import { UserGateway } from '../../../../infrastructures/gateways/user.gateway';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopComponent implements OnInit {
  constructor(private readonly _userGateway: UserGateway, private readonly _flagService: FlagService) {}
  users$ = this._userGateway.users$;
  additionalCondition$ = this._flagService.flags$;

  categories: Category[] = [
    { id: 1, name: 'todos' },
    { id: 2, name: 'photos' },
  ];

  ngOnInit(): void {
    this._userGateway.getUsers();
    this._flagService.buildTodoConditions();
  }

  changeUser(): void {
    this._flagService.buildTodoConditions();
  }

  changeCategory(flag: Flag) {
    if (flag.categoryId === 1) {
      this._flagService.buildTodoConditions();
      return;
    }

    this._flagService.buildPhotoConditions(flag.userId);
  }

  search(searchCondition: SearchCondition): void {
    console.log(searchCondition);
  }
}
