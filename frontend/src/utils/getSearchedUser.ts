import { messageCard } from "../data/fakedata";

export const getSearchedUser = (query: string) => {
  query = query.toLowerCase(); // Convert the query to lowercase for case-insensitive search

  // Filter users whose name or email contains the query
  const searchedUsers = messageCard.filter((user) => {
    const nameMatches = user.name.toLowerCase().includes(query); // Check if name includes the query
    // Assuming email is included in the bio
    const emailMatches = user.bio.toLowerCase().includes(query); // Check if bio (assumed to contain email) includes the query
    return nameMatches || emailMatches;
  });

  return searchedUsers;
};
