import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopComponent } from './containers/top/top.component';
import { TopPageComponent } from './pages/top/top.component';

@NgModule({
  declarations: [TopPageComponent, TopComponent],
  imports: [CommonModule],
})
export class TopModule {}
