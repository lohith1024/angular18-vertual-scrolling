import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  template: `
    <cdk-virtual-scroll-viewport itemSize="100" class="example-viewport">
      <div *cdkVirtualFor="let item of data" class="example-item-container" (click)="showImage(item.image)">
        <img [src]="item.image" alt="item.name" style="width: 100px; height: 100px;">
        <span>{{item.name}}</span>
      </div>
    </cdk-virtual-scroll-viewport>

    <div *ngIf="selectedImage" class="modal" (click)="closeImage()">
      <img [src]="selectedImage" class="modal-content">
    </div>
  `,
  styles: [`
    .example-viewport {
      height: 500px;
      width: 500px;
      border: 1px solid black;
    }

    .example-item-container {
      width: 500px;
      height: 100px;
      border-bottom: 1px solid black;
      display: flex;
      align-items: center;
      padding: 5px;
      cursor: pointer;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      max-width: 80%;
      max-height: 80%;
    }
  `]
})
export class VirtualScrollComponent implements OnInit {
  data: any[] = [];
  selectedImage: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response.results;
    });
  }

  showImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
