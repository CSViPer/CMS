import { Component} from '@angular/core';
import { Enquiry1 } from './enquiry';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {



 public courses1=['Java','angular8','python','webtechnology'];
  enquiry1=new Enquiry1('','',0,'default','default','default');



  
hasGenderError:boolean=true
hasCourseError:boolean=true
hasTrainingModeError:boolean=true
validateGender(gender:any)
{

if(gender=='default')
{

this.hasGenderError=true;
}

else
{

this.hasGenderError=false;
}

}

validateCourse(courses:any)
{

if(courses=='default')
{

this.hasCourseError=true;
}

else
{

this.hasCourseError=false;
}

}


validateTrainingMode(trainingmode:any)
{

if(trainingmode=='default')
{

this.hasTrainingModeError=true;
}

else
{

this.hasTrainingModeError=false;
}

}
refresh(){
  window.location.reload();
}


}