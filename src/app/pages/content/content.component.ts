import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  constructor(private route: ActivatedRoute){

  }

  private id:string|null = "0"

  @Input()
  photoCover:string = ""

  @Input()
  contentTitle:string =""

  @Input()
  contentDescription: string=""

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }



}
