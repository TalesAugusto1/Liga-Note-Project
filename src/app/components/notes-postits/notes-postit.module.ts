import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesPostitsComponent } from './notes-postits.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NotesPostitsComponent],
  exports: [NotesPostitsComponent],
})
export class NotesPostitsModule {}
