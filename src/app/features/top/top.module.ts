import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopComponent } from './containers/top/top.component';
import { TopPageComponent } from './pages/top/top.component';
import { SearchFormComponent } from './views/search-form/search-form.component';

@NgModule({
  declarations: [TopPageComponent, TopComponent, SearchFormComponent],
  imports: [CommonModule],
})
export class TopModule {}
