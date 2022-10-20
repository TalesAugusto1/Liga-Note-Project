import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from 'src/app/home/home.page';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})


export class RegisterComponent implements OnInit {
  userName = '';
  userEmail = '';
  userPassword = '';
  userRole = 'vazio';
  userImg = null;
  public openedRegister;
  public registerExitBtn = document.getElementById('registerBtn');
  constructor(
    private router: Router, public homePage: HomePage, private service: PostService, private http: HttpClient
  ) { }

  ngOnInit() { }


  onRegisterButon() {

    this.homePage.t = !this.homePage.t;
    document.getElementById('centerContent').classList.remove('center--content-height2');
    document.getElementById('centerContent').classList.add('center--content-height1');

    document.getElementById('centerContent').classList.remove('center--content-height1');
    document.getElementById('centerContent').classList.add('center--content-height2');
    document.getElementById('centerContent').classList.add('center--content-height2');
    document.getElementById('registerBtn').classList.remove('m-fadeOut');
    document.getElementById('registerBtn').classList.add('m-fadeIn');

  }

  public async onConfirmRegisterButton() {

    const result = await this.service.post('/user', {
      name: this.userName,
      email: this.userEmail,
      password: this.userPassword,
      role: this.userRole,
      imageUrl: this.userImg
    });

    console.log(result);
    //get user username and password, post method

    this.router.navigate(['notas']);
  }
  onBackButton() {
    this.router.navigate(['home']);
  }
}
