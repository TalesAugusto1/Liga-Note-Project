import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userName = 'teste';
  userEmail = '';
  userPassword = '';
  userRole = 'teste';
  userImg = '../../assets/img/Bobba.jpg';

  public passwordId;
  public ionIconId;
  public t;
  public warn;


  constructor(private router: Router, private service: PostService, private http: HttpClient) { }

  onShow() {

    this.passwordId = document.getElementById('inp-Password');
    this.ionIconId = document.getElementById('ionShow');
    if (this.passwordId.type === 'password') {
      this.passwordId.type = 'text';
      this.ionIconId.name = 'eye-outline';
    } else {
      this.passwordId.type = 'password';
      this.ionIconId.name = 'eye-off-outline';
    }
  }
  public async onConfirmarButton() {

    const result: any = await this.service.post('/auth/login', { username: this.userEmail, password: this.userPassword });
    //get user username and password, post method
    localStorage.setItem(environment.keys.token, result.success.token);
    console.log(result);
    this.router.navigate(['notas']);

  }
  onRegisterButon() {
    this.t = !this.t;
    this.warn = false;
    document.getElementById('centerContent').classList.remove('center--content-height1');
    document.getElementById('centerContent').classList.add('center--content-height2');

    document.getElementById('registerBtn').classList.remove('m-fadeOut');
    document.getElementById('registerBtn').classList.add('m-fadeIn');
  }
  onRegisterButonTop() {
    this.t = !this.t;
    document.getElementById('centerContent').classList.remove('center--content-height2');
    document.getElementById('centerContent').classList.add('center--content-height1');
    document.getElementById('registerBtn').classList.remove('m-fadeIn');
    document.getElementById('registerBtn').classList.add('m-fadeOut');

  }

  onBackButton() {
    this.router.navigate(['home']);
  }
}
