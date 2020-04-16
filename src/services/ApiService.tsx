export const getAllDriverCard = async (postCodeUrl: string) => {
  return fetch("http://localhost:9000/learner/home", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      postCode: postCodeUrl
    })
  });
};
