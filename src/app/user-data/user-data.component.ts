import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  

  storeData:any;
  constructor(private service:DataService){}
 
  data = [
    { id: 1, name: "Angular" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" },
    { id: 4, name: "Bootstrap" },
    { id: 5, name: "Foundation" },
  ]

  searchText = '';

  ngOnInit(): void {
    this.showUserData();
    this.service.userDataFake().subscribe((res)=>{
      console.log(res);
      this.storeData=res.data;
      console.log(this.storeData)
    })
  }
  
  showUserData(){
    const pageNo = 1; 
    const size = 20;
    this.service.userData(pageNo, size).subscribe((res)=>{
      console.log("res",res)
    })
  }
  
 

}
