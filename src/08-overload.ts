//Oswa = [O, S, W, A] => string => string[]
//[O, S, W, A] => Oswa => string[ => string]

function parseStr(input: string | string[]): string | string[]{
  if (Array.isArray(input)){
    return input.join('');//string
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Oswaldo');
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log('rtaArray', 'OSWALDO =>', rtaArray);

const rtaStr = parseStr(['O','S','W','A']);
if(rtaStr === 'string'){
  rtaStr.toLowerCase();
}
console.log('rtastr', '[O, S, W, A] =>',rtaStr);
