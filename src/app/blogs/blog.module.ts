import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
  },
];

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BlogModule {}
