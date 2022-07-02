import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SystemSettingsComponent } from './pages/system-settings/system-settings.component';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { NameCardComponent } from './pages/system-settings/components/name-card/name-card.component';
import { NamePopupComponent } from './pages/system-settings/components/name-popup/name-popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SystemSettingsComponent,
    SidebarComponent,
    ControlPanelComponent,
    NameCardComponent,
    NamePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
