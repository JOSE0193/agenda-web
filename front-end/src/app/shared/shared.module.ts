import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertModalComponent } from './alert-modal/alert-modal-component/alert-modal.component';
import { ErroMsgComponent } from './erro-msg/erro-msg.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { FrameRegisterComponent } from './frame-register/frame-register.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    AlertModalComponent,
    ErroMsgComponent,
    FramePageComponent,
    FrameRegisterComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    HttpClientModule,
    CustomFormsModule,
  ],
  exports:[
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    CollapseModule,
    CarouselModule,
    AccordionModule,
    ButtonsModule,
    AlertModule,
    AlertModalComponent,
    ErroMsgComponent,
    FramePageComponent,
    FrameRegisterComponent,
    ConfirmModalComponent
  ]
})
export class SharedModule { }
