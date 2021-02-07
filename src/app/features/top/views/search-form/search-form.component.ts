import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';
import { Category } from '../../../../domain/category';
import { Condition, Flag, SearchCondition } from '../../../../domain/condition';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  constructor(private readonly _ngneatFb: FormBuilder) {}
  @Input()
  users!: User[];
  @Input()
  categories!: Category[];
  @Input()
  additionalConditions!: Condition[];

  @Output()
  requestSubmit = new EventEmitter<SearchCondition>();
  @Output()
  requestChangeUser = new EventEmitter<boolean>();
  @Output()
  requestChangeCategory = new EventEmitter<Flag>();

  searchForm!: FormGroup<SearchCondition>;

  ngOnInit(): void {
    this.searchForm = this._ngneatFb.group({ userId: this.users[0].id, category: this.categories[0].id.toString(), condition: '' });
  }

  onChangeUser(): void {
    this.searchForm.patchValue({ category: this.categories[0].id.toString(), condition: '' });
    this.requestChangeUser.emit(true);
  }

  onChangeCategory(): void {
    const categoryId = this.searchForm.value.category;
    const userId = this.searchForm.value.userId;
    this.requestChangeCategory.emit({ userId, categoryId: +categoryId });
  }

  onSubmit(): void {
    this.requestSubmit.emit(this.searchForm.value);
  }
}
