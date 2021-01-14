/*****************************
Warmup-1 -- missingChar
Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

Examples

missingChar('kitten', 1) → ktten
missingChar('kitten', 0) → itten
missingChar('kitten', 4) → kittn
*****************************/

function missingChar(str, n){
  return (str.slice(0,n) + str.slice(n+1))
}