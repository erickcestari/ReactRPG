
export const binarySearch = (list:number[], item:number) => {
    let start = 0;
    let top = list.length - 1;

    while (start <= top) {
        let mid = Math.floor((start + top) / 2);
        let attempt = list[mid];
        
        if(attempt === item) return mid;

        if(attempt > item) top = mid - 1;
        else start = mid + 1;
    }

    return undefined;
}