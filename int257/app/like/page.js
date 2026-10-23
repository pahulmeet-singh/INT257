// "use client";
// import React, { useState } from "react";

// export default function Like() {
//   const [likes, setLikes] = useState(10);

//   async function addLike() {
//     const oldLikes = likes;
//     setLikes(likes + 1);
//     try {
//       const res = await fetch("/api/like", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           data: "like",
//         }),
//       });
//       if (!res.ok) {
//         throw new Error("Failed to add like");
//       }
//       console.log("Like added successfully");
//     } catch (error) {
//       setLikes(oldLikes);
//       console.error("Error adding like:", error);
//     }
//   }
//   return (
//     <div>
//       <h2>This is my POST</h2>
//       <button onClick={addLike}>Like👍</button>
//       <h3>Like Count: {likes}</h3>
//     </div>
//   );
// }

"use client";
import React, { startTransition, useState , useOptimistic } from "react";

export default function Like() {
    // Actual / confirmed value
    const [likes, setLikes] = useState(10);
    // Optimistic value
    const [optimisticLikes, setOptimisticLikes] = 
    useOptimistic(
        likes,
        (currentLikes, amount) =>{
            return currentLikes + amount
        }
    )
    async function addLike() {

        // Immediately show +1
        startTransition(()=>{
            addOptimisticLike(1)
        })
            try {
      const res = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: "like",
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to add like");
      }
      console.log("Like added successfully");
    } catch (error) {
      setLikes(oldLikes);
      console.error("Error adding like:", error);
    }
  }
  return (
    <div>
      <h2>This is my POST</h2>
      <button onClick={addLike}>Like👍</button>
      <h3>Like Count: {optimisticLikes }</h3>
    </div>
  );
}