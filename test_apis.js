const axios = require('axios');

async function testAPIs() {
  const baseURL = 'http://localhost:3000';
  const uniqueEmail = `test${Date.now()}@example.com`;
  try {
    // Register
    console.log('Testing Register...');
    const registerRes = await axios.post(`${baseURL}/api/auth/register`, {
      name: 'Test User',
      email: uniqueEmail,
      password: 'password123'
    });
    console.log('Register Response:', registerRes.data);

    // Login
    console.log('Testing Login...');
    const loginRes = await axios.post(`${baseURL}/api/auth/login`, {
      email: uniqueEmail,
      password: 'password123'
    });
    console.log('Login Response:', loginRes.data);
    const token = loginRes.data.token;

    // Create Task
    console.log('Testing Create Task...');
    const createTaskRes = await axios.post(`${baseURL}/api/tasks`, {
      title: 'Test Task',
      description: 'This is a test task'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Create Task Response:', createTaskRes.data);
    const taskId = createTaskRes.data._id;

    // Get Tasks
    console.log('Testing Get Tasks...');
    const getTasksRes = await axios.get(`${baseURL}/api/tasks`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Get Tasks Response:', getTasksRes.data);

    // Update Task
    console.log('Testing Update Task...');
    const updateTaskRes = await axios.put(`${baseURL}/api/tasks/${taskId}`, {
      title: 'Updated Task',
      description: 'Updated description'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Update Task Response:', updateTaskRes.data);

    // Delete Task
    console.log('Testing Delete Task...');
    const deleteTaskRes = await axios.delete(`${baseURL}/api/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Delete Task Response:', deleteTaskRes.data);

    console.log('All APIs tested successfully!');
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testAPIs();