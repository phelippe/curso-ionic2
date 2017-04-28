/* Lembre-se que: precisamos importar todos as classes do Angular que estamos utilizando no arquivo */
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
/* 
  Um padrão recomendado é você sempre pular uma linha depois dos imports das lib externas
  e logo abaixo importar seus Componentes, Modulos, Serviços, Diretivas...
  Confira o style guide oficial do Angular https://angular.io/styleguide
*/
import { AppComponent } from './app.component';

/*
  Utilizamos o Decorator @NgModule criado pelo time do Angular para criar nosso módulo,
  lembre-se que um módulo do Javascript é diferente de um módulo do Angular.
*/

//Estamos passando os metadados para o nosso Módulo AppModule ou também conhecido RootModule (Módulo Principal)
@NgModule({
  declarations: [AppComponent], //Quais as TODAS as view classes que esse módulo possui?
  imports: [BrowserModule], //Esse módulo usa alguma 'dependência de outro?' se sim, importe.
  bootstrap: [AppComponent] //Apenas no RootModule precisamos determinar qual é o componente principal
})

// Precisamos exportar esse Módulo para que o bootstraping do Angular o encontre e inicie nossa aplicação!*/
export class AppModule { }