import { NgClass } from '@angular/common';
import { Component, input, output, model} from '@angular/core';

@Component({
  selector: 'app-img-dropdown',
  imports: [NgClass],
  templateUrl: './img-dropdown.component.html',
  styleUrl: './img-dropdown.component.css'
})

export class ImgDropdownComponent
{
    theme = model.required<string>();

    icon = input<string>("assets/icons/no_data.svg")
    items = input.required<{id:number, icon:string, label:string}[]>();

    onSelected = output<number>()

    selected: number = 0


    onItemSelected(id: number)
    {
        this.selected = id
        this.onSelected.emit(id)
    }
}
