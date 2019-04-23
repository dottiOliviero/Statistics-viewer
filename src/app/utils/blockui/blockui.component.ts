import { Component, OnInit, OnChanges } from '@angular/core';
import { BlockUiService } from 'src/app/service/block-ui.service';

@Component({
  selector: 'app-blockui',
  templateUrl: './blockui.component.html',
  styleUrls: ['./blockui.component.css']
})
export class BlockuiComponent implements OnInit {
  public blocked = false;

  constructor(private blockuiService: BlockUiService) { }

  ngOnInit() {
  }



}
