import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Chart } from 'react-google-charts';

const productRegionData = [
  { product: "Mispa CX4", region: "Tamil Nadu", revenue: "₹12.4M", units: 234, growth: "+15.2%" },
  { product: "MISPA HX 88", region: "Karnataka", revenue: "₹10.2M", units: 210, growth: "+12.8%" },
  { product: "MISPA 160", region: "Andhra Pradesh", revenue: "₹8.7M", units: 190, growth: "+10.5%" },
  { product: "MISPA LUME", region: "Tamil Nadu", revenue: "₹9.3M", units: 205, growth: "+13.2%" },
  { product: "MISPA URISKAN 100 PLUS", region: "Karnataka", revenue: "₹7.5M", units: 180, growth: "+9.8%" },
];

const regionsData = [
  { name: "Tamil Nadu", revenue: 45.2 },
  { name: "Karnataka", revenue: 38.7 },
  { name: "Andhra Pradesh", revenue: 32.1 },
];

const cityPerformanceOptions = {
  chart: { type: 'bar', height: 320, toolbar: { show: false } },
  series: [{ name: 'Revenue', data: [44, 55, 41, 67, 22, 43] }],
  xaxis: { categories: ['Chennai', 'Bangalore', 'Hyderabad', 'Coimbatore', 'Madurai', 'Vizag'] },
  colors: ['#0ea5e9']
};

const customerDistOptions = {
  chart: { type: 'donut', height: 320 },
  series: [44, 56],
  labels: ['New Customers', 'Returning Customers'],
  colors: ['#22c55e', '#0ea5e9']
};

// Google Geo Chart Data
const geoChartData = [
  ['State', 'Revenue (in Millions)'],
  ['Tamil Nadu', 45.2],
  ['Karnataka', 38.7],
  ['Andhra Pradesh', 32.1],
];

const geoChartOptions = {
  region: 'IN', // Focus on India
  resolution: 'provinces', // Show state-level granularity
  colorAxis: { colors: ['#eff6ff', '#3b82f6'] },
  backgroundColor: '#f3f4f6',
  datalessRegionColor: '#e5e7eb',
};

const Regions = () => {
  return (
    <section id="regions" style={{ padding: '1.5rem', display: 'block' }}>
      {/* Filters */}
      <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <select style={{ border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.5rem 1rem' }}>
            <option>All States</option>
            <option>Tamil Nadu</option>
            <option>Andhra Pradesh</option>
            <option>Karnataka</option>
          </select>
          <button style={{
            marginLeft: 'auto', padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: '#ffffff',
            borderRadius: '0.5rem', fontSize: '0.875rem', cursor: 'pointer'
          }}>
            Export Report
          </button>
        </div>
      </div>

      {/* Regional Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
        {/* Map Visualization with Google Geo Charts */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Regional Sales Distribution</h3>
          <Chart
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={geoChartData}
            options={geoChartOptions}
          />
        </div>

        {/* Top Performing Regions */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Top Performing Regions</h3>
          {regionsData.map((region, index) => {
            const percentage = (region.revenue / 45.2) * 100; // Calculate bar width
            return (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <p style={{ marginRight: '1rem', fontWeight: '500' }}>{region.name}</p>
                <div style={{ flex: 1, backgroundColor: '#e5e7eb', height: '0.5rem', borderRadius: '9999px' }}>
                  <div style={{
                    backgroundColor: '#3b82f6', height: '0.5rem', borderRadius: '9999px',
                    width: `${percentage}%`
                  }}></div>
                </div>
                <span style={{ marginLeft: '1rem', fontWeight: '600', color: '#16a34a' }}>
                  ₹{region.revenue}M
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* City-wise Analysis */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {/* City Performance */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Top Cities by Revenue</h3>
          <ReactApexChart options={cityPerformanceOptions} series={cityPerformanceOptions.series} type="bar" height={320} />
        </div>

        {/* Customer Distribution */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Customer Distribution</h3>
          <ReactApexChart options={customerDistOptions} series={customerDistOptions.series} type="donut" height={320} />
        </div>
      </div>
    </section>
  );
};

export default Regions;
