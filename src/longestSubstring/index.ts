/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function(str: string): number {
  let store: {
    length: number;
    set: Set<String>;
  }[] = [];
  let max = 0;
  for (let i = 0; i < str.length; i++) { // Loop through each charater.
    const currentLetter = str[i];
    let storeLength = store.length;
    while (storeLength--) { // Loop through the store and add to our old strings.
      const storeItem = store[storeLength];
      if (!storeItem.set.has(currentLetter)) { // if the store item doesn't have the item just add it and inc length
        storeItem.length++;
        storeItem.set.add(currentLetter)
      } else { // if it does have the item store the max length and delete it.
        max = storeItem.length > max ? storeItem.length : max;
        store.splice(storeLength, 1)
      }
    }
    store.push({
      length: 1,
      set: new Set<String>(currentLetter)
    })
  }

  // got to the end now lets extract the top score. which is the first item in the list
  max = store.length && store[0].length > max ? store[0].length : max;
  return max;
};
