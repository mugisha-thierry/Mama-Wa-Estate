import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private selectedFile:File;
  private preview_image:any;
  private tags: [];
  private title:string;
  private content:string;
  private blog_id:string;
  private show_spinner: boolean = false;
  @ViewChild(TagComponent, {static:false}) childReference:any;

  constructor(private image_service: FeatureImageService, private blog_service:BlogService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.tags = this.childReference.tags;
  }
 
  
 
  processFile(imageInput:any){
    this.selectedFile = imageInput.files[0];
    this.previewImageLoad();
  }
 
  previewImageLoad(){
    let reader = new FileReader();
    reader.onloadend = e =>{
      this.preview_image = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }
 
  open_dialog(message:string){
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '550px',
      height: '200px',
      data: {
        message
      }
      
    });
    dialogRef.afterClosed().subscribe((confirm:boolean)=>{
      if(confirm){
        this.submit_blog();
      }
    })
    
  }
 
  open_alert_dialog(message:string){
    let dialogRef = this.dialog.open(AlertDialogBodyComponent,{
      width:'550px',
      height: '200px',
      data:{
        message
      }
    });
  }
 
  async submit_blog(){
      this.show_spinner = true;
      const image_data = await this.image_service.upload_image(this.selectedFile).toPromise();
      let blog = {
        title: this.title,
        content: this.content,
        feature_image:image_data["data"].link,
        tags:[]
      }
 
      this.tags.map((element)=>{
        blog.tags.push(element["name"])
      });
 
      this.blog_service.add_blog(blog).subscribe((response:any)=>{
        this.blog_id = response.id;
        this.show_spinner = false;
        this.open_alert_dialog(`Blog has been created with the id: ${this.blog_id}`);
        this.title = "";
        this.content = "";
        this.preview_image = "";
        this.tags = []; 
      });
 
    }
}


}
