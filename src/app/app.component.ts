
import { OnInit } from '@angular/core';
import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Moveable box generator.';
  boxes:any = [1,2,3,4,5,6,7,8,9,10];
  toggleKeyboard:any = true;  
  length: 0;
  domEles:any;
  submit(event:any){
    let element:any = document.activeElement;
    console.log(this.domEles)
    const elementIndex = Array.prototype.indexOf.call(this.domEles, element);
    if(this.toggleKeyboard == true){

      if(event.keyCode == 46){//delete key event
        let inx = this.boxes.indexOf(event.target.value);
        if (inx > -1) {
            this.boxes.splice(inx, 1);
            element.nextElementSibling.focus() != null ? element.nextElementSibling.focus() : element.previousElementSibling.focus();
        }
      }
      if(event.keyCode == 39 && elementIndex < this.length - 1 || event.keyCode == 68) { //Right/D key event
        if(element.nextElementSibling != null){
          element.nextElementSibling.focus();
        }  
      } 
  
      if(event.keyCode == 40 || event.keyCode == 83){ //Down key event 
        if(element.nextElementSibling != null){
          let value = parseInt(event.target.value) + 4;
          let ele = document.getElementById(`${value}`)
          ele.focus()
        } 
      }

      if(event.keyCode == 87 || event.keyCode == 38){
        if(element.previousElementSibling != null){
          let value = parseInt(event.target.value) - 4;
          let ele = document.getElementById(`${value}`)
          ele.focus()
        } 
      }
  
      if(event.keyCode == 37 || event.keyCode == 65) { //Left key/A event
        if(element.previousElementSibling != null){
          element.previousElementSibling.focus();
        } 
      }
    }
  }

  ngOnInit() {
    this.domEles = document.querySelectorAll('.container');
    this.length = this.domEles.length;
    this.setZindex()
  }

  changeEvent(event:any){
    this.toggleKeyboard = event.target.checked;
  }
  addBoxes(){
    let lastId = Math.max(...this.boxes);
    if(lastId > 0 ){
      this.boxes.push(lastId+1);
    }else{
      this.boxes.push(1);      
    }
  }

  setZindex(){
    let maxId = Math.max(...this.boxes);
    let ele =  document.getElementById(`${maxId}`)
    if(ele != null){
      ele.style.zIndex = '1500';
    }
  }

  removeItem(inx){
    this.boxes.splice(inx, 1);
  }
}
