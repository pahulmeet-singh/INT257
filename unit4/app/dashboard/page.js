import React from 'react';

function Dashboard() {
  return (
    <div>
        <form action="/api/logout" method="POST">
            <p>This is my Dashboard</p>
            <button type="submit">Logout</button>
        </form>
    </div>
  )
}

export default Dashboard
