import React, { createContext, useContext, useState } from 'react';

export const AllDealContext = createContext();

export const useDeals = () => useContext(AllDealContext);

const allDeals = [
  {
    _id: '1',
    name: 'Buy 1 get 1 free',
    applicableItems: ['1', '2'],
    type: 'fixed',
    value: 100,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: '2',
    name: '10% off on 2 items',
    applicableItems: ['1', '2'],
    type: 'percentage',
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: '3',
    name: '15% off on 3 items',
    applicableItems: ['1', '2'],
    type: 'percentage',
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: '4',
    name: '100 off on 2 items',
    applicableItems: ['1', '2'],
    type: 'fixed',
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: '2',
    name: '10% off on 2 items',
    applicableItems: ['1', '2'],
    type: 'percentage',
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: '2',
    name: '10% off on 2 items',
    applicableItems: ['1', '2'],
    type: 'percentage',
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: '2',
    name: '10% off on 2 items',
    applicableItems: ['1', '2'],
    type: 'percentage',
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: '2',
    name: '10% off on 2 items',
    applicableItems: ['1', '2'],
    type: 'percentage',
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
];

const AllDealProvider = ({ children }) => {
  const [deals, setDeals] = useState(allDeals);

  return (
    <AllDealContext.Provider value={{ deals,setDeals}}>
      {children}
    </AllDealContext.Provider>
  );
};

export default AllDealProvider;
