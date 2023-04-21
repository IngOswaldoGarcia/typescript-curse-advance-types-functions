export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;



/* export function parseStr(input: string | string[]): string | string[]{
  if (Array.isArray(input)){
    return input.join('');//string
  } else {
    return input.split('');
  }
} */

export function parseStr(input: unknown): unknown{
  if (Array.isArray(input)){
    return input.join('');//string
  } else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return true; //boolena
  }
}

const rtaArray = parseStr('Oswaldo');
/* if(Array.isArray(rtaArray)){
  rtaArray.reverse();
} */
rtaArray.reverse();
console.log('rtaArray', 'OSWALDO =>', rtaArray);

const rtaStr = parseStr(['O','S','W','A']);
/* if(rtaStr === 'string'){
  rtaStr.toLowerCase();
} */
rtaStr.toLowerCase();
console.log('rtastr', '[O, S, W, A] =>',rtaStr);

const rtaBoolean = parseStr(12);
console.log('rtaBoolean',rtaBoolean);
