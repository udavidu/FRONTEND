import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../../service/master.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-get-monitors',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './get-monitors.component.html',
  styleUrls: ['./get-monitors.component.css']
})
export class GetMonitorsComponent implements OnInit {
  monitors: any[] = [];
  showDisplayInfo: boolean = true;
  showConnectivity: boolean = true;
  showAdditionalInfo: boolean = true;

  masterSrv= inject(MasterService);

  ngOnInit(): void {
    this.masterSrv.getMonitors().subscribe(data => {
      xml2js.parseString(data, { explicitArray: false }, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
          return;
        }
        const monitors = result.Display.Monitor;
        this.monitors = Array.isArray(monitors) ? monitors : [monitors];
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
