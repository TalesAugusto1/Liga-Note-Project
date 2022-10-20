import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardInterface } from '../services/interfaces/card.interface';
import { PostService } from '../services/post.service';

import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {



  public title: string;
  public body: string;
  public cor: string;
  public isPublic: boolean;
  public like: boolean;
  public result: any = [];

  public jokerPosition: { top: string; left: string } = {
    top: undefined,
    left: undefined,
  };

  public arlequinePosition: { top: string; left: string; rotation: string } = {
    top: undefined,
    left: undefined,
    rotation: undefined,
  };
  public list;
  public openedCardInformation: CardInterface = {
    id: null,
    title: '',
    body: '',
    color: '',
    isPublic: false,
    comments: null,
    isReadingMore: null,
    lIke: null,
    likeIconName: null,
  };
  public lowerCardInformation = {
    title: '',
    body: '',
    color: '',
  };

  openedCard = '';


  public testcor: string;
  public jMenuBtn;

  constructor(private router: Router, private notesService: NotesService, private service: PostService) {
    this.list = this.notesService.getList();
  }
  public async ngOnInit() {

    this.result = await this.service.get('/note/me').then(result => result.success);
    //get user username and password, post method
    console.log(this.result);
  }

  onNotasButton() {
    this.router.navigate(['publico']);
    document.getElementById('joker').classList.remove('jokerOpen');
    document.getElementById('joker').classList.add('jokerClose');
    document.getElementById('jBody').classList.add('textbody');
  }
  onPublicoButton() {
    this.router.navigate(['notas']);
    document.getElementById('joker').classList.remove('jokerOpen');
    document.getElementById('joker').classList.add('jokerClose');
    document.getElementById('jBody').classList.add('textbody');
  }
  onPerfilButton() {
    this.router.navigate(['perfil']);
    document.getElementById('joker').classList.remove('jokerOpen');
    document.getElementById('joker').classList.add('jokerClose');
    document.getElementById('jBody').classList.add('textbody');
  }

  onClickNotes(element: any, obj?: any) {
    document.getElementById('joker').classList.remove('jokerClose');
    if (obj) {
      this.openedCardInformation = obj;
    }
    this.jokerPosition.left = element.target.getBoundingClientRect().x + 'px';
    this.jokerPosition.top = element.target.getBoundingClientRect().y + 'px';

    document.getElementById('jBody').classList.remove('textbody');
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
  }

  public async onClickLowerNotes(cardInd, obj?: any) {
    if (obj) {
      this.lowerCardInformation = obj;
    }

    document.getElementById('cardInd1').classList.remove('nota');
    document.getElementById('cardInd2').classList.remove('nota');
    document.getElementById('cardInd3').classList.remove('nota');
    document.getElementById('cardInd4').classList.remove('nota');
    document.getElementById('cardInd5').classList.remove('nota');
    document.getElementById('cardInd6').classList.remove('nota');

    document.getElementById('cardInd1').classList.add('nota-lower');
    document.getElementById('cardInd2').classList.add('nota-lower');
    document.getElementById('cardInd3').classList.add('nota-lower');
    document.getElementById('cardInd4').classList.add('nota-lower');
    document.getElementById('cardInd5').classList.add('nota-lower');
    document.getElementById('cardInd6').classList.add('nota-lower');

    document.getElementById(cardInd).classList.remove('nota-lower');
    document.getElementById(cardInd).classList.add('nota');



    document.getElementById('joker').classList.remove('jokerOpen');
    document.getElementById('joker').classList.add('jokerClose');
    document.getElementById('jBody').classList.add('textbody');

    document.getElementById('cardInd1').classList.remove('arlequineOpen');
    document.getElementById('cardInd2').classList.remove('arlequineOpen');
    document.getElementById('cardInd3').classList.remove('arlequineOpen');
    document.getElementById('cardInd4').classList.remove('arlequineOpen');
    document.getElementById('cardInd5').classList.remove('arlequineOpen');
    document.getElementById('cardInd6').classList.remove('arlequineOpen');

    document.getElementById(cardInd).classList.add('arlequineOpen');
    document.getElementById('arlequine').classList.remove('arlequineClose');
    await this.delay(50);
    document.getElementById('arlequine').classList.add('arlequineOpen');
    this.testcor = cardInd;
  }

  closeLowerCardBtn() {
    document.getElementById('arlequine').classList.add('arlequineClose');


    document.getElementById('cardInd1').classList.remove('arlequineOpen');
    document.getElementById('cardInd2').classList.remove('arlequineOpen');
    document.getElementById('cardInd3').classList.remove('arlequineOpen');
    document.getElementById('cardInd4').classList.remove('arlequineOpen');
    document.getElementById('cardInd5').classList.remove('arlequineOpen');
    document.getElementById('cardInd6').classList.remove('arlequineOpen');

    document.getElementById('cardInd1').classList.add('nota-lower');
    document.getElementById('cardInd2').classList.add('nota-lower');
    document.getElementById('cardInd3').classList.add('nota-lower');
    document.getElementById('cardInd4').classList.add('nota-lower');
    document.getElementById('cardInd5').classList.add('nota-lower');
    document.getElementById('cardInd6').classList.add('nota-lower');

    document.getElementById('arlequine').classList.remove('arlequineOpen');

    document.getElementById('jBody').classList.add('textbody');
    this.lowerCardInformation.title = '';
    this.lowerCardInformation.body = '';
  }

  onAddSubject() {
    switch (this.testcor) {
      case 'cardInd1':
        this.list.push({
          id: this.findId(),
          title: this.lowerCardInformation.title,
          body: this.lowerCardInformation.body,
          color: '#f77d60',
          like: false,
          likeIconName: 'heart-outline',
          isReadingMore: false,
          comments: [
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
          ],
          isPublic: false,
          lIke: false,
        });
        break;
      case 'cardInd2':
        this.list.push({
          id: this.findId(),
          title: this.lowerCardInformation.title,
          body: this.lowerCardInformation.body,
          color: '#feb196',
          like: false,
          likeIconName: 'heart-outline',
          isReadingMore: false,
          comments: [
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
          ],
          isPublic: false,
          lIke: false,
        });
        break;
      case 'cardInd3':
        this.list.push({
          id: this.findId(),
          title: this.lowerCardInformation.title,
          body: this.lowerCardInformation.body,
          color: '#d7df6b',
          like: false,
          likeIconName: 'heart-outline',
          isReadingMore: false,
          comments: [
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
          ],
          isPublic: false,
          lIke: false,
        });
        break;
      case 'cardInd4':
        this.list.push({
          id: this.findId(),
          title: this.lowerCardInformation.title,
          body: this.lowerCardInformation.body,
          color: '#fef496',
          like: false,
          likeIconName: 'heart-outline',
          isReadingMore: false,
          comments: [
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
          ],
          isPublic: false,
          lIke: false,
        });

        break;
      case 'cardInd5':
        this.list.push({
          id: this.findId(),
          title: this.lowerCardInformation.title,
          body: this.lowerCardInformation.body,
          color: '#a2c8e8',
          like: false,
          likeIconName: 'heart-outline',
          isReadingMore: false,
          comments: [
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
          ],
          isPublic: false,
          lIke: false,
        });
        break;
      case 'cardInd6':
        this.list.push({
          id: this.findId(),
          title: this.lowerCardInformation.title,
          body: this.lowerCardInformation.body,
          color: '#c390bc',
          like: false,
          likeIconName: 'heart-outline',
          isReadingMore: false,
          comments: [
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
            {
              photoUrl: '',
              comName: '',
              comment: '',
            },
          ],
          isPublic: false,
          lIke: false,
        });
        break;
    }

    document.getElementById('arlequine').classList.remove('arlequineOpen');

    document.getElementById('jBody').classList.add('textbody');
    document.getElementById('cardInd1').classList.remove('arlequineOpen');
    document.getElementById('cardInd2').classList.remove('arlequineOpen');
    document.getElementById('cardInd3').classList.remove('arlequineOpen');
    document.getElementById('cardInd4').classList.remove('arlequineOpen');
    document.getElementById('cardInd5').classList.remove('arlequineOpen');
    document.getElementById('cardInd6').classList.remove('arlequineOpen');

    document.getElementById('cardInd1').classList.add('nota-lower');
    document.getElementById('cardInd2').classList.add('nota-lower');
    document.getElementById('cardInd3').classList.add('nota-lower');
    document.getElementById('cardInd4').classList.add('nota-lower');
    document.getElementById('cardInd5').classList.add('nota-lower');
    document.getElementById('cardInd6').classList.add('nota-lower');

    this.lowerCardInformation.title = '';
    this.lowerCardInformation.body = '';
  }

  onExit() {
    document.getElementById('joker').classList.remove('jokerOpen');
    document.getElementById('joker').classList.add('jokerClose');
    document.getElementById('jBody').classList.add('textbody');

    document.getElementById('jBody').classList.add('point-none');
    document.getElementById('jTitle').classList.add('point-none');
    this.jMenuBtn = false;
  }

  public onJMenuClick() {
    this.jMenuBtn = !this.jMenuBtn;
  }

  public onPublicBtn(item: any) {
    item.isPublic = !item.isPublic;
  }
  public onEditBtn() {
    document.getElementById('jBody').classList.remove('point-none');
    document.getElementById('jTitle').classList.remove('point-none');
  }

  public onDeleteBtn(item: CardInterface) {
    const index = this.list.indexOf(item);
    console.log(index, item);
    const test = this.list.splice(index, 1);
    console.log(test);

    document.getElementById('joker').classList.remove('jokerOpen');
    document.getElementById('joker').classList.add('jokerClose');
    document.getElementById('jBody').classList.add('textbody');
    this.jokerPosition.left = 1000 + 'px';
    this.jokerPosition.top = 1000 + 'px';
  }

  public findId(): number {
    let bigger = 0;
    this.list.forEach((item) => {
      if (item.id > bigger) {
        bigger = item.id;
      }
    }
    );
    return bigger + 1;
  }




}
