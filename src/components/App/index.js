import React from "react";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";

function App() {
  const blog = [
    {
      title: "The BMW X6 M",
      author: "Kyle Williams",
      datePosted: "2023-04-15",
      content:
        "The BMW X6 M is an incredible machine that is designed for speed and style. With its powerful engine and sleek design, the X6 M is the perfect car for anyone who wants to make a statement on the road. The X6 M is equipped with a 4.4-liter V8 engine that produces 617 horsepower and 553 pound-feet of torque, which allows it to go from 0-60 mph in just 3.7 seconds. But the X6 M isn't just fast - it's also incredibly comfortable and luxurious.",
      imageSrc:
        "https://lkswebprdcdnep4.azureedge.net/api/image/stock/f26bcbfb-590c-481c-acb6-dcac0b88ef18?w=1200",
      imageAlt: "A black BMW X6 M parked on a city street",
    },
    {
      title: "The BMW X6 M",
      author: "Kyle Williams",
      datePosted: "2023-04-15",
      content:
        "The BMW X6 M is an incredible machine that is designed for speed and style. With its powerful engine and sleek design, the X6 M is the perfect car for anyone who wants to make a statement on the road. The X6 M is equipped with a 4.4-liter V8 engine that produces 617 horsepower and 553 pound-feet of torque, which allows it to go from 0-60 mph in just 3.7 seconds. But the X6 M isn't just fast - it's also incredibly comfortable and luxurious.",
      imageSrc:
        "https://animalfactguide.com/wp-content/uploads/2013/10/ostrich2.jpg",
      imageAlt: "A black BMW X6 M parked on a city street",
    },
    {
      title: "The BMW X6 M",
      author: "Kyle Williams",
      datePosted: "2023-04-15",
      content:
        "The BMW X6 M is an incredible machine that is designed for speed and style. With its powerful engine and sleek design, the X6 M is the perfect car for anyone who wants to make a statement on the road. The X6 M is equipped with a 4.4-liter V8 engine that produces 617 horsepower and 553 pound-feet of torque, which allows it to go from 0-60 mph in just 3.7 seconds. But the X6 M isn't just fast - it's also incredibly comfortable and luxurious.",
      imageSrc:
        "https://lkswebprdcdnep4.azureedge.net/api/image/stock/f26bcbfb-590c-481c-acb6-dcac0b88ef18?w=1200",
      imageAlt: "A black BMW X6 M parked on a city street",
    },
  ];
  const Newcomments = [
    {
      id: "jFyGAKz1VsGputO1gV8xa",
      author: "Kyle Williams",
      content: "Best CAR in the WORLD!",
    },
    {
      id: "yGAKzjF1VsGputO1gV8ax",
      author: "Chris Meah",
      content: "Many thank yous",
    },
  ];

  return (
    <div>
      {blog.map((blog, index) => (
        <BlogPost key={index} blog={blog} />
      ))}
      <ul>
      <CommentList comments={Newcomments} />;
      </ul>
    </div>
  );
}

export default App;
