import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicoPageRoutingModule } from './publico-routing.module';

import { PublicoPage } from './publico.page';
import { NotesPostitsModule } from '../components/notes-postits/notes-postit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicoPageRoutingModule,
    NotesPostitsModule,
  ],
  declarations: [PublicoPage],
})
export class PublicoPageModule {}
