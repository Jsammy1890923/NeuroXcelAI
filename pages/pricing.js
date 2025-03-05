import { fetchPricingData } from '../api/requests';

export async function getStaticProps() {
  const data = await fetchPricingData();
  return { props: { pricing: data } };
}

export default function Pricing({ pricing }) {
  return (
    <div>
      <h1>Pricing Plans</h1>
      <ul>
        {pricing.map((plan) => (
          <li key={plan.id}>
            <h2>{plan.name}</h2>
            <p>{plan.price} per month</p>
            <p>{plan.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
