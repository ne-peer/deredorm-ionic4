import {
  Component,
  OnInit
} from '@angular/core';
import { StarlightCharList } from '../../services/client/starlight-charlist.service';
import { Char } from '../../models/starlightdb/char';
import { Hosts } from '../../constants/host';

@Component({
  selector: 'app-dere-list',
  templateUrl: './dere-list.component.html',
  styleUrls: ['./dere-list.component.scss'],
})
export class DereListComponent implements OnInit {
  selectedItem: any;
  itemsRepo: Array<Char> = [];
  items: Array<Char> = [];
  avaterHost: string;

  constructor(
    private starlight: StarlightCharList
  ) {
    this.avaterHost = Hosts.STARLIGHT_AVATER;
  }

  ngOnInit() {
    (async () => {
      await this.starlight.fetch();
      this.itemsRepo = await this.starlight.chars;
      this.items = await this.starlight.chars;
    })();
  }

}
