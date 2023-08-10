import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  submitted:boolean=false;
  storeData:any;
  username:any;
  password:any;

  constructor(private formBuild: FormBuilder, private service: DataService, private router:Router) { }
  login = this.formBuild.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
   
  }
  sigin() {
    console.log(this.login.value);
    this.router.navigate(['/data'])
    const data={
      username:this.login.value.email,
      password:this.login.value.password
    }
    
    this.service.login(data).subscribe((res) => {
      console.log("login successful", res.status);
      if(res.status==200){
        this.router.navigate(['/data'])
      }
    })
  }

  get loginControl(){
    return this.login.controls
  }
}
