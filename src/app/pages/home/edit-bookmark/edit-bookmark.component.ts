import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bookmark } from 'src/app/shared/bookmark.model';
import { BookmarkService } from 'src/app/shared/bookmark.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent implements OnInit {
  bookmark: Bookmark = {
    id: '',
    title: '',
    link: '',
  };

  // userId: string | null = '';

  private routeSubscription: Subscription = new Subscription();
  private bookmarkSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(async (params) => {
      const id = params['id'];
      const bookmarks = await this.bookmarkService.getBookmarks().toPromise();
      const res = bookmarks
        ? bookmarks.find((bookmark) => bookmark.id === id)
        : undefined;
      if (res !== undefined) {
        this.bookmark = res;
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onSave(event: Event) {
    event.preventDefault();
    this.bookmarkService.updateBookmark(this.bookmark).subscribe();
    console.log(this.bookmark);
  }
  onDelete(event: Event) {
    event.preventDefault();
    this.bookmarkService.deleteBookmark(this.bookmark).subscribe(
      () => {
        console.log('Bookmark supprimé avec succès');
        this.router.navigate(['home/manage-bookmark']);
      },
      (error) => console.error(error)
    );
    console.log(this.bookmark);
  }
}
