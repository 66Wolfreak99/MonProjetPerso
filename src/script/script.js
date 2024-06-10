
import pfp1 from "../img/pfp1.png";     import postComm from "../img/comment.svg";      import postImg from "../img/comment.svg";
import pfp2 from "../img/pfp2.jpg";     import postShare from "../img/share.svg";
import pfp3 from "../img/pfp3.jpg";     import postFire from "../img/fire.svg";
import pfp4 from "../img/pfp4.jpg";
import pfp5 from "../img/pfp5.png";
import pfp6 from "../img/pfp6.webp";

import banner1 from "../img/banner.webp";

import {postsList} from "../script/posts.js"

console.log(postsList)

class Post{
    username = currentUser.username;
    imgUrl= currentUser.imgUrl;
    constructor(content, images, username, imgUrl, tags, views, responses, likes, date){
        this.content = content;
        this.images = images;
        this.username = username;
        this.imgUrl = imgUrl;
        this.tags = tags;
        this.views = views;
        this.responses = responses;
        this.likes = likes;
        this.date = date;
    }
}

const currentUser = postsList.currentUser

const users = postsList.users;

const currents = [
    "current",
    "DragonWars",
    "Burger",
    "Paathurnax",
    "Meow",
];

const posts = postsList.posts; 

console.log(posts);

function elementCreateAndAssign(element = String, css, attributeName, attribute, content){

    const newEl = document.createElement(element);
    
    if (css){

        if (typeof css === "object"){
            for (let classEl = 0; classEl < css.length; classEl++ ){
                newEl.classList.add(css[classEl]);
            }
        }
        else if (typeof css === "string"){
            newEl.classList.add(css);
        }
    };

    if (attribute && attributeName){
       

        if (typeof attributeName === "object" && typeof attribute === "object"){
            for (let attEl = 0; attEl < attributeName.length; attEl++ ){
                newEl.setAttribute(attributeName[attEl], attribute[attEl]);
            }
        }
        else if (typeof attributeName === "string" && typeof attribute === "string"){
            newEl.setAttribute(attributeName, attribute);
        }

    };

    if (content){
        newEl.textContent = content;
    }

    return newEl
}


function displaySuggestions(){
    const suggestionCont = document.querySelector(".side__suggestion");
    suggestionCont.append(document.createElement("hr"))

    for (const user of users){

        const soarLi = elementCreateAndAssign("li","side__soarer");

        const soarPfp = elementCreateAndAssign("img", "", "src", user.imgUrl);
        const soarName = elementCreateAndAssign("p", "account-name", "", "", user.username);
        const soarFollow = elementCreateAndAssign("a", ["button", "side__follow"], "href", "#", "Follow")

        soarLi.append(soarPfp, soarName, soarFollow);

        suggestionCont.append(soarLi);
    }

};

function displayCurrentUser(){
    const userCont = document.getElementById("user");
    const userPfp = userCont.querySelector("img");
    const userTitle = userCont.querySelector(".account-name");
    const userStats = userCont.querySelector(".side__user--stats").getElementsByTagName("span");
    const userBanner = userCont.querySelector(".side__user--banner");

    userStats[0].textContent = currentUser.winds;
    userStats[1].textContent = currentUser.following;
    userStats[2].textContent = currentUser.followers;

    userTitle.textContent = currentUser.username;
    userPfp.setAttribute("src", currentUser.imgUrl);

    userBanner.style.backgroundImage = `url(${currentUser.bannerUrl})`;

}

function displayCurrents(){
    
    for (let i = 0; i < currents.length; i++){
        const currentCont = document.getElementsByClassName("side__current-container")[0];

        const currentLi = elementCreateAndAssign("li","side__current", "", "", `#${currents[i]}`) 

        currentCont.append(currentLi);
    }
}

function displayNotif(dmNum, notifNum){
    const dm = document.getElementsByClassName("navigation__notification")[0];
    const notif = document.getElementsByClassName("navigation__notification")[1];

   

    if(dmNum){
        dm.style.display = "inline-block"
        dm.textContent = dmNum;
        if(dmNum > 99){
            dm.textContent = "99+";
        }
    } else {
        dm.style.display = "none"
    };


    if(notifNum){
        notif.style.display = "inline-block"
        notif.textContent = notifNum;
        if(notifNum > 99){
            notif.textContent = "99+";
        }
    } else {
        notif.style.display = "none"
    }
}

function displayPost(){

    const postCont = document.getElementById("post-container");
    
    for (const post of posts){
        

        console.log(post.username);

        const postEl = elementCreateAndAssign("article", "post");

        const postProfile = elementCreateAndAssign("div","post__profile")

        const postProfileInfo = elementCreateAndAssign("section", "post__profile-container");


        // Profile img & nom

        const profileImage = elementCreateAndAssign("img", "profile-pic", "src", post.imgUrl);
        const profileUsername = elementCreateAndAssign("p", ["post__profile--name", "account-name"],"","", post.username);
        const profileDate = elementCreateAndAssign("p", "post__profile--date", "", "",post.date)

        postProfileInfo.append(
            profileImage, profileUsername, profileDate,
        );
        

        // buttons
        const postProfileButtons = elementCreateAndAssign("section", "post__buttons");

        const actionButtons = [];
        
        for (let i = 0; i < 3; i++){
            

            let imgSrc;
            let title;

            switch(i){
                case 0:
                    title = "Comment";
                    imgSrc = postComm;
                    break;
                
                case 1:
                    title = "Share";
                    imgSrc = postShare;
                    break;

                case 2:
                    title = "Like";
                    imgSrc = postFire;
                    break;
            };

            const buttonEl = elementCreateAndAssign("div", "post__button", "title", title);
            const buttonImage = elementCreateAndAssign("img", "", "src", imgSrc);

            buttonEl.append(buttonImage);
            actionButtons.push(buttonEl);

            postProfileButtons.append(actionButtons[i]);
        }

        // Content
        const postContent = elementCreateAndAssign("p", "post__content", "","",post.content);

        // Images
        const postImage = elementCreateAndAssign("section", "post__images");
        if(post.images){
            
            
            for (const image of post.images){
                const imgCont = elementCreateAndAssign("div", "post__image-container");
                const imgEl = elementCreateAndAssign("img","post__image",["src", "alt"],[image, image]);

                imgCont.append(imgEl);
                postImage.append(imgCont)
            };

            

        }

        // Tags
        const tagAside = document.createElement("aside");
        const tagCont = elementCreateAndAssign("p", "post__tags");

        for (const tag of post.tags){
            const tagEl = elementCreateAndAssign("span", "", "","",tag);
            tagCont.append(tagEl)
        };

        tagAside.append(tagCont);


        // Footer
        const postFooter = elementCreateAndAssign("footer", "post__footer");

        const footerReport = elementCreateAndAssign("p", "post__footer--report");
        footerReport.append(elementCreateAndAssign("a", "", "href", "#", "Report"));

        const footerStats = elementCreateAndAssign("p", "post__footer--stats");

        for(let i = 0; i< 3; i++){

            let title ;
            let number; 

            switch(i){
                case 0:
                    title = "Views: ";
                    number = post.views;
                    break;
                case 1:
                    title = "Responses: ";
                    number = post.responses;
                    break;
                case 2:
                    title = "Likes: ";
                    number = post.likes;
                    break;
                
            }

            const stats  = elementCreateAndAssign("span", "", "","",title);
            stats.append(elementCreateAndAssign("span", "bold", "","",number));

            footerStats.append(stats)
        }


        postProfile.append(postProfileInfo, postProfileButtons);

        postFooter.append(footerStats, footerReport)

        postEl.append( postProfile, postContent, postImage, tagAside, postFooter );
        // console.log(postCont)
        postCont.prepend(postEl);

       
    }

}


displaySuggestions();
displayCurrentUser();
displayCurrents();
displayPost();
displayNotif(currentUser.notifications[0], currentUser.notifications[1])