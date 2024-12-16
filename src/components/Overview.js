import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Overview = () => {
  const monthlySalesOptions = {
    chart: { type: 'area', height: 320, toolbar: { show: false } },
    series: [{ name: 'Sales', data: [30, 40, 35, 50, 49, 60] }],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    colors: ['#0ea5e9'],
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.2, stops: [0, 100] }
    }
  };

  const topProductsOptions = {
    chart: { type: 'bar', height: 320, toolbar: { show: false } },
    series: [{ name: 'Revenue', data: [44, 55, 41, 67, 22] }],
    xaxis: { categories: ['Mispa CX4', 'TBA-2000FR', 'Mispa i3', 'Mispa HX 88', 'Mispa Nano'] },
    colors: ['#22c55e'],
    plotOptions: { bar: { borderRadius: 4, horizontal: true } }
  };

  return (
    <section id="overview_dashboard" style={{ padding: '1.5rem', display: 'block' }}>
      {/* KPI Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(15rem,1fr))',
        gap: '1.5rem'
      }}>
        {/* Total Revenue */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Total Revenue (YTD)</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>₹245.8M</h3>
              <span style={{ fontSize: '0.875rem', color: '#16a34a', display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                <i className="fas fa-arrow-up" style={{ marginRight: '0.25rem' }}></i>12.5%
              </span>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
              <i className="fas fa-chart-line" style={{ color: '#3b82f6' }}></i>
            </div>
          </div>
        </div>

        {/* Units Sold */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Total Units Sold</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>1,842</h3>
              <span style={{ fontSize: '0.875rem', color: '#16a34a', display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                <i className="fas fa-arrow-up" style={{ marginRight: '0.25rem' }}></i>8.2%
              </span>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem' }}>
              <i className="fas fa-box" style={{ color: '#22c55e' }}></i>
            </div>
          </div>
        </div>

        {/* Customer Retention */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Retention Rate</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>84.6%</h3>
              <span style={{ fontSize: '0.875rem', color: '#dc2626', display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                <i className="fas fa-arrow-down" style={{ marginRight: '0.25rem' }}></i>2.1%
              </span>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#faf5ff', borderRadius: '0.5rem' }}>
              <i className="fas fa-users" style={{ color: '#a855f7' }}></i>
            </div>
          </div>
        </div>

        {/* Growth Rate */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Revenue Growth</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>15.2%</h3>
              <span style={{ fontSize: '0.875rem', color: '#16a34a', display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                <i className="fas fa-arrow-up" style={{ marginRight: '0.25rem' }}></i>5.3%
              </span>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#fefce8', borderRadius: '0.5rem' }}>
              <i className="fas fa-chart-bar" style={{ color: '#eab308' }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ marginTop: '1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem'
        }}>
          {/* Monthly Sales Trend */}
          <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontWeight: '600' }}>Monthly Sales Trend</h3>
              <select style={{ fontSize: '0.875rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.25rem 0.5rem' }}>
                <option>Last 6 Months</option>
                <option>Last 12 Months</option>
                <option>YTD</option>
              </select>
            </div>
            <div style={{ height: '20rem' }}>
              <ReactApexChart options={monthlySalesOptions} series={monthlySalesOptions.series} type="area" height={320} />
            </div>
          </div>

          {/* Top Products */}
          <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontWeight: '600' }}>Top Products</h3>
              <select style={{ fontSize: '0.875rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.25rem 0.5rem' }}>
                <option>By Revenue</option>
                <option>By Units</option>
              </select>
            </div>
            <div style={{ height: '20rem' }}>
              <ReactApexChart options={topProductsOptions} series={topProductsOptions.series} type="bar" height={320} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.5rem', marginTop: '1.5rem' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: '600' }}>Recent Activity</h3>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-shopping-cart" style={{ color: '#3b82f6', fontSize: '0.75rem' }}></i>
              </div>
              <div style={{ marginLeft: '1rem' }}>
                <p style={{ fontSize: '0.875rem' }}>New order <span style={{ fontWeight: '600' }}>#12345</span> from Chennai</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>2 hours ago</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-user-plus" style={{ color: '#22c55e', fontSize: '0.75rem' }}></i>
              </div>
              <div style={{ marginLeft: '1rem' }}>
                <p style={{ fontSize: '0.875rem' }}>New customer registration from Bangalore</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>4 hours ago</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: '#fefce8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-star" style={{ color: '#eab308', fontSize: '0.75rem' }}></i>
              </div>
              <div style={{ marginLeft: '1rem' }}>
                <p style={{ fontSize: '0.875rem' }}>New product review for Mispa CX4</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
