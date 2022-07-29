import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'João Paulo Kadota';
  text = '';

  pessoas = [
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"
    },
    {
      nome: "João",
      sobrenome: "kadota"
    },
    {
      nome: "Natália",
      sobrenome: "Silva"
    },
    {
      nome: "Tony",
      sobrenome: "Kadota"
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.pessoas)
      let interval = setInterval(() => {
        this.count++;
        if(this.count === 10) {
          clearInterval(interval);
        }
      }, 1000)
  }

  clicou(nome: string): void{
    console.log('Clicou em min', nome);
  }
}
