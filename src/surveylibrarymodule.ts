import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent, FormSectionComponent, QuestionComponent, ErrorMessages, QuestionnaireControls } from './components/form/index';
import { FormLoaderService, FormValidationService,LookupService, SearchComponentService,LibraryTokenAuthService } from './services/index';

import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { Ng2UploaderModule  } from 'ng2-uploader/ng2-uploader';
import { PopoverModule } from "ng2-popover";
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [ FormComponent, FormSectionComponent, QuestionComponent, QuestionnaireControls, ErrorMessages  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    DatepickerModule,
    TextMaskModule,
    PopoverModule,
    TypeaheadModule,
    Ng2UploaderModule
  ],
  providers: [FormLoaderService, FormValidationService,LookupService,SearchComponentService,LibraryTokenAuthService],
  exports : [ FormComponent, FormSectionComponent, QuestionComponent, QuestionnaireControls, ErrorMessages ]
  
})
export class SurveyLibraryModule {

}