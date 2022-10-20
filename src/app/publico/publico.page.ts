import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardInterface } from '../services/interfaces/card.interface';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.page.html',
  styleUrls: ['./publico.page.scss'],
})
export class PublicoPage implements OnInit {
  @Input()
  public cor: string;
  @Input()
  public title: string;
  @Input()
  public body: string;
  meuFavoritoClass = false;
  name = 'Tales';
  work = 'Estagiário';
  public list;
  public liked;
  public isOpen;

  public commentsInformations = {
    photo: '../../assets/img/blank-profile.png',
    postComName: 'Tales',
    postComment: '',
  };
  public iconName: string;

  constructor(private router: Router, private notesService: NotesService) {
    this.list = this.notesService.getList();
    this.onClickClass(this.list[0]);
  }

  ngOnInit() { }

  public onComments(item: any) {
    item.isReadingMore = !item.isReadingMore;
    this.router.navigate(['registro']);
  }
  public onClickClass(item: any) {
    item.like = !item.like;
    if (item.like) {
      item.likeIconName = 'heart';
    } else {
      item.likeIconName = 'heart-outline';
    }
    console.log(item);
  }

  onPostNote(item: CardInterface, commentInput: HTMLInputElement) {
    item.comments.push({
      photoUrl: this.commentsInformations.photo,
      comName: this.commentsInformations.postComName,
      comment: commentInput.value,
    });
    commentInput.value = '';
  }
  onNotasButton() {
    this.router.navigate(['publico']);
  }
  onPublicoButton() {
    this.router.navigate(['notas']);
  }
  onPerfilButton() {
    this.router.navigate(['perfil']);
  }
}
