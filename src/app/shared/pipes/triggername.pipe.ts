import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "triggername",
})
export class TriggernamePipe implements PipeTransform {
  triggerNames: { [key: string]: string } = {
    "1": "TriggerName 1",
    "2": "TriggerName 2",
    "3": "TriggerName 3",
    "4": "TriggerName 4",
    "5": "TriggerName 5",
    "6": "TriggerName 6",
    "7": "TriggerName 7",
    "8": "TriggerName 8",
    "9": "TriggerName 9",
  };
  transform(value: number, args?: any): any {
    return this.triggerNames[value.toString()] || value;
  }
}
