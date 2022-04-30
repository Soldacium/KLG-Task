import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import ApiResponse from "src/app/shared/models/api-response.model";

@Component({
  selector: "app-element",
  templateUrl: "./element.component.html",
  styleUrls: ["./element.component.scss"],
})
export class ElementComponent implements OnInit {
  id = -1;
  element: ApiResponse = {
    id: 19,
    name: "Contract fix timeframe  - Lawful Basis Start and End date known without Interim Trigger.",
    status: "ACTIVE",
    modifyBy: "klg",
    modifyDate: "2019-01-30 12:27:22.000490",
    description: null,
    triggerdateLbman: true,
    triggerdateSvcscat: null,
    triggerdateItem: false,
    isinterimtrigger: false,
    constraintLbman: true,
    constraintSvcscat: null,
    constraintItem: false,
    purma: false,
    nntm: true,
    pdbtm: false,
    dsart: false,
    trigger: 8,
    interimtrigger: null,
    constraint: null,
    lbmanEffectivedeadlineinfo: null,
    lbmanProcbasisref: null,
    editable: true,
  };

  foods = [
    {
      value: 1,
      viewValue: "lol",
    },
    {
      value: 1,
      viewValue: "lol",
    },
    {
      value: 1,
      viewValue: "lol",
    },
  ];

  triggers = [
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
      value: "1",
      viewValue: "dead",
    },
    {
      value: "1",
      viewValue: "line",
    },
    {
      value: "1",
      viewValue: "option",
    },
  ];

  processingOptions = [
    {
      value: "1",
      viewValue: "dead",
    },
    {
      value: "1",
      viewValue: "line",
    },
    {
      value: "1",
      viewValue: "option",
    },
  ];

  elementForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.elementForm = fb.group({
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
    });
  }

  ngOnInit() {}

  getElementId(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
    });
  }

  update(): void {
    console.log("lol");
    console.log(this.elementForm.value);
  }

  updateTrigger(triggerName: string, value: boolean): void {
    this.elementForm.setValue({ [triggerName]: value });
  }
}
