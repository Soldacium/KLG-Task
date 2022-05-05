import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import ApiResponse from "src/app/shared/models/api-response.model";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-edit-element",
  templateUrl: "./edit-element.component.html",
  styleUrls: ["./edit-element.component.scss"],
  providers: [ApiService],
})
export class EditElementComponent implements OnInit {
  id: number | null = -1;
  triggerNames = [
    {
      value: 1,
      viewValue: "1",
    },

    {
      value: 2,
      viewValue: "2",
    },
    {
      value: 3,
      viewValue: "3",
    },
    {
      value: 4,
      viewValue: "4",
    },
    {
      value: 5,
      viewValue: "5",
    },
    {
      value: 8,
      viewValue: "8",
    },
    {
      value: 27,
      viewValue: "27",
    },
    {
      value: 33,
      viewValue: "33",
    },
  ];

  interimtriggerNames = [
    {
      value: 33,
      viewValue: "33",
    },
    {
      value: 30,
      viewValue: "30",
    },
    {
      value: 27,
      viewValue: "27",
    },
  ];

  triggersDates = [
    {
      value: false,
      viewValue: "Lawful",
      formName: "triggerdateLbman",
    },
    {
      value: false,
      viewValue: "Service category",
      formName: "triggerdateSvcscat",
    },
    {
      value: false,
      viewValue: "Item",
      formName: "triggerdateItem",
    },
  ];

  constraintNames = [
    {
      value: 1,
      viewValue: "1",
    },
    {
      value: 2,
      viewValue: "2",
    },
    {
      value: 3,
      viewValue: "3",
    },
  ];

  constraints = [
    {
      value: false,
      viewValue: "Lawful",
      formName: "constraintLbman",
    },
    {
      value: false,
      viewValue: "Service category",
      formName: "constraintSvcscat",
    },
    {
      value: false,
      viewValue: "Item",
      formName: "constraintItem",
    },
  ];

  bonusOptions = [
    {
      value: false,
      viewValue: "PURMA",
      formName: "purma",
    },
    {
      value: false,
      viewValue: "NNTM",
      formName: "nntm",
    },
    {
      value: false,
      viewValue: "PDB",
      formName: "pdbtm",
    },
    {
      value: false,
      viewValue: "DSART",
      formName: "dsart",
    },
  ];

  deadlineOptions = [
    {
      value: 1,
      viewValue: "dead",
    },
    {
      value: 2,
      viewValue: "line",
    },
    {
      value: 3,
      viewValue: "option",
    },
  ];

  processingOptions = [
    {
      value: "1",
      viewValue: "pro",
    },
    {
      value: "1",
      viewValue: "cessing",
    },
    {
      value: "1",
      viewValue: "option",
    },
  ];

  elementForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.setupElementForm();
    this.getElementId();
  }

  getElementId(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      if (this.id) {
        this.getElementData(this.id);
      }
    });
  }

  async setupElementForm(): Promise<void> {
    const newestId = (
      await this.apiService
        .getAllElements()
        .toPromise()
        .then((res) => res)
    ).length;
    this.elementForm = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      triggerdateLbman: [false],
      triggerdateSvcscat: [false],
      triggerdateItem: [false],
      isinterimtrigger: [false],
      constraintLbman: [false],
      constraintSvcscat: [false],
      constraintItem: [false],
      purma: [false],
      nntm: [false],
      pdbtm: [false],
      dsart: [false],
      trigger: [-1, Validators.required],
      interimtrigger: [false],
      constraint: ["", Validators.required],
      lbmanEffectivedeadlineinfo: ["", Validators.required],
      lbmanProcbasisref: [""],
      editable: [false],
      id: newestId,
      status: "ACTIVE",
      modifyBy: "klg",
      modifyDate: "2019-01-30 12:27:22.000490",
    });
  }

  getElementData(elementId: number): void {
    this.apiService.getElement(elementId).subscribe((el) => {
      this.setElementForm(el);
    });
  }

  setElementForm(element: ApiResponse) {
    this.elementForm.setValue(element);
  }

  submit(): void {
    const date = new Date();
    // date format different
    this.elementForm.controls["modifyDate"].setValue(date.toTimeString());
    this.elementForm.controls["modifyBy"].setValue("custom user");
    // could wait for response and display loading, but it's basically instant in this case
    if (this.id && this.id !== -1) {
      this.apiService.editElement(this.elementForm.value);
    } else {
      this.apiService.addNewElement(this.elementForm.value);
    }
    this.router.navigate(["/list"]);
  }

  cancel(): void {
    this.router.navigate(["/list"]);
  }

  updateTrigger(triggerName: string, value: boolean): void {
    this.elementForm.setValue({ [triggerName]: value });
  }
}
