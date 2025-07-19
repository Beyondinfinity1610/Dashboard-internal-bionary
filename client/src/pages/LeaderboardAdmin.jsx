import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Isha Verma', department: 'Information Technology', tier: 'Platinum', points: 2400, topic: 'Blockchain' },
  { id: 2, name: 'Alex Chen', department: 'Computer Science', tier: 'Diamond', points: 2340, topic: 'Web Dev' },
  { id: 3, name: 'Priya Sharma', department: 'Data Science', tier: 'Platinum', points: 2105, topic: 'IOT' },
  { id: 4, name: 'Miguel Rodriguez', department: 'Computer Science', tier: 'Gold', points: 1950, topic: 'Robotics' }
];

const tierColors = {
  Platinum: '#B0C4DE',
  Diamond: '#8fd3f4',
  Gold: '#FFD700'
};

const neonBorder = {
  border: "2.5px solid #b486f6",
  boxShadow: "0 0 12px 2px #b486f6"
};

const getRankSymbol = idx => {
  const medals = ["🥇", "🥈", "🥉"];
  if (idx < 3) {
    return (
      <span style={{
        display: 'inline-block',
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: '#25135c',
        boxShadow: "0 0 6px #fff6, 0 0 18px #b486f6",
        color: '#ffe999',
        fontSize: 19,
        fontWeight: 700,
        lineHeight: '32px',
        textAlign: 'center',
        marginRight: 2,
      }}>{medals[idx]}</span>
    );
  } else {
    return (
      <span style={{
        display: 'inline-block',
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: '#25135c',
        color: "#b486f6",
        fontWeight: 700,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: '28px'
      }}>{idx+1}</span>
    );
  }
};

function LeaderboardAdmin() {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', department: '', tier: '', points: '', topic: '' });
  const [pointsUpdate, setPointsUpdate] = useState({ id: '', points: '' });

  // Add user
  const handleAddUser = e => {
    e.preventDefault();
    if (!newUser.name || !newUser.department || !newUser.tier || !newUser.points || !newUser.topic) return;
    setUsers([
      ...users,
      {
        ...newUser,
        id: Date.now(),
        points: parseInt(newUser.points)
      }
    ]);
    setNewUser({ name: '', department: '', tier: '', points: '', topic: '' });
  };

  // Remove user
  const removeUser = id => {
    setUsers(users.filter(u => u.id !== id));
  };

  // Add points
  const addPoints = e => {
    e.preventDefault();
    setUsers(users.map(user =>
      user.id === parseInt(pointsUpdate.id)
        ? { ...user, points: user.points + parseInt(pointsUpdate.points) }
        : user
    ));
    setPointsUpdate({ id: '', points: '' });
  };

  // For progress bar
  const maxPoints = Math.max(...users.map(u => u.points), 1);

  return (
    <div style={{
      background: '#18182B', // matches your image
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      padding: 40
    }}>
      <h1 style={{ color: '#b486f6', marginBottom: 20 }}>Admin Leaderboard Management</h1>

      {/* Add New User Box */}
      <div style={{ ...neonBorder, background: '#201544', padding: 20, borderRadius: 14, marginBottom: 32 }}>
        <h3 style={{ color: '#fff', marginBottom: 12 }}>Add New User</h3>
        <form onSubmit={handleAddUser} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input required placeholder="Name"
            value={newUser.name}
            onChange={e => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input required placeholder="Department"
            value={newUser.department}
            onChange={e => setNewUser({ ...newUser, department: e.target.value })}
          />
          <select required
            value={newUser.tier}
            onChange={e => setNewUser({ ...newUser, tier: e.target.value })}
          >
            <option value="">Tier</option>
            <option value="Platinum">Platinum</option>
            <option value="Diamond">Diamond</option>
            <option value="Gold">Gold</option>
          </select>
          <input required type="number" placeholder="Points"
            value={newUser.points}
            onChange={e => setNewUser({ ...newUser, points: e.target.value })}
          />
          <input required placeholder="Topic"
            value={newUser.topic}
            onChange={e => setNewUser({ ...newUser, topic: e.target.value })}
          />
          <button type="submit" style={{
            background: '#b486f6', color: '#fff',
            border: 'none', borderRadius: 6, padding: '8px 20px', fontWeight: 600
          }}>Add User</button>
        </form>
      </div>

      {/* Add Points Box */}
      <div style={{ ...neonBorder, background: '#201544', padding: 20, borderRadius: 14, marginBottom: 32 }}>
        <h3 style={{ color: '#fff', marginBottom: 12 }}>Add Points to User</h3>
        <form onSubmit={addPoints} style={{ display: 'flex', gap: 10 }}>
          <select required
            value={pointsUpdate.id}
            onChange={e => setPointsUpdate({ ...pointsUpdate, id: e.target.value })}
          >
            <option value="">Select User</option>
            {users.map(u => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
          <input required type="number" placeholder="Points to add"
            value={pointsUpdate.points}
            onChange={e => setPointsUpdate({ ...pointsUpdate, points: e.target.value })}
          />
          <button type="submit" style={{
            background: '#b486f6', color: '#fff',
            border: 'none', borderRadius: 6,
            padding: '8px 20px', fontWeight: 600
          }}>Add Points</button>
        </form>
      </div>

      {/* Leaderboard Table */}
      <div style={{ ...neonBorder, background: '#201544', padding: 20, borderRadius: 14 }}>
        <h3 style={{ color: '#fff', marginBottom: 12 }}>Leaderboard</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'none' }}>
          <thead style={{ color: '#b486f6' }}>
            <tr>
              <th style={{ textAlign: 'left', fontWeight: 700 }}>Rank</th>
              <th style={{ textAlign: 'left', fontWeight: 700 }}>Name</th>
              <th style={{ textAlign: 'left', fontWeight: 700 }}>Department</th>
              <th style={{ textAlign: 'left', fontWeight: 700 }}>Tier</th>
              <th style={{ textAlign: 'left', fontWeight: 700 }}>Points</th>
              <th style={{ textAlign: 'left', fontWeight: 700 }}>Topic</th>
              <th style={{ textAlign: 'left', fontWeight: 700 }}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {[...users]
              .sort((a, b) => b.points - a.points)
              .map((user, idx) => (
                <tr key={user.id}>
                  <td>{getRankSymbol(idx)}</td>
                  <td>{user.name}</td>
                  <td>{user.department}</td>
                  <td>
                    <span style={{
                      background: tierColors[user.tier] || '#fff',
                      color: '#181033',
                      padding: '3px 12px',
                      borderRadius: 7,
                      fontWeight: 600,
                      fontSize: 15
                    }}>{user.tier}</span>
                  </td>
                  <td>
                    <span style={{ fontWeight: 700 }}>{user.points}</span>
                    <div style={{
                      background: '#271d3d',
                      height: 9,
                      borderRadius: 7,
                      width: 120,
                      marginTop: 5,
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'inline-block',
                      marginLeft: 10,
                      verticalAlign: 'middle',
                      boxShadow: "0 0 9px #b486f6aa",
                    }}>
                      <div style={{
                          width: `${Math.max(8, Math.round(user.points / maxPoints * 100))}%`,
                          background: '#b486f6',
                          height: '100%',
                          borderRadius: '7px',
                          boxShadow: "0 0 9px #b486f6"
                        }}/>
                    </div>
                  </td>
                  <td>{user.topic}</td>
                  <td>
                    <button onClick={() => removeUser(user.id)}
                      style={{
                        background: '#ff3860',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 7,
                        padding: '6px 16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: "0 0 6px #ff386055"
                      }}>Remove</button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardAdmin;