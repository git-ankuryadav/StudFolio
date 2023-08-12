import React, { useState } from 'react';
import './achieve.css';

export const Achieve = () => {
  const [data, setData] = useState([
    {
      sr: 1,
      achievements: 'xyz',
      status: 'verified',
    },
  ]);

  const handleAddAchievement = () => {
    const newAchievement = {
      sr: data.length + 1,
      achievements: 'NEW ACHIEVEMENT', // Provide default value or an empty string
      status: 'VERIFIED OR NOT', // Provide default value or an empty string
    };

    setData([...data, newAchievement]);
  };

  const handleAchievementChange = (index, field, value) => {
    const updatedData = data.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });

    setData(updatedData);
  };

  return (
    <div className='achievement'>
      <h2 className='Mainhead1'>ACHIEVEMENTS</h2>
      <table>
        <thead>
          <tr>
            <th>SR. NO.</th>
            <th>ACHIEVEMENTS</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.sr}</td>
                <td>
                  <input
                    type='text'
                    value={item.achievements}
                    onChange={(e) =>
                      handleAchievementChange(index, 'achievements', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={item.status}
                    onChange={(e) =>
                      handleAchievementChange(index, 'status', e.target.value)
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className='addButton' onClick={handleAddAchievement}>Add Achievement</button>
    </div>
  );
};

export default Achieve;
