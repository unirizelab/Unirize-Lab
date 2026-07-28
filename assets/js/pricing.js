// Unirize Lab - Dynamic Pricing & Calculator
const hostingPlans = [
  { name: "Starter", ram: "2GB", nvme: "15GB", price: "₹69", popular: false },
  { name: "Basic", ram: "4GB", nvme: "30GB", price: "₹129", popular: false },
  { name: "Standard", ram: "6GB", nvme: "45GB", price: "₹199", popular: false },
  { name: "Premium", ram: "8GB", nvme: "60GB", price: "₹279", popular: true },
  { name: "Pro", ram: "12GB", nvme: "90GB", price: "₹449", popular: false },
  { name: "Ultimate", ram: "16GB", nvme: "120GB", price: "₹649", popular: false }
];

function renderPlans() {
  const container = document.getElementById('plans-container');
  if (!container) return;
  
  container.innerHTML = hostingPlans.map(plan => `
    <div class="glass-card plan-card ${plan.popular ? 'popular' : ''}">
      ${plan.popular ? '<div class="plan-badge">MOST POPULAR</div>' : ''}
      <div class="plan-header">
        <h3>${plan.name}</h3>
        <div class="plan-price">${plan.price}<span>/month</span></div>
      </div>
      <ul class="plan-features">
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <strong>${plan.ram}</strong> DDR4 RAM
        </li>
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <strong>${plan.nvme}</strong> Enterprise NVMe
        </li>
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Intel Xeon E-2386G CPU
        </li>
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Unmetered Bandwidth
        </li>
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Instant Deployment
        </li>
      </ul>
      <a href="https://discord.gg/WWbVvfJ5Ru" target="_blank" rel="noopener noreferrer" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}" style="width:100%;">
        Order via Discord
      </a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderPlans);
