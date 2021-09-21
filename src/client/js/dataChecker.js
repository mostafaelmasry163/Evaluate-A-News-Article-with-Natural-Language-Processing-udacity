
export function checkData(data) {
    document.getElementById("agreement").innerHTML =data.agreement;
    document.getElementById('score_tag').innerHTML = data.score_tag;
    document.getElementById('subjectivity').innerHTML = data.subjectivity;
    document.getElementById('confidence').innerHTML = data.confidence;
    document.getElementById('irony').innerHTML = data.irony;
    document.getElementById('results').style.display = "";
}
