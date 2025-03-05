import { useEffect, useState } from 'react';
import { fetchPricing } from '../api/requests';

export default function Pricing() {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    async function loadPricing() {
      const data = await fetchPricing();
      setPricing(data);
    }
    loadPricing();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      {pricing.length > 0 ? (
        pricing.map((plan) => (
          <div key={plan.id} className="border p-4 mb-4 rounded-lg">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p>{plan.price}</p>
            <p>{plan.description}</p>
          </div>
        ))
      ) : (
        <p>Loading pricing details...</p>
      )}
    </div>
  );
}

