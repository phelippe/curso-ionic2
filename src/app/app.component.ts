/* Aqui importamos a interface Component do Angular que herda de Directive para poder utilizar seu decorator. */
import { Component } from '@angular/core';

/* Aqui temos nosso componente principal, o AppComponent! Utilizamos o decorator @Component e passamos metadados */
@Component({
  /* Aqui ficam os metadados que são passados para o decorator @Component*/
  selector: 'app-root', /* Aqui fica o seletor desse componente, logo, se a gente digitar <app-root> em qualquer HTML
  o projeto, estamos referenciando a esse componente, e o Angular irá criar uma instância dele para nós.
  */
  templateUrl: './app.component.html', // O que vai ser 'renderizado' dentro desse componente? *também podemos usar template e escrever inline*
  styleUrls: ['./app.component.css'] //Arquivos de estilização exclusivo desse componente, você pode passar vários.
})

/* 
  Aqui temos nosso componente e sua lógica, lembre-se que precisamos sempre exportar uma classe de um componente para que o módulo
  responsável o encontre e consiga importar, nesse caso, confira no app.module.ts a declaração dele lá: declarations: [AppComponent],
*/
export class AppComponent {
  /* Aqui criamos propriedades dessa classe para que possamos exibir na nossa view com {{interpolação}} */
  title = 'Amigo Secreto Caravana Web!';
  picture = '/assets/img/natal.jpg';
  eventDate = '18/04/2017';
  location = {
    street: ' Av. Alm. Alexandrino de Alencar, 708 - Alecrim, Natal/RN ',
    city: 'Natal',
    state: 'RN'
  }
}
