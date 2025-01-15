const { sql } = require("../dbConnection");

exports.getAllTours = async () => {
  const tourList = await sql`
  SELECT tours.name as tour_name, tours.price, categories.name, difficulty.level
  FROM tours
  JOIN difficulty ON tours.difficulty_id=difficulty.id
  JOIN categories ON tours.category_id = categories.id
  `;

  return tourList;
};

exports.getToursByCat = async (categoryid) => {
  const tours = await sql`
  SELECT tours.name as tour_name, tours.price, categories.name, difficulty.level
  FROM tours
  JOIN difficulty ON tours.difficulty_id=difficulty.id
  JOIN categories ON tours.category_id = categories.id
  WHERE tours.category_id=${categoryid}
  `;

  return tours;
};

exports.countToursByCat = async () => {
  const tours = await sql`
SELECT 
categories.name AS category,
COUNT(tours.id) AS totalCounts,
FROM tours
JOIN categories ON tours.category_id=categories.id
GROUP BY categories.name
  `;
};

exports.getTourById = async (id) => {
  const tours = await sql`
    SELECT tours.*
    FROM tours
    WHERE tours.id = ${id}
    `;
  return tours[0]; //tours is array
};

exports.update = async (id, tour) => {
  const columns = Object.keys(tour);

  const newTours = await sql`
  update tours set ${sql(tour, columns)}
  where tours.id = ${id}
  RETURNING *`;

  return newTours[0];
};

exports.filterTours = async (filter) => {
  const tours = await sql`
   SELECT tours.*, difficulty.level as difficulty, categories.name as category
    FROM tours
    JOIN difficulty ON tours.difficulty_id = difficulty.id
    JOIN categories ON tours.category_id = categories.id
    WHERE
    tours.duration <= ${filter.duration} AND difficulty.level = ${filter.difficulty} AND tours.price <= ${filter.price} 
  
  `;
  return tours;
};
