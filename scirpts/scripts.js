let arrTweet = [];
let tweetText = document.getElementById("text");
const MAX_TEXT = 140;
tweetText.addEventListener('input', countText);

function tweetPost()
{
    let content = tweetText.value;
    arrTweet.unshift(content);
    tweetText.value = "";
    renderTweeter()
}
tweetPost()
function renderTweeter()
{
    let html = arrTweet.map((char,i)=>
        {
            
            return `
        <div class="card mb-3 cuong-smallcard" style="max-width: 640px;">
          <div class="row no-gutters cuong-row">
            <div class="col-md-4 cuong-img-div">
              <img src="https://www.asiatripdeals.com/wp-content/uploads/2019/03/Anonymous-Avatar.png" class="card-img cuong-card-img" alt="..." />
            </div>
            <div class="col-md-8" id="show-message">
              <div class="card-body cuong-card-body">
                <h5 class="card-title">NAME</h5>
                <p class="card-text cuong-comment">${insertLink(char)}</p>
                <hr>
                <p class="card-text">Posted by <b>Anonymous</b> a few seconds ago</p>
                <button id="cuong-like">Like</button>
                <button onclick="reTweet()" >Retweet</button>
                <button id="cuong-delete">Delete</button>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <span id="cuong-retweet${i}"> </span>
                <hr>
              </div>
            </div>
          </div>
        </div>
            `
        }
        ).join(" ")
        document.getElementById('result').innerHTML = html
        
}

function reTweet()
{
    let reTweetProm = prompt("What on your mind? ");
    document.getElementById("cuong-retweet0").innerHTML = reTweetProm;
}
function insertLink(string) {
    const splitString = string.split(' ')
    return splitString.map(word => {
      const isHashtag = word[0] === '#'
      return isHashtag ? `<a href="#" onclick="magic()">${word}</a>` : word
    }).join(' ')
}
function countText(){
    let remainLetter = MAX_TEXT - tweetText.value.length;
    document.getElementById('countText').innerHTML = remainLetter
    if(remainLetter < 0)
    {
        document.getElementById('text').style.color="red"
        document.getElementById('btn-tweeter').disabled=true
    }
    else
    {
        document.getElementById('text').style.color="black"  
        document.getElementById('btn-tweeter').disabled=false
    }
    console.log(remainLetter);
}
function retweet(){
    
}