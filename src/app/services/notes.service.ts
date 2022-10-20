import { Injectable } from '@angular/core';
import { CardInterface } from './interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  line1 =
    '- Organize os gastos futuros\n- Seja um consumidor consciente\n- Experimente novas marcas';
  line2 =
    '\n- Compare preços antes de comprar\n- Vá ao supermercado com uma lista\n- Tenha cautela ao utilizar o cartão de crédito\n';
  line3 = '- Pague as suas contas sempre em dia.....';

  private lista: CardInterface[] = [
    {
      id: 1,
      title: 'Dicas de economia diária ;)',
      body: this.line1 + this.line2 + this.line3,
      color: '#d7df6b',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '../../assets/img/Bobba.jpg',
          comName: 'Boba Fett',
          comment: '"I am not good to me broke"',
        },
        {
          photoUrl:
            'https://i.pinimg.com/736x/45/c2/eb/45c2eb345e62be397731246526792b99.jpg',
          comName: 'Cap. Rex',
          comment:
            '"If That\'s Where You Feel Your Place Is, Then That\'s Where You Belong."',
        },
      ],
      isPublic: true,
      lIke: false,
    },
    {
      id: 2,
      title: 'Título da Nota',
      body: 'Levar jaleco para a próxima aula de química, ela será prática',
      color: '#fef496',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: true,
      lIke: false,
    },
    {
      id: 3,
      title: 'Título da Nota',
      body: 'Dear post, today my app will be evaluated and something will happen.',
      color: '#a2c8e8',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: true,
      lIke: false,
    },
    {
      id: 4,
      title: 'Título da Nota',
      body: 'card4',
      color: '#c390bc',

      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: false,
      lIke: false,
    },
    {
      id: 5,
      title: 'Título da Nota',
      body: 'card5',
      color: '#c390bc',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: false,
      lIke: false,
    },
    {
      id: 6,
      title: 'Título da Nota',
      body: 'card6',
      color: '#d7df6b',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: false,
      lIke: false,
    },
    {
      id: 7,
      title: 'Título da Nota',
      body: 'Shhhh! silêncio! esta informação está escondida.',
      color: '#fef496',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: false,
      lIke: false,
    },
    {
      id: 8,
      title: 'Título da Nota',
      body: 'card8',
      color: '#FEB196',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: false,
      lIke: false,
    },
    {
      id: 9,
      title: 'Título da Nota',
      body: 'Paragraph porttitor liberoametus mollis,aParagraph porttitor liberoa metus mollis,a',
      color: '#d7df6b',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: true,
      lIke: false,
    },
    {
      id: 10,
      title: 'Título da Nota',
      body: 'Paragraph porttitor liberoametus mollis,a \n-Paragraph porttitor libero \n-Paragraph porttitor \n-Paragraph porttitor',
      color: '#f77d60',
      likeIconName: 'heart-outline',
      isReadingMore: false,
      comments: [
        {
          photoUrl: '',
          comName: '',
          comment: '',
        },
      ],
      isPublic: true,
      lIke: false,
    },
  ];

  constructor() { }

  public getList() {
    return this.lista;
  }
}
