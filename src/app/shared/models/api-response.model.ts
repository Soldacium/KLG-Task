export default interface ApiResponse {
  id: number;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
  modifyBy: string;
  modifyDate: string;
  description: string | null;
  triggerdateLbman: boolean | null;
  triggerdateSvcscat: boolean | null;
  triggerdateItem: boolean | null;
  isinterimtrigger: boolean | null;
  constraintLbman: boolean | null;
  constraintSvcscat: boolean | null;
  constraintItem: boolean | null;
  purma: boolean;
  nntm: boolean;
  pdbtm: boolean;
  dsart: boolean;
  trigger: number | null;
  interimtrigger: number | null;
  constraint: number | null;
  lbmanEffectivedeadlineinfo: number | null;
  lbmanProcbasisref: number | null;
  editable: boolean;
}
