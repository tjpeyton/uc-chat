import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  private monthNames: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  constructor() { }

  public dateToString(date: number) : string {
    let rawDate = new Date(date);
    return "Created " + rawDate.getDate() + this.monthNames[rawDate.getMonth()] + rawDate.getFullYear();
  }
}
