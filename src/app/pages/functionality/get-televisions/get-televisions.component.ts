import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../../service/master.service';
import * as xml2js from 'xml2js';


@Component({
  selector: 'app-get-televisions',
  imports: [RouterModule, CommonModule],
  templateUrl: './get-televisions.component.html',
  styleUrl: './get-televisions.component.css'
})
export class GetTelevisionsComponent {
  televisions: any[] = [];
  showDisplayInfo: boolean = true;
  showConnectivity: boolean = true;
  showAdditionalInfo: boolean = true;

  masterSrv= inject(MasterService);

  ngOnInit(): void {
    this.masterSrv.getTelevisions().subscribe(data => {
      xml2js.parseString(data, { explicitArray: false }, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
          return;
        }
        const televisions = result.Display.Television;
        this.televisions = Array.isArray(televisions) ? televisions : [televisions];
      });
    });
  }

  toggleDisplayInfo(): void {
    this.showDisplayInfo = !this.showDisplayInfo;
  }

  toggleConnectivity(): void {
    this.showConnectivity = !this.showConnectivity;
  }

  toggleAdditionalInfo(): void {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  getAnimationClass(section: string): string {
    switch (section) {
      case 'display':
        return this.showDisplayInfo ? 'slide-down' : 'slide-up';
      case 'connectivity':
        return this.showConnectivity ? 'slide-down' : 'slide-up';
      case 'additional':
        return this.showAdditionalInfo ? 'slide-down' : 'slide-up';
      default:
        return '';
    }
  }
}
