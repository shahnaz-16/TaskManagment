/*configuration of your PostgreSQL connection */
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
});


const getTasks = (request, response) => {
  pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTaskById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createTask = (request, response) => {
  const {name, status } = request.body;

  pool.query(
    'INSERT INTO tasks (name, status) VALUES ($1, $2) RETURNING *',
    [name, status],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Tasks added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateTask = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, status } = request.body;

  pool.query(
    'UPDATE tasks SET name = $1, status = $2 WHERE id = $3',
    [name, status, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Task modified with ID: ${id}`);
    }
  );
};

const deleteTask = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Task deleted with ID: ${id}`);
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
