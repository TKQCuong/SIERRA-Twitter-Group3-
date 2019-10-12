// function getAppState() {
//   return JSON.parse(localStorage.getItem("taskSaving")) || obj[]
  

// }
// function save(taskSaving) {
//   return localStorage.setItem('taskSaving', JSON.stringify(taskSaving));
// }
// let arrTweet = getAppState()


//LIVE BACKGROUND

//END LIVE BACKGROUND

let arrTweet = [];
let tweetText = document.getElementById("text");
const MAX_TEXT = 140;
tweetText.addEventListener("input", countText);
let num = 0;

function tweetPost() {
  const content = tweetText.value;
  let obj = {
    comment: [],
    body: content,
    time: Date.now()
  };
  arrTweet.unshift(obj);
  tweetText.value = "";

  renderTweeter();
  countText();
}

function renderTweeter() {
  let html = arrTweet
    .map((char, i) => {
      return `
        <div class="card mb-3 cuong-smallcard" style="max-width: 640px;">
          <div class="row no-gutters cuong-row">
            <div class="col-md-4 cuong-img-div">
              <img src="img/avatar.jpg" class="card-img cuong-card-img" alt="..." />
            </div>
            <div class="col-md-8" id="show-message">
              <div class="card-body cuong-card-body">
                <h5 class="card-title">Group 3</h5>
                <p class="card-text cuong-comment">${insertLink(char.body)}</p>
                <hr>
                <p class="card-text">Posted by <b>Group 3</b></p>
                <button onclick="like(${i})" id="cuong-like${i}" class="like-style" value="Like">Like</button>
                <button onclick="reTweet(${i})" class="retweet-style">Retweet</button>
                <button id="cuong-delete" onclick="cuongdelete(${i})">Delete</button>
                <p class="card-text">
                  <small class="text-muted">${moment(char.time)
                    .startOf("minute")
                    .fromNow()}</small>
                </p>
                <div id="cuong-retweet${i}">${char.comment.join("<br>")}</div>
                <hr>
              </div>
            </div>
          </div>
        </div>
            `;
    })
    .join(" ");
  document.getElementById("result").innerHTML = html;
}

function cuongdelete(i) {
  arrTweet.splice(i, 1);
  renderTweeter();
}

function like(i) {
  let like = document.getElementById(`cuong-like${i}`);
  if (like.value === "Like") {
    like.value = "Unlike";
    document.getElementById(`cuong-like${i}`).innerHTML = "Unlike";
    document.getElementById(`cuong-like${i}`).style.backgroundColor = "#008CBA";
    // save(arrTweet)
  } else {
    like.value = "Like";
    document.getElementById(`cuong-like${i}`).innerHTML = "Like";
    document.getElementById(`cuong-like${i}`).style.backgroundColor = "#008CBA";
    // save(arrTweet)
  }
}

function reTweet(i) {
  let reTweetProm = prompt("What's on your mind? ");
  if (reTweetProm !== null) {
    arrTweet[i].comment.push(reTweetProm);
    console.log(arrTweet[i]);
    let htmlReTweet = arrTweet[i].comment
      .map(reTweet => {
        return `${reTweet}`;
      })
      .join("<br>");
    document.getElementById(`cuong-retweet${i}`).innerHTML = htmlReTweet;
    // save(arrTweet)
  } else {
    arrTweet[i].comment.push("");
    console.log(arrTweet[i]);
    let htmlReTweet = arrTweet[i].comment
      .map(reTweet => {
        return `${reTweet}`;
      })
      .join("<br>");
    document.getElementById(`cuong-retweet${i}`).innerHTML = htmlReTweet;
    // save(arrTweet)
  }
}
function insertLink(string) {
  const splitString = string.split(" ");
  return splitString
    .map(word => {
      const isHashtag = word[0] === "#";
      return isHashtag ? `<a href="#">${word}</a>` : word;
    })
    .join(" ");
}
function countText() {
  let remainLetter = MAX_TEXT - tweetText.value.length;
  document.getElementById("countText").innerHTML = remainLetter;
  if (remainLetter < 0) {
    document.getElementById("text").style.color = "red";
    document.getElementById("btn-tweeter").disabled = true;
  } else if (remainLetter === 140) {
    document.getElementById("btn-tweeter").disabled = true;
  } else {
    document.getElementById("text").style.color = "black";
    document.getElementById("btn-tweeter").disabled = false;
  }
}
countText();

let input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-tweeter").click();
  }
});
