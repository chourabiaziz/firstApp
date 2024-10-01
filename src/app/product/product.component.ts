import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/model/category';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  listProduct:Product[];
  searched :string ;
  listCategory:Category[];

    constructor ( private activatedRoute : ActivatedRoute){}
 
  ngOnInit( ) {
  console.log(this.activatedRoute)

    this.listCategory=[
      {id:1,name:'Basic T-shirt'  ,picture:'https://www.teepig.co.uk/wp-content/uploads/2019/05/61-430-30_cutout_front-600x600.jpg' , nbrLike:10 , ISAVAIBLE:true }, 
      {id:2,name:'chaussure'  ,picture:'https://i0.wp.com/hkeya.com/wp-content/uploads/2020/12/J71A5801-scaled.jpg?fit=1920%2C1920&quality=100&ssl=1' , nbrLike:99 , ISAVAIBLE:false }, 
      {id:3,name:'Pantalon'  ,picture:'https://www.molinel.com/shop/14994/pantalon-chino-homme-authentique.jpg' , nbrLike:78 , ISAVAIBLE:true }, 
      {id:4,name:'Costume '  ,picture:'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/3605/1.jpg?2492' , nbrLike:36 , ISAVAIBLE:true }, 
      {id:5,name:'Chemise' ,picture:'https://www.molinel.com/14849/chemise-homme-blanc.jpg' , nbrLike:15 , ISAVAIBLE:true }, 
   ]

    this.listProduct=[
      {id:1 , description:'bla bla bla',  quantity : 6 , category : this.listCategory[1] ,  name:'Basic T-shirt'  ,picture:'https://www.teepig.co.uk/wp-content/uploads/2019/05/61-430-30_cutout_front-600x600.jpg' , price:500 }, 
      {id:2 , description:'bla bla bla' , quantity : 6 , category : this.listCategory[2] ,  name:'chaussure'  ,picture:'https://i0.wp.com/hkeya.com/wp-content/uploads/2020/12/J71A5801-scaled.jpg?fit=1920%2C1920&quality=100&ssl=1' , price:600 }, 
      {id:3 , description:'bla bla bla'  ,quantity : 6 , category : this.listCategory[3]  ,  name:'Pantalon'  ,picture:'https://www.molinel.com/shop/14994/pantalon-chino-homme-authentique.jpg' , price:500 }, 
      {id:4 , description:'bla bla bla'  ,quantity : 6 , category : this.listCategory[4] ,  name:'Costume '  ,picture:'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/3605/1.jpg?2492' , price:500 }, 
      {id:5 , description:'bla bla bla'  ,quantity : 0, category : this.listCategory[5] ,  name:'Chemise' ,picture:'https://www.molinel.com/14849/chemise-homme-blanc.jpg' , price:500 },     
      {id:5 , description:'bla bla bla'  ,quantity : 2, category : this.listCategory[5] ,  name:'Chemise' ,picture:'https://marmaramode.tn/wp-content/uploads/2024/06/6-1.png' , price:500 },     
    ]


   
  }
}
