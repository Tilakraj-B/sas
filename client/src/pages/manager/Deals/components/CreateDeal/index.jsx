import React from 'react';
import styles from './CreateDeal.module.css'; // Import CSS module

const CreateDeal = () => {
  const dealHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/deals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Buy 1 get 1 free',
          applicableItems: ['1', '2'],
          type: 'fixed',
          value: 100,
          startTimestamp: new Date(),
          endTimestamp: new Date()
        })
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={dealHandler} className={styles.form}>
        <label className={styles.label}>Deal Name</label>
        <input type="text" className={styles.input} />
        <label className={styles.label}>Applicable Items</label>
        <input type="text" className={styles.input} />
        <label className={styles.label}>Deal Type</label>
        <select className={styles.select}>
          <option>Fixed</option>
          <option>Percentage</option>
        </select>
        <label className={styles.label}>Value</label>
        <input type="number" className={styles.input} />
        <label className={styles.label}>Start Date</label>
        <input type="date" className={styles.input} />
        <label className={styles.label}>End Date</label>
        <input type="date" className={styles.input} />
        <button type="submit" className={styles.button}>Create Deal</button>
      </form>
    </div>
  );
};

export default CreateDeal;
