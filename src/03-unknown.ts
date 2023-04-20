let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();

let unknownVAr: unknown;
unknownVAr = true;
unknownVAr = undefined;
unknownVAr = null;
unknownVAr = 1;
unknownVAr = [];
unknownVAr = {};

//unknownVAr.doSomething();
if(typeof unknownVAr === "string"){
  unknownVAr.toUpperCase();
}
if(typeof unknownVAr === "boolean"){
  let isNewV2: boolean = unknownVAr;
}


const parse = (str: string): unknown => {
  return JSON.parse(str);
}
