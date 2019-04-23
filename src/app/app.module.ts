// core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// PrimeNg
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {ChartModule} from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';
import { CheckboxModule } from 'primeng/checkbox';
import { BlockUIModule } from 'primeng/blockui';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './body/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './body/menu/menu.component';
import { BodyComponent } from './body/body.component';
import { WorkInProgressComponent } from './body/work-in-progress/work-in-progress.component';
import { ScadaComponent } from './body/scada/scada.component';
import { LoginComponent } from './login/login.component';
import { ElementComponent } from './body/element/element.component';

// module
import { AppRoutingModule } from './app-routing.module';

// service
import { WindowRefService } from './service/window-ref.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { BlockUiService } from './service/block-ui.service';
import { BlockuiComponent } from './utils/blockui/blockui.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    BodyComponent,
    ElementComponent,
    BlockuiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextareaModule,
    FileUploadModule,
    ChartModule,
    DataViewModule,
    CheckboxModule,
    BlockUIModule
  ],
  providers: [WindowRefService, AuthGuardService, AuthService, BlockUiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
