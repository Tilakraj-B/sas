import React from 'react';
import { useDeals } from '../../context/AllDealContext';
import { AiOutlineDelete } from 'react-icons/ai'; // Import delete icon from React Icons
import styles from './AllDeal.module.css'; // Import CSS module for styling

const AllDeal = () => {
  const { deals, setDeals } = useDeals(); // Get deals and setDeals from context

  const handleDeleteDeal = async (index) => {
    try {
      const response = await fetch(`http://localhost:5000/api/deals/${deals[index]._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedDeals = [...deals];
        updatedDeals.splice(index, 1);
        setDeals(updatedDeals);
      } else {
        console.error('Failed to delete deal');
      }
    } catch (error) {
      console.error('Error deleting deal:', error);
    }
  };

  const formatValue = (value, type) => {
    if (type === 'Percentage') {
      return `${value}% OFF`;
    } else {
      return `${value}$ OFF`;
    }
  };

  return (
    <div>
      <div >
        {deals.map((deal, index) => (
          <div  key={index}>
            <AiOutlineDelete onClick={() => handleDeleteDeal(index)} />
            <div >
              <h3>{deal.name}</h3>
              <p>{formatValue(deal.value, deal.type)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDeal;
