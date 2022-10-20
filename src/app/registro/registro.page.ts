import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardInterface } from 'src/app/services/interfaces/card.interface';
import { NotesService } from '../services/notes.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
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

  constructor(private router: Router, private notesService: NotesService) { this.list = this.notesService.getList(); }

  ngOnInit() { }



  public goBack(item) {
    item.isReadingMore = !item.isReadingMore;
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

  public onComments(item: any) {

    item.isReadingMore = !item.isReadingMore;
    this.onNotasButton();
  }
}

