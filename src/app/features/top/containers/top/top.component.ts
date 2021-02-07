import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from '../../../../domain/category';
import { Condition, SearchCondition } from '../../../../domain/condition';
import { AlbumGateway } from '../../../../infrastructures/gateways/album.gateway';
import { UserGateway } from '../../../../infrastructures/gateways/user.gateway';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopComponent implements OnInit {
  constructor(private readonly _userGateway: UserGateway, private readonly _albumGateway: AlbumGateway) {}
  users$ = this._userGateway.users$;

  ngOnInit(): void {
    this._userGateway.getUsers();
  }

  get categories(): Category[] {
    return [
      { id: 1, name: 'todos' },
      { id: 2, name: 'photos' },
    ];
  }

  todoConditions(): Condition[] {
    return [
      { id: 1, condition: 'completed' },
      { id: 2, condition: 'uncompleted' },
    ];
  }

  async additionalConditions(categoryId: number, userId: number): Promise<Condition[]> {
    const todoConditions: Condition[] = [
      { id: 1, condition: 'completed' },
      { id: 2, condition: 'uncompleted' },
    ];
    const albums = await this._albumGateway.getAlbums(userId).toPromise();
    const photoConditions: Condition[] = albums.map((album, index) => ({ id: index + 3, condition: String(album.id) }));

    return categoryId === 1 ? todoConditions : photoConditions;
  }

  search(searchCondition: SearchCondition): void {
    console.log(searchCondition);
  }
}
