import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.scss']
})
export class PhraseComponent implements OnInit {

  formPhrase!: FormGroup;
  invertPhrase: string = '';
  showPhrase: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formPhrase = fb.group({
      inputPhrase: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  reversePhrase() {
    if (this.formPhrase.valid) {
      const phrase = this.formPhrase.get('inputPhrase')?.value.toLowerCase().trim().replace(/[.,'¿?¡!()_-]/gi, '');
      console.log(phrase);
      this.invertPhrase = phrase.split('').reverse().join('');
      this.showPhrase = true;
    } else {
      this.showPhrase = false;
    }
  }

}
