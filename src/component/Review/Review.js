import { data } from "autoprefixer";
import React from "react";

const Review = () => {
  const handlePostData = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    fetch("https://quiet-tor-61846.herokuapp.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
    .then(res=>res.json())
    .then(data=>{
    console.log('Success',data)
    })
  };

  return (
    <div>
      <form onSubmit={handlePostData}>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="border-8 border-green-400"
        />
      </form>
    </div>
  );
};

export default Review;
