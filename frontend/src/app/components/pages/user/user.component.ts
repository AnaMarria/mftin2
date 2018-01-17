import { Component, OnInit, NgModule } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ButtonModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/components/dialog/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  items: MenuItem[];
  newUser: User = new User('', '', '');
  displayUserDialog: boolean;
  add: boolean;
  edit: boolean;

  constructor(private apiService: ApiService) {
    this.displayUserDialog = false;
    this.edit = false;
    this.add = false;
   }

  ngOnInit() {

    this.apiService.get('api/user/').subscribe(res => {
      this.users = res;
    });

    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewUser(this.selectedUser) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteRecipe(this.selectedUser) },
      { label: 'Edit', icon: 'fa-edit', command: (event) => this.editUser(this.selectedUser) }
    ];
  }
  viewUser(select: User) {
    alert('Ai accesat user-ul cu numele: ' + select.username + ' si adresa de email ' + select.email);
    console.log(select);
  }
  showDialogToAddUser() {
    this.displayUserDialog = true;
    this.add = true;
  }
  saveUser() {
    if ( this.add === true ) {
      this.apiService.post('api/user', this.newUser).subscribe();
    } else {
      this.apiService.put('api/user/' + this.newUser.id, this.newUser).subscribe();
      console.log(JSON.stringify(this.newUser));
    }
    this.displayUserDialog = false;
    this.add = false;
    this.edit = false;
    this.newUser = new User('', '', '');
  }
  editUser(select: User) {
    console.log(JSON.stringify(select));
  }
  showDialogToEditUser() {
    this.edit = true;
    this.displayUserDialog = true;
    this.newUser = new User(this.selectedUser.username,
                            this.selectedUser.password,
                            this.selectedUser.email);
    this.newUser.id = this.selectedUser.id;
  }
  deleteRecipe(select: User) {
    alert('Utilizatorul ' + select.username + ' a fost sters, please refresh the page!');

    this.apiService.delete('api/user/' + select.id).subscribe(res => {
      console.log(res);
    });
  }
  close() {
    this.displayUserDialog = false;
  }
}

class User {
  id: number;
  username: string;
  password: string;
  email: string;
  constructor( username?: string, password?: string, email?: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
