import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';



@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent { 
  @Input() items: { name: string, price: number , discontinued: boolean}[] = [];
}
