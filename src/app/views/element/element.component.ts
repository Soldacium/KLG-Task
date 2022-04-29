import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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

  elementForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    triggerdateLbman: new FormControl(false),
    triggerdateSvcscat: new FormControl(false),
    triggerdateItem: new FormControl(false),
    isinterimtrigger: new FormControl(false),
    constraintLbman: new FormControl(false),
    constraintSvcscat: new FormControl(false),
    constraintItem: new FormControl(false),
    purma: new FormControl(false),
    nntm: new FormControl(false),
    pdbtm: new FormControl(false),
    dsart: new FormControl(false),
    trigger: new FormControl(-1),
    interimtrigger: new FormControl(false),
    constraint: new FormControl(""),
    lbmanEffectivedeadlineinfo: new FormControl(""),
    lbmanProcbasisref: new FormControl(""),
    editable: new FormControl(false),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  getElementId(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
    });
  }

  update(): void {}
}
