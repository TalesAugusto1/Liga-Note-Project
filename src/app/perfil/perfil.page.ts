import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { CardInterface } from 'src/app/services/interfaces/card.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
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
  public sideMenu = true;
  constructor(private router: Router, private notesService: NotesService) {
    this.list = this.notesService.getList();
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
  onNotasButton() {
    this.router.navigate(['publico']);
  }
  onPublicoButton() {
    this.router.navigate(['notas']);
  }
  onPerfilButton() {
    this.router.navigate(['perfil']);
  }

  onPostNote(item: CardInterface, commentInput: HTMLInputElement) {
    item.comments.push({
      photoUrl: this.commentsInformations.photo,
      comName: this.commentsInformations.postComName,
      comment: commentInput.value,
    });
    commentInput.value = '';
  }
  setName(name: string) { }
  onSideMenu(sideMenu: boolean) {
    this.sideMenu = !this.sideMenu;
  }
}
