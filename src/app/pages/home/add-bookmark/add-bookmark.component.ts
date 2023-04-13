import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { Bookmark } from 'src/app/shared/bookmark.model';
import { BookmarkService } from 'src/app/shared/bookmark.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss'],
})
export class AddBookmarkComponent implements OnInit {
  bookmark: Bookmark = {
    id: uuidv4(),
    title: '',
    link: '',
  };
  submitted = false;

  @ViewChild('myForm') myForm!: NgForm;

  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    this.bookmarkService.addBookmark(this.bookmark).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
