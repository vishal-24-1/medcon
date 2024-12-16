import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { scaleSqrt } from 'd3-scale';
const productRegionData = [
  {
    product: "Mispa CX4",
    region: "Tamil Nadu",
    revenue: "₹12.4M",
    units: 234,
    growth: "+15.2%",
  },
  {
    product: "MISPA HX 88",
    region: "Karnataka",
    revenue: "₹10.2M",
    units: 210,
    growth: "+12.8%",
  },
  {
    product: "MISPA 160",
    region: "Andhra Pradesh",
    revenue: "₹8.7M",
    units: 190,
    growth: "+10.5%",
  },
  {
    product: "MISPA LUME",
    region: "Tamil Nadu",
    revenue: "₹9.3M",
    units: 205,
    growth: "+13.2%",
  },
  {
    product: "MISPA URISKAN 100 PLUS",
    region: "Karnataka",
    revenue: "₹7.5M",
    units: 180,
    growth: "+9.8%",
  },
];

const styles = {
  th: {
    padding: "0.75rem",
    textAlign: "left",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#6b7280",
    borderBottom: "1px solid #e5e7eb",
  },
  td: {
    padding: "0.75rem",
    fontSize: "0.875rem",
    color: "#374151",
    borderBottom: "1px solid #e5e7eb",
  },
  rowEven: { backgroundColor: "#ffffff" },
  rowOdd: { backgroundColor: "#f9fafb" },
};
// Example city performance chart options (unchanged from previous code)
const cityPerformanceOptions = {
  chart: { type: 'bar', height: 320, toolbar: { show: false } },
  series: [{ name: 'Revenue', data: [44, 55, 41, 67, 22, 43] }],
  xaxis: { categories: ['Chennai', 'Bangalore', 'Hyderabad', 'Coimbatore', 'Madurai', 'Vizag'] },
  colors: ['#0ea5e9']
};

// Example customer distribution chart options (unchanged)
const customerDistOptions = {
  chart: { type: 'donut', height: 320 },
  series: [44, 56],
  labels: ['New Customers', 'Returning Customers'],
  colors: ['#22c55e', '#0ea5e9']
};

// Regional data (example):
// Using approximate revenue from the sidebar: Tamil Nadu (45.2M), Karnataka (38.7M), Andhra Pradesh (32.1M)
// Coordinates are approximate lat/lng for each state's major city (e.g. Chennai for Tamil Nadu)
const regionsData = [
  { name: "Tamil Nadu", coordinates: [80.2707, 13.0827], revenue: 45.2 },
  { name: "Karnataka", coordinates: [77.5946, 12.9716], revenue: 38.7 },
  { name: "Andhra Pradesh", coordinates: [78.4867, 17.3850], revenue: 32.1 },
];

// Create a scale for bubble size based on revenue
const maxRevenue = Math.max(...regionsData.map(d => d.revenue));
const sizeScale = scaleSqrt().domain([0, maxRevenue]).range([0, 20]);
const geoUrl = "/data/custom.geo";
const Regions = () => {
  return (
    <section id="regions" style={{ padding: '1.5rem', display: 'block' }}>
      {/* Filters */}
      <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <select style={{ border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <option>All States</option>
            <option>Tamil Nadu</option>
            <option>Andhra Pradesh</option>
            <option>Karnataka</option>
          </select>
          <select style={{ border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <option>All Cities</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </select>
          <select style={{ border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <option>All Products</option>
            <option>Clinical Chemistry</option>
            <option>Hematology</option>
            <option>Protein Analyzers</option>
          </select>
          <button style={{
            marginLeft: 'auto', padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: '#ffffff',
            borderRadius: '0.5rem', fontSize: '0.875rem', cursor: 'pointer'
          }}>
            <i className="fas fa-download" style={{ marginRight: '0.5rem' }}></i>Export Report
          </button>
        </div>
      </div>

      {/* Regional Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
        {/* Map Visualization */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Regional Sales Distribution</h3>
          <div style={{ height: '400px', backgroundColor: '#f3f4f6', position: 'relative' }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [78.9629, 23.5937], scale: 1000 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Geographies geography="/data/india.topo.json">
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: { fill: "#E5E7EB", stroke: "#FFFFFF" },
                        hover: { fill: "#E5E7EB" },
                        pressed: { fill: "#E5E7EB" }
                      }}
                    />
                  ))
                }
              </Geographies>

              {regionsData.map((region, i) => {
                const [lng, lat] = region.coordinates;
                return (
                  <Marker key={i} coordinates={[lng, lat]}>
                    <circle
                      r={sizeScale(region.revenue)}
                      fill="#3b82f6"
                      fillOpacity="0.7"
                      stroke="#1e40af"
                      strokeWidth={1}
                    />
                    <text
                      textAnchor="middle"
                      y={-sizeScale(region.revenue)-4}
                      style={{ fill: "#111827", fontSize: "0.75rem", fontWeight: "600" }}
                    >
                      {region.name}
                    </text>
                  </Marker>
                )
              })}
            </ComposableMap>
          </div>
        </div>

        {/* Top Regions */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Top Performing Regions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* We can reuse the same data from regionsData */}
            {regionsData.map((region, index) => {
              // Compute percentage bar: assume maxRevenue is the largest
              const percentage = (region.revenue / maxRevenue) * 100;
              return (
                <div key={region.name} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: '#eff6ff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <span style={{ color: '#3b82f6', fontWeight: '600' }}>{index + 1}</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontWeight: '500' }}>{region.name}</p>
                      <p style={{ fontSize: '0.875rem', color: '#16a34a' }}>
                        ₹{region.revenue.toFixed(1)}M
                      </p>
                    </div>
                    <div style={{ marginTop: '0.25rem', width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '0.5rem' }}>
                      <div style={{
                        backgroundColor: '#3b82f6', height: '0.5rem', borderRadius: '9999px',
                        width: `${percentage}%`
                      }}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* City-wise Analysis */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {/* City Performance */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Top Cities by Revenue</h3>
          <div style={{ height: '20rem' }}>
            <ReactApexChart options={cityPerformanceOptions} series={cityPerformanceOptions.series} type="bar" height={320} />
          </div>
        </div>

        {/* Customer Distribution */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Customer Distribution</h3>
          <div style={{ height: '20rem' }}>
            <ReactApexChart options={customerDistOptions} series={customerDistOptions.series} type="donut" height={320} />
          </div>
        </div>
      </div>

      {/* Product Performance by Region */}
      <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', marginTop: '1.5rem' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Product Performance by Region</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ minWidth: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: "#f9fafb" }}>
              <tr>
                <th style={styles.th}>PRODUCT</th>
                <th style={styles.th}>REGION</th>
                <th style={styles.th}>REVENUE</th>
                <th style={styles.th}>UNITS</th>
                <th style={styles.th}>GROWTH</th>
              </tr>
            </thead>
            <tbody>
              {productRegionData.map((item, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td style={styles.td}>{item.product}</td>
                  <td style={styles.td}>{item.region}</td>
                  <td style={styles.td}>{item.revenue}</td>
                  <td style={styles.td}>{item.units}</td>
                  <td style={{ ...styles.td, color: "#22c55e", fontWeight: "600" }}>{item.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Regions;
