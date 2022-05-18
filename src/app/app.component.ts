
import { Component, ViewChild } from '@angular/core';
import{MatTable, MatTableDataSource, MatTableModule}from  '@angular/material/table'



export interface periodicelement{
  name:string;
  position:number;
  weight:number;
  symbol:string;

}

const elementdata:periodicelement[]=[
    {position:1,name:'Hydrogen',weight:1.6765,symbol:'H'},
    {position:2,name:'Helium',weight:1.6765,symbol:'H'},
    {position:3,name:'Lithium',weight:1.6765,symbol:'L'},
  {position:4,name:'Beryllium',weight:1.6765,symbol:'Be'},
{position:5,name:'Boron',weight:1.6765,symbol:'B'},
{position:6,name:'Carbon',weight:1.6765,symbol:'c'},
{position:7,name:'Nitrogen',weight:1.6765,symbol:'N'},
{position:8,name:'Oxygen',weight:1.6765,symbol:'O'},
{position:9,name:'Fluorine',weight:1.6765,symbol:'F'},

{position:10  ,name:'Neon',weight:1.6765,symbol:'Ne'},


]
  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';

    displayedColumns:String[] = ['position', 'name', 'weight', 'symbol'];
    dataSource=new MatTableDataSource(elementdata);

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  