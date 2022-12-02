import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class AppComponent {
  title = 'team5-ang-basic-calculadora';

  //let valor = document.getElementsByClassName('btn').value;
  a:string = "";
  b:string = "";
  operador:string = "";
  texto:string = "";
  resultado:number = 0;
  tecla:string = "";
  terminado:boolean = false;

  asignanum(boton:string){//recoje el valor del botón que se ha clicado
    if(this.terminado===false){
      if(this.operador===""){//si aún no se ha decicido el operador, significa que estamos definiendo el valor a y lo añadimos al texto por pantalla
        this.a += boton;
        this.texto += boton;
      }else{//si ya tenemos oeprador asignado, estamos defniendo el valor b y lo añadimos al texto por pantalla
          this.b += boton;
          this.texto += boton;
      }
    }
  }

  //recoje el operador, lo asigna a la variable y lo añadimos al texto por pantalla
  operacion(boton:string){
    if(this.terminado===false){
      this.operador = boton;
      this.texto += boton;
    }
  }

  //calcula el resultado de la operación según los valores y el operador
  calcular(){
    if(this.terminado===false){
      switch(this.operador){
          case "+":
              this.resultado = parseFloat(this.a) + parseFloat(this.b);
              break;
          case "-":
              this.resultado = parseFloat(this.a) - parseFloat(this.b);
              break;
          case "*":
              this.resultado = parseFloat(this.a) * parseFloat(this.b);
              break;
          case "/":
              this.resultado = parseFloat(this.a) / parseFloat(this.b);
              break;
      }
      this.texto += "="+this.resultado;//muestro el resultado por pantalla
      this.terminado=true;
    }
  }

  //borra toda información mostrada por pantalla y pone el valor de las variables a su estado predeterminado
  borrar(){
    this.texto = "";
    this.a = "";
    this.b = "";
    this.operador= "";
    this.terminado = false;
  }

  //Funcion para que el teclado agarre la key que está siendo pulsada y dependiendo de la que sea ocurra lo mismo que ocurriría al clicar
  //en su respectiva tecla
  handleKeyboardEvent(accion:KeyboardEvent){
    //evento=accion || window.event;
    this.tecla = accion.key;
    console.log(this.tecla);
    //this.asignanum(this.tecla);

    if( (parseInt(this.tecla) >=0 || parseInt(this.tecla) <=9) || this.tecla==="." ){
      this.asignanum(this.tecla);
    }else{
      switch(this.tecla){
        case "+":
            this.operacion(this.tecla)
            break;
        case "-":
            this.operacion(this.tecla)
            break;
        case "*":
            this.operacion(this.tecla)
            break;
        case "/":
            this.operacion(this.tecla)
            break;
        case "Enter":
            this.calcular();
            break;
        case "b":
            this.borrar();
      }
    }

  }


}
