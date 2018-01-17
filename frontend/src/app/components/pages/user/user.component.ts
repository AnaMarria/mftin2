import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  items: MenuItem[];
  // newUser: User = new User('','','');
  displayUserDialog: boolean;
  // user: User = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.get('api/user/').subscribe(res => {
      this.users = res;
    });

    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewRecipe(this.selectedUser) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteRecipe(this.selectedUser) },
      { label: 'Edit', icon: 'fa-edit', command: (event) => this.editRecipe(this.selectedUser) }
    ];
  }
  showDialogToAddUser() {
    // incearca sa decomentezi putin astea
    // this.newUser = true;
    // this.user = {};
    this.displayUserDialog = true;
  }
  viewRecipe(select: User) {
    alert('Ai accesat userul cu numele: ' + select.username + ' si adresade email ' + select.email);
    console.log(select);
  }
  editRecipe(select: User) {
    console.log(JSON.stringify(select));

  }
  deleteRecipe(select: User) {
    alert('Utilizatorul ' + select.username + ' a fost sters, please refresh the page!');

    this.apiService.delete('api/user/' + select.id).subscribe(res => {
      console.log(res);
    });
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
