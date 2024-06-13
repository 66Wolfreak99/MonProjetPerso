import pfp1 from "../img/pfp1.png";        
import pfp2 from "../img/pfp2.jpg";     
import pfp3 from "../img/pfp3.jpg";     
import pfp4 from "../img/pfp4.jpg";
import pfp5 from "../img/pfp5.png";
import pfp6 from "../img/pfp6.webp";

import banner1 from "../img/banner.webp";

import fox1 from "../img/fox1.webp";
import fox2 from "../img/fox2.jpg";
import fox3 from "../img/fox3.jpg";
import fox4 from "../img/fox4.webp";
import fox5 from "../img/fox5.jpg";



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
{//0
    username: "Fruite",
    imgUrl: pfp3,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{//1
    username: "Dergast",
    imgUrl: pfp2,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{//2
    username: "Mobius 1",
    imgUrl: pfp5,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{//3
    username: "Goobus",
    imgUrl: pfp4,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
},
{//4
    username: "Wanderlost",
    imgUrl: pfp6,
    bannerUrl:"",
    winds: 102,
    following: 10,
    followers: 600
}
];

const posts = [
    
    new Post(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure veritatis neque possimus fugit perferendis nihil et id voluptates assumenda ratione minima ullam sunt sed eveniet dolore autem maiores repellat!",
        "",
        users[3].username,
        users[3].imgUrl,
        ["Fooled", "AprilFools", "Aeruergh"],
        3000,
        35,
        1300,
        "7:30 April 1 2078"
    ),

    new Post(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure veritatis neque possimus fugit perferendis nihil et id voluptates assumenda ratione minima ullam sunt sed eveniet dolore autem maiores repellat!",
        "",
        users[0].username,
        users[0].imgUrl,
        ["Fruits", "Cooking", "Recipes", "Chef"],
        1716,
        3,
        121,
        "16:01 April 25 2078"
    ),

    new Post(
        "Family! ❤🦊",
        [fox1, fox2, fox3, fox4, fox5],
        users[4].username,
        users[4].imgUrl,
        ["Fox", "Fluffy"],
        2520,
        16,
        1400,
        "13:50 April 25 2078"
    ),

    new Post(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis reiciendis aspernatur explicabo quis quam officia officiis quisquam eligendi!",
        "",
        users[3].username,
        users[3].imgUrl,
        ["Tag", "Litterature", "Violence"],
        708,
        2,
        121,
        "8:00 May 6 2078"
    ),

    new Post(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis reiciendis aspernatur explicabo quis quam officia officiis quisquam eligendi!",
        [banner1],
        currentUser.username,
        currentUser.imgUrl,
        ["Banner", "Profile", "Dragons"],
        480,
        0,
        50,
        "14:55 May 5 2078"
    ),

    new Post(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis reiciendis aspernatur explicabo quis quam officia officiis quisquam eligendi!",
        "",
        currentUser.username,
        currentUser.imgUrl,
        ["Tag", "Litterature", "Violence"],
        1586,
        5,
        500,
        "9:40 May 8 2078"
    ),
    

    // {
    //     content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis reiciendis aspernatur explicabo quis quam officia officiis quisquam eligendi, perspiciatis nesciunt voluptatibus harum necessitatibus ex dolore repudiandae in voluptates expedita?",
    //     tags: ["Tag", "Literature", "Violence"],
    //     username: currentUser.username,
    //     imgUrl: currentUser.imgUrl,
    //     views: 1586,
    //     responses: 5,
    //     likes: 500,
    //     date: "9:40 May 8 2078"
    // },

    // {
    //     content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis reiciendis aspernatur explicabo quis quam officia officiis quisquam eligendi, perspiciatis nesciunt voluptatibus harum necessitatibus ex dolore repudiandae in voluptates expedita?",
    //     tags: ["Tag", "Literature", "Violence"],
    //     username: currentUser.username,
    //     imgUrl: currentUser.imgUrl,
    //     views: 1586,
    //     responses: 5,
    //     likes: 500,
    //     date: "9:40 May 8 2078"
    // },

    // new Post(
    //     "This is hella rad!",
    //     [banner1, banner1, banner1, banner1, banner1],
    //     users[2].username,
    //     users[2].imgUrl,
    //     ["Dandes", "WTF", "Cute"],
    //     858,
    //     4,
    //     78,
    //     "9:40 May 8 2078"


    // )
];

export const postsList = {currentUser, users, posts}