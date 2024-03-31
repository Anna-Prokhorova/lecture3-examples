import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './components/draft/draft.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CardsComponent,
  },
  {
    path: 'draft',
    component: DraftComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
