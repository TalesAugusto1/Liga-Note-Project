import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotasPage } from 'src/app/notas/notas.page';
import { CardInterface } from 'src/app/services/interfaces/card.interface';

import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-postits',
  templateUrl: './notes-postits.component.html',
  styleUrls: ['./notes-postits.component.scss'],
})
export class NotesPostitsComponent {
  @Input()
  public item: CardInterface;

  @Input()
  public jokerPosition: { top: string; left: string } = {
    top: undefined,
    left: undefined,
  };
  @Input()
  public cardIndex = 0;

  @Output()
  public cardOriginEmmitter: EventEmitter<boolean> = new EventEmitter();

  public juncao: NotasPage;

  public openedCard = '';

  public list;

  constructor(private notesService: NotesService) {
    this.list = this.notesService.getList();
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then(
      () => console.log('fired')
    );
  }

  async onClickNotes(element: any) {
    const jokerConst = document.getElementById('joker');

    this.jokerPosition.left = element.target.getBoundingClientRect().x + 'px';
    this.jokerPosition.top = element.target.getBoundingClientRect().y + 'px';

    await this.delay(100);

    jokerConst.classList.add('jokerOpen');

    console.log(
      element.target.getBoundingClientRect().x,
      element.target.getBoundingClientRect().y
    );
  }

  public onPublic(item: any) {
    item.isPublic = !item.isPublic;
  }
}
