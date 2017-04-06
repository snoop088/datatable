import { ElementRef, EventEmitter } from '@angular/core';
export declare class DataTableBodyRowComponent {
    columns: any[];
    innerWidth: number;
    row: any;
    offsetX: number;
    rowHeight: number;
    isSelected: boolean;
    readonly isEvenRow: boolean;
    readonly isOddRow: boolean;
    readonly columnsTotalWidths: string;
    activate: EventEmitter<any>;
    element: any;
    columnGroupWidths: any;
    columnsByPin: any;
    _columns: any[];
    _innerWidth: number;
    timeout: any;
    constructor(element: ElementRef);
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    stylesByGroup(group: string): {};
    onActivate(event: any, index: number): void;
    onKeyDown(event: KeyboardEvent): void;
    recalculateColumns(val?: any[]): void;
}
