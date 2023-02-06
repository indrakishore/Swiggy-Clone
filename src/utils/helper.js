export function filterData(searchInput, restaurants) {
  // 8 restaurants lis -> filtered rest with "King" inside

  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}
