// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
const merge = function(array: number[], p: number, q:number, r:number) {
    // This code has been purposefully obfuscated,
    //  as you'll write it yourself in next challenge.
    let a=[],b=[],c=p,d,e;for(d=0;c<=q;d++,c++){a[d]=array[c];}for(e=0;c<=r;e++,c++){b[e]=array[c];}c=p;for(e=d=0;d<a.length&&e<b.length;){if(a[d]<b[e]){array[c]=a[d];d++;} else {array[c]=b[e]; e++;}c++; }for(;d<a.length;){array[c]=a[d];d++;c++;}for(;e<b.length;){array[c]=b[e];e++;c++;}
};

// Takes in an array and recursively merge sorts it
// [14, 7, 3, 12, 9, 11, 6, 2] 0 7
export const mergeSort = function(array: number[], start: number, end:number) {
    if (end > start) {
        const middle = Math.floor((end + start) / 2);
        mergeSort(array, start, middle);
        mergeSort(array, middle+1, end);
        merge(array, start, middle, end)
    }

};
