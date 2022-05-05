import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "interimtrigger",
})
export class InterimtriggerPipe implements PipeTransform {
  interimtriggerNames: { [key: string]: string } = {
    "1": "Interimtrigger 1",
    "2": "Interimtrigger 2",
    "3": "Interimtrigger 3",
    "4": "Interimtrigger 4",
    "5": "Interimtrigger 5",
    "6": "Interimtrigger 6",
    "7": "Interimtrigger 7",
    "8": "Interimtrigger 8",
    "9": "Interimtrigger 9",
    "30": "Interimtrigger 30",
    "33": "Interimtrigger 33",
    "31": "Interimtrigger 31",
  };
  transform(value: number, args?: any): any {
    return value !== null ? this.interimtriggerNames[value.toString()] : value;
  }
}
