import {checkData} from './dataChecker';
import "regenerator-runtime/runtime";

const handleSubmit = async (event) => {
    event.preventDefault();
    let test = require('valid-url');
    let url = document.getElementById('name').value;

    if (test.isUri(url)) {
        const data = await Client.fetchData(url);
        checkData(data);

    } else {
        alert('please enter a valid URL and try again');
    }

}
export { handleSubmit };

 export async function fetchData(bodyRequest) {
    let data = {};
    data = await fetch("http://localhost:8080/fetch", {
        method: "POST",
        body: JSON.stringify(bodyRequest),
        headers: { "Content-Type": "application/json" },
        credentials: 'same-origin',
    }).then(res => {
        return res.json()
    }).then(function (data) {
        return data;
    })

    return data;
}





