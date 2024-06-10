import pfp1 from "../img/pfp1.png";        
import pfp2 from "../img/pfp2.jpg";     
import pfp3 from "../img/pfp3.jpg";     
import pfp4 from "../img/pfp4.jpg";
import pfp5 from "../img/pfp5.png";
import pfp6 from "../img/pfp6.webp";

import banner1 from "../img/banner.webp";



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
};


const currentUser = {
    username: "Hurkin",
    imgUrl: pfp1,
    bannerUrl:banner1,
    winds: 102,
    following: 10,
    followers: 600,
    notifications: [10, 7]
};

const users = [
{
    username: "Fruite",
    imgUrl: pfp3,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{
    username: "Dergast",
    imgUrl: pfp2,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{
    username: "Mobius 1",
    imgUrl: pfp5,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{
    username: "Goobus",
    imgUrl: pfp4,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{
    username: "Wanderlost",
    imgUrl: pfp6,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
}
];

const posts = [
    {
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis reiciendis aspernatur explicabo quis quam officia officiis quisquam eligendi, perspiciatis nesciunt voluptatibus harum necessitatibus ex dolore repudiandae in voluptates expedita?",
        tags: ["Tag", "Literature", "Violence"],
        username: currentUser.username,
        imgUrl: currentUser.imgUrl,
        views: 1586,
        responses: 5,
        likes: 500,
        date: "9:40 May 8 2078"
    },

    {
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis reiciendis aspernatur explicabo quis quam officia officiis quisquam eligendi, perspiciatis nesciunt voluptatibus harum necessitatibus ex dolore repudiandae in voluptates expedita?",
        tags: ["Tag", "Literature", "Violence"],
        username: currentUser.username,
        imgUrl: currentUser.imgUrl,
        views: 1586,
        responses: 5,
        likes: 500,
        date: "9:40 May 8 2078"
    },

    new Post(
        "This is hella rad!",
        [banner1, banner1, banner1, banner1, banner1],
        users[2].username,
        users[2].imgUrl,
        ["Dandes", "WTF", "Cute"],
        858,
        4,
        78,
        "9:40 May 8 2078"


    )
];

export const postsList = {currentUser, users, posts}