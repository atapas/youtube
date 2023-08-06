console.log('Grouping..')

const MY_EATABLES = [
  {food: "🍆", type: "Vegetables", count: 1 },
  {food: "🥝", type: "Fruits", count: 1 },
  {food: "🍅", type: "Vegetables", count: 3 },
  {food: "🥚", type: "Non-Vegs", count: 5 },
  {food: "🍗", type: "Non-Vegs", count: 4 },
  {food: "🥬", type: "Vegetables", count: 1 },
  {food: "🐟", type: "Non-Vegs", count: 3 },
  {food: "🥭", type: "Fruits", count: 4 },
  {food: "🥑", type: "Fruits", count: 1 },
]

const grouped = MY_EATABLES.groupToMap((item) => {
  return item.type;
})


//console.log(grouped)

console.log(grouped)

/*Map {
  "Vegetables" => [
    {food: "🍆", type: "Vegetable", count: 1}, 
    {food: "🍅", type: "Vegetable", count: 3}, 
    {food: "🥬", type: "Vegetable", count: 1}
  ], 
  "Fruits" => [
    {food: "🥝", type: "Fruit", count: 1}, 
    {food: "🥭", type: "Fruit", count: 4}, 
    {food: "🥑", type: "Fruit", count: 1}
  ], 
  "Non-Vegs" => [
    {food: "🥚", type: "Non-Veg", count: 5}, 
    {food: "🍗", type: "Non-Veg", count: 4},
    {food: "🐟", type: "Non-Veg", count: 3}
  ]
}*/
