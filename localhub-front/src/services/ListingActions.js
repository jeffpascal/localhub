async function SaveNewListing(listing) {
  const response = await fetch("http://localhost:7000/api/listings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: listing.name,
      author: listing.author,
      description: listing.description
    })
  });
  return await response.body;
}

export default SaveNewListing;
