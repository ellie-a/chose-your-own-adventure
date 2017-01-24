import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartGameComponent } from './start-game/start-game.component'

const appRoutes: Routes = [
  {
    path: '',
    component: StartGameComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
