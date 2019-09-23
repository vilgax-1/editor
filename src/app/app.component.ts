import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ClassicEditor from 'ng2-ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  config: any;
  editor = '';

    Editor =  ClassicEditor;



   constructor(private saniti: DomSanitizer) {
    this.config = {
      toolbar : [
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic',
        'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
        { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },

        { name: 'insert',   items: ['Image'] },
        { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
        { name: 'others' },

        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList',
        'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter',
        'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
        { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
      ]
    };
   }

   popo(r){
      return this.saniti.bypassSecurityTrustHtml(r);
   }


}
