import React from 'react';
import ReactApexChart from 'react-apexcharts';
const customerLoyaltyData = [
  {
    product: "Mispa CX4",
    loyalCustomers: 824,
    repeatRate: "76%",
    frequency: "4.2 months",
    retentionRate: "89%",
  },
  {
    product: "MISPA HX 88",
    loyalCustomers: 654,
    repeatRate: "72%",
    frequency: "4.8 months",
    retentionRate: "85%",
  },
  {
    product: "MISPA 160",
    loyalCustomers: 712,
    repeatRate: "74%",
    frequency: "4.6 months",
    retentionRate: "87%",
  },
  {
    product: "MISPA LUME",
    loyalCustomers: 580,
    repeatRate: "70%",
    frequency: "5.1 months",
    retentionRate: "82%",
  },
  {
    product: "MISPA URISKAN 100 PLUS",
    loyalCustomers: 610,
    repeatRate: "71%",
    frequency: "5.0 months",
    retentionRate: "84%",
  },
];
const Customers = () => {
  const segmentationOptions = {
    chart: { type: 'donut', height: 320 },
    series: [44, 55, 13, 33],
    labels: ['New', 'Loyal', 'At Risk', 'Lost'],
    colors: ['#0ea5e9', '#22c55e', '#eab308', '#ef4444']
  };

  const revenueByCustomerOptions = {
    chart: { type: 'bar', height: 320, stacked: true },
    series: [
      { name: 'New Customers', data: [44, 55, 57, 56, 61, 58] },
      { name: 'Returning Customers', data: [76, 85, 101, 98, 87, 105] }
    ],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    colors: ['#0ea5e9', '#22c55e']
  };

  const retentionTrendOptions = {
    chart: { type: 'line', height: 320 },
    series: [{ name: 'Retention Rate', data: [88, 86, 87, 84, 86, 85] }],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    colors: ['#0ea5e9'],
    stroke: { curve: 'smooth' }
  };
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

  return (
    <section id="customers" style={{padding:'1.5rem', display:'block'}}>
      {/* Filters */}
      <div style={{backgroundColor:'#ffffff', padding:'1rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
        <div style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
          <select style={{border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Last Year</option>
            <option>Custom Range</option>
          </select>
          <select style={{border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
            <option>All Products</option>
            <option>Clinical Chemistry</option>
            <option>Hematology</option>
            <option>Protein Analyzers</option>
          </select>
          <select style={{border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
            <option>All Regions</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Andhra Pradesh</option>
          </select>
        </div>
      </div>

      {/* Customer Overview Cards */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(15rem,1fr))', gap:'1.5rem', marginTop:'1.5rem'}}>
        <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div>
              <p style={{fontSize:'0.875rem', color:'#4b5563'}}>Total Customers</p>
              <h3 style={{fontSize:'1.5rem', fontWeight:'700', marginTop:'0.25rem'}}>2,847</h3>
              <span style={{fontSize:'0.875rem', color:'#16a34a', display:'flex', alignItems:'center', marginTop:'0.25rem'}}>
                <i className="fas fa-arrow-up" style={{marginRight:'0.25rem'}}></i>+124 this month
              </span>
            </div>
            <div style={{padding:'0.75rem', backgroundColor:'#eff6ff', borderRadius:'0.5rem'}}>
              <i className="fas fa-users" style={{color:'#3b82f6'}}></i>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div>
              <p style={{fontSize:'0.875rem', color:'#4b5563'}}>Customer Retention</p>
              <h3 style={{fontSize:'1.5rem', fontWeight:'700', marginTop:'0.25rem'}}>84.6%</h3>
              <span style={{fontSize:'0.875rem', color:'#dc2626', display:'flex', alignItems:'center', marginTop:'0.25rem'}}>
                <i className="fas fa-arrow-down" style={{marginRight:'0.25rem'}}></i>-2.1% vs last month
              </span>
            </div>
            <div style={{padding:'0.75rem', backgroundColor:'#f0fdf4', borderRadius:'0.5rem'}}>
              <i className="fas fa-user-check" style={{color:'#22c55e'}}></i>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div>
              <p style={{fontSize:'0.875rem', color:'#4b5563'}}>Avg. Order Value</p>
              <h3 style={{fontSize:'1.5rem', fontWeight:'700', marginTop:'0.25rem'}}>₹86.5K</h3>
              <span style={{fontSize:'0.875rem', color:'#16a34a', display:'flex', alignItems:'center', marginTop:'0.25rem'}}>
                <i className="fas fa-arrow-up" style={{marginRight:'0.25rem'}}></i>+5.4% vs last month
              </span>
            </div>
            <div style={{padding:'0.75rem', backgroundColor:'#faf5ff', borderRadius:'0.5rem'}}>
              <i className="fas fa-shopping-cart" style={{color:'#a855f7'}}></i>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div>
              <p style={{fontSize:'0.875rem', color:'#4b5563'}}>Customer Lifetime Value</p>
              <h3 style={{fontSize:'1.5rem', fontWeight:'700', marginTop:'0.25rem'}}>₹342K</h3>
              <span style={{fontSize:'0.875rem', color:'#16a34a', display:'flex', alignItems:'center', marginTop:'0.25rem'}}>
                <i className="fas fa-arrow-up" style={{marginRight:'0.25rem'}}></i>+8.2% vs last month
              </span>
            </div>
            <div style={{padding:'0.75rem', backgroundColor:'#fefce8', borderRadius:'0.5rem'}}>
              <i className="fas fa-gem" style={{color:'#eab308'}}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Segmentation Analysis */}
      <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'1.5rem', marginTop:'1.5rem'}}>
        {/* On large screens: 2 columns */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:'1.5rem'}}>
          <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
            <h3 style={{fontWeight:'600', marginBottom:'1rem'}}>Customer Segmentation</h3>
            <div style={{height:'20rem'}}>
              <ReactApexChart options={segmentationOptions} series={segmentationOptions.series} type="donut" height={320}/>
            </div>
          </div>

          <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
            <h3 style={{fontWeight:'600', marginBottom:'1rem'}}>Revenue by Customer Type</h3>
            <div style={{height:'20rem'}}>
              <ReactApexChart options={revenueByCustomerOptions} series={revenueByCustomerOptions.series} type="bar" height={320}/>
            </div>
          </div>
        </div>
      </div>

      {/* Retention Analysis */}
      <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb', marginTop:'1.5rem'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
          <h3 style={{fontWeight:'600'}}>Retention Trends</h3>
          <select style={{border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>YTD</option>
          </select>
        </div>
        <div style={{height:'20rem'}}>
          <ReactApexChart options={retentionTrendOptions} series={retentionTrendOptions.series} type="line" height={320}/>
        </div>
      </div>

      {/* Customer Loyalty Matrix */}
      <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb', marginTop:'1.5rem'}}>
        <h3 style={{fontWeight:'600', marginBottom:'1rem'}}>Customer Loyalty by Product</h3>
        <div style={{overflowX:'auto'}}>
          <table style={{minWidth:'100%', borderCollapse:'collapse'}}>
          <thead style={{ backgroundColor: "#f9fafb" }}>
              <tr>
                <th style={styles.th}>PRODUCT</th>
                <th style={styles.th}>LOYAL CUSTOMERS</th>
                <th style={styles.th}>REPEAT PURCHASE RATE</th>
                <th style={styles.th}>AVG. PURCHASE FREQUENCY</th>
                <th style={styles.th}>RETENTION RATE</th>
              </tr>
            </thead>
            <tbody>
              {customerLoyaltyData.map((item, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td style={styles.td}>{item.product}</td>
                  <td style={styles.td}>{item.loyalCustomers}</td>
                  <td style={styles.td}>{item.repeatRate}</td>
                  <td style={styles.td}>{item.frequency}</td>
                  <td style={{ ...styles.td, color: "#22c55e", fontWeight: "600" }}>{item.retentionRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Customers;
