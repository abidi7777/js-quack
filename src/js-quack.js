const charMap = {};

export function quackNum(n) {
  const zero = '+[]';
  const one = '+!![]';

  if (n === 0) { return zero; }
  if (n === 1) { return one; }

  let res = one;

  for (let i = 1; i < n; i += 1) { res += `+ ${one}`; }

  return res;
}

export function quackStr(str) {
  let res = '';

  for (let i = 0; i < str.length; i += 1) {
    res += charMap[str[i]]
      ? `+ ${charMap[str[i]]}`
      : `+ (([]+[])[${quackStr('constructor')}])[${quackStr('fromCharCode')}](${quackNum(str[i].charCodeAt(0))})`;
  }

  return res.slice(2);
}

export function compile(prog) {
  return `(([])[${quackStr('constructor')}])[${quackStr('constructor')}](${quackStr(`return ${prog}`)})()`;
}

if (typeof window !== 'undefined') {
  window.jQuack = Object.freeze({
    quackNum,
    quackStr,
    compile,
  });
}

charMap.a = `([]+![])[${quackNum(1)}]`;
charMap.d = `([]+[][${quackNum(0)}])[${quackNum(2)}]`;
charMap.e = `([]+[][${quackNum(0)}])[${quackNum(3)}]`;
charMap.f = `([]+[][${quackNum(0)}])[${quackNum(4)}]`;
charMap.i = `([]+[][${quackNum(0)}])[${quackNum(5)}]`;
charMap.l = `([]+![])[${quackNum(2)}]`;
charMap.n = `([]+[][${quackNum(0)}])[${quackNum(1)}]`;
charMap.r = `(!![]+[])[${quackNum(1)}]`;
charMap.s = `(![]+[])[${quackNum(3)}]`;
charMap.t = `(!![]+[])[${quackNum(0)}]`;
charMap.u = `([]+[][${quackNum(0)}])[${quackNum(0)}]`;
charMap.o = `(([])[${quackStr('entries')}]+[])[${quackNum(6)}]`;
charMap[' '] = `(([])[${quackStr('entries')}]+[])[${quackNum(8)}]`;
charMap.c = `(([])[${quackStr('entries')}]+[])[${quackNum(3)}]`;
charMap.S = `([]+([]+[])[${quackStr('constructor')}])[${quackNum(9)}]`;
charMap.b = `((${quackNum(0)})[${quackStr('constructor')}]+[])[${quackNum(12)}]`;
charMap.g = `([]+([]+[])[${quackStr('constructor')}])[${quackNum(14)}]`;
charMap.m = `([]+(${quackNum(0)})[${quackStr('constructor')}])[${quackNum(11)}]`;
charMap.h = `(${quackNum(17)})[${quackStr('toString')}](${quackNum(32)})`;
charMap.p = `(${quackNum(25)})[${quackStr('toString')}](${quackNum(32)})`;
charMap.F = `((([])[${quackStr('constructor')}])[${quackStr('constructor')}]+[])[${quackNum(9)}]`;
charMap['<'] = `(([]+[])[${quackStr('bold')}]())[${quackNum(0)}]`;
charMap.C = `(((([])[${quackStr('map')}])[${quackStr('constructor')}])[${quackStr('constructor')}](${quackStr('return escape')})()(${quackStr('<')}))[${quackNum(2)}]`;
