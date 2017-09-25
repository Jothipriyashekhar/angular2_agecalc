import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     age : number;
     message : string = 'Know your age by selecting your Date Of Birth';

  onCalculate(bday){
           let timeDiff = Math.abs(Date.now() - new Date(bday).getTime());
            console.log('diff: ', timeDiff)
            this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
            console.log(this.age)
  }
}
