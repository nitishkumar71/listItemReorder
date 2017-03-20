import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  public users: any

  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get('https://randomuser.me/api/?results=20')
      .subscribe(response => {
        this.users = response.json().results;
        console.log(this.users);
      });
  }

 reorderItems(indexes) {
    this.users = reorderArray(this.users, indexes);
  }
}
