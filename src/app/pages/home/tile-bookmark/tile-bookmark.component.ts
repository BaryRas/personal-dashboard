import { Component, Input } from '@angular/core';
import { Bookmark } from 'src/app/shared/bookmark.model';

@Component({
  selector: 'app-tile-bookmark',
  templateUrl: './tile-bookmark.component.html',
  styleUrls: ['./tile-bookmark.component.scss'],
})
export class TileBookmarkComponent {
  @Input() bookmark: Bookmark = {
    id: '',
    title: '',
    link: '',
  };
  faviconError: boolean = !this.bookmark.link;
}
