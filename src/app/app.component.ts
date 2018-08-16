import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search (searchForm: NgForm){
    console.log(searchForm)
    if(searchForm.valid){
      let url = 'https://' + searchForm.value.engine + searchForm.value.query.replace(/ /g, '+')
      console.log(url)
      window.location.href = url
    } else {
      alert(`${searchForm.value.query ? ' ' : 'you are missing query!'}
${searchForm.value.engine ? ' ' : 'you didn\'t select an engine!'}`)
    }
    
  }
}
