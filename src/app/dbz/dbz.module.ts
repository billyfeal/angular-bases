import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { DBZMainPageComponent } from './pages/main-page-component';

@NgModule({
  declarations: [DBZMainPageComponent, ListComponent, AddCharacterComponent],
  exports: [DBZMainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
