import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startTime',
})
export class StartTimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]) {
    let today = new Date()
    let startDate = new Date(value)
    if (today.getFullYear() == startDate.getFullYear() && today.getDate() == startDate.getDate() && today.getMonth() == startDate.getMonth()){
      return `Today at ${startDate.getDay}`
    } else if (today.getFullYear() == startDate.getFullYear() && today.getDate() + 1 == startDate.getDate() && today.getMonth() == startDate.getMonth()){ //This wont work on month end
      return `Tomorrow at ${startDate.getDay}`
    }
    return `${startDate.toLocaleDateString("en-GB", {hour:"2-digit",minute:"2-digit",day:"numeric", month:"short"})}`
  }

}
