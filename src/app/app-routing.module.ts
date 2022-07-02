import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { SystemSettingsComponent } from './pages/system-settings/system-settings.component';

const routes: Routes = [
  { path: 'control-panel', component: ControlPanelComponent },
  { path: 'system-settings', component: SystemSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
