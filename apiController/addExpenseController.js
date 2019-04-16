// todo
export function addExpenseTrackerApp( AddExpenseMap) {
    const Http = new XMLHttpRequest();
    const url='http://jsonplaceholder.typicode.com/posts';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        console.log(Http.responseText)
    }
    return Http.responseType;
}