import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Builder} from '../../model/builder';
import {Layout, Layouts} from '../../model/layouts';

@Component({
	selector: 'app-choose-board-component',
	templateUrl: './choose-board-component.component.html',
	styleUrls: ['./choose-board-component.component.scss']
})
export class ChooseBoardComponent {
	@Input() layouts: Layouts;
	@Output() readonly startEvent = new EventEmitter<{ layout: Layout, mode: string }>();
	focusIndex: number = 0;
	loadedSVG: { [index: number]: boolean } = {};
	current: Layout = undefined;
	mode: string = 'MODE_SOLVABLE';
	builder: Builder = new Builder();

	constructor() {
		for (let i = 0; i < 20; i++) {
			this.loadedSVG[i] = true;
		}
	}

	onStart(layout: Layout): void {
		if (layout) {
			this.startEvent.emit({layout, mode: this.mode});
		}
	}

	onSelect(layout: Layout): void {
		this.current = layout;
	}

	randomGame(): void {
		this.focusIndex = Math.floor(Math.random() * this.layouts.items.length);
		this.startEvent.emit({layout: this.layouts.items[this.focusIndex], mode: this.mode});
	}

	loadSVG(i: number): void {
		setTimeout(() => {
			this.loadedSVG[i] = true;
		});
	}
}
