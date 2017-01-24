import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartGameComponent } from './start-game/start-game.component'
import { PathDetailsComponent } from './path-details/path-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartGameComponent
  },
  {
    path: 'paths/:id',
    component: PathDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
