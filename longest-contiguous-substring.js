/*
  Longest Substring With No Duplicates
  Given a string, return the length of the longest substring without repeating characters. You need only return the length of the longest substring and not the substring itself.
  Input: 'abca'
  Output:3 (longest strings are: 'abc' or 'bca')
  Input: 'abcbadb'
  Output: 4 (longest string is:'cbad')
*/

/*
PSEUDOCODE
Initialize count1, count2
Loop over string
  Second loop
    Add to count1 for every unique character in a row
    If duplicate character
      If count1>count2
        transfer count1 to count2
      end
      break
    end
  end
end
return count2
*/

test1 = "abca"     // 3
test2 = "abcbadb"  // 4
test3 = "abcadef"  // 6

const longestSubstring = (str) => {
  let count2 = 1
  // the str.length-count2 below prevents the function from checking for a longer string than already found if a shorter amount of characters are left in the original string
  for (i=0;i<str.length-count2;i++) {
    let subStr = str[i]
    let count1 = 1
    for(j=i+1;j<str.length;j++) {
      if (!subStr.includes(str[j])) {
        subStr += str[j]
        count1 += 1
      } else if (count1 > count2) {
          count2 = count1
          break
      }
      // This ensure the count is transferred if the last character in the array is included in the longest substring.
      if (j === str.length - 1 && count1 > count2) {
        count2 = count1
      }
    }
  }
  return count2
}

console.log(longestSubstring(test1))
console.log(longestSubstring(test2))
console.log(longestSubstring(test3))
