import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Category } from '../../../../domain/category';
import { Condition, SearchCondition } from '../../../../domain/condition';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  constructor(private readonly _fb: FormBuilder) {}
  @Input()
  users!: User[];
  @Input()
  categories!: Category[];
  @Input()
  additionalConditions!: Condition[];
  @Output()
  requestSubmit = new EventEmitter<SearchCondition>();

  searchForm = this._fb.group({ userId: '', category: '', condition: '' });

  get userIds() {
    return this.users.map((user) => user.id);
  }

  ngOnInit(): void {
    this.searchForm.patchValue({ userId: this.userIds[0], category: this.categories[0].id });
  }

  changeCategory(): void {
    console.log('SearchFormComponent#chagenCategory - event: ', this.searchForm.value.category);
  }

  onSubmit(): void {
    this.requestSubmit.emit(this.searchForm.value);
  }
}
