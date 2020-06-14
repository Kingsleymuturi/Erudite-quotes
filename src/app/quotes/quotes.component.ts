import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = '🧠Erudite quotes🧠';
  quotes:Quote[] = [
    new Quote (1,'Otemo','“What color is the rainbow, check it next time it shows. Its the way we should be. Altogether in harmony.”','Ritah Marley', new Date(2020,5,14),0,0),
    new Quote (2,'Stacy',"“True love is your soul's recognition of it's counterpoint in another.”",'Max Frisch',new Date(2020,4,14),0,0),
    new Quote (3,'Lorna','“Don’t trust people whose feelings change with time. Trust people whose feelings remain the same, even when the time changes.”','Bob Marley',new Date(2020,3,12),0,0),
    new Quote (4,'Brian',"“Don't let the behaviour of others destroy your inner peace”",'Rafiki',new Date(2020,2,9),0,0),
    new Quote (5,'Otis','“Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.”','Dale Carnegie',new Date(2020,5,14),0,0),
    new Quote (6,'Mulamwah','“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”','Mark Twain',new Date(2020,5,14),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
