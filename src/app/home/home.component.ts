import { Component, OnInit } from '@angular/core';
import { Category } from 'src/model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title :string ;
  searched :string ;
  
  //listCategory : Category[] ;
  //ou 
  listCategory:Category[];
  
  
  ngOnInit() {
    this.title = "welcome to E-STORE" ; 
    this.listCategory=[
      {id:1,name:'Basic T-shirt'  ,picture:'https://www.teepig.co.uk/wp-content/uploads/2019/05/61-430-30_cutout_front-600x600.jpg' , nbrLike:10 , ISAVAIBLE:true }, 
      {id:2,name:'chaussure'  ,picture:'https://i0.wp.com/hkeya.com/wp-content/uploads/2020/12/J71A5801-scaled.jpg?fit=1920%2C1920&quality=100&ssl=1' , nbrLike:99 , ISAVAIBLE:false }, 
      {id:3,name:'Pantalon'  ,picture:'https://www.molinel.com/shop/14994/pantalon-chino-homme-authentique.jpg' , nbrLike:78 , ISAVAIBLE:true }, 
      {id:4,name:'Costume '  ,picture:'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/3605/1.jpg?2492' , nbrLike:36 , ISAVAIBLE:true }, 
      {id:5,name:'Chemise' ,picture:'https://www.molinel.com/14849/chemise-homme-blanc.jpg' , nbrLike:15 , ISAVAIBLE:true }, 
    
    
    ]


   
  }
  
   addLike(category:Category) {
        category.nbrLike++
  }
  
  search() {
    if (this.searched.trim() === '') {
     this.ngOnInit
    } else {
      // Otherwise, filter the list
      this.listCategory = this.listCategory.filter(category =>
        category.name.toLowerCase().includes(this.searched.toLowerCase())
      );
    }
 }
 

}
