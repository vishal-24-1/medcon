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
  const insights = [
    {
      title: "AI Revenue Optimization",
      items: [
        {
          heading: "Revenue Growth Opportunities",
          description:
            "Identify $2.5M untapped revenue in premium diagnostic devices across Tier 2 cities.",
        },
        {
          heading: "Price Optimization",
          description:
            "Discover dynamic pricing strategies to boost revenue by 12%.",
        },
        {
          heading: "Product Performance Insights",
          description:
            "Pinpoint underperforming products to reallocate marketing budgets effectively.",
        },
      ],
      bgColor: "#f0fdf4",
      iconColor: "#22c55e",
      iconClass: "fas fa-chart-line",
    },
    {
      title: "AI Sales and Product Insights",
      items: [
        {
          heading: "Top Product Trends",
          description:
            "Mispa CX4 leads sales with 28% revenue share; focus marketing efforts.",
        },
        {
          heading: "Demand Surge Prediction",
          description:
            "15% increase in demand for portable devices expected in Q4.",
        },
        {
          heading: "Market Expansion Opportunities",
          description: "Explore a 10% growth potential in emerging APAC regions.",
        },
      ],
      bgColor: "#eff6ff",
      iconColor: "#3b82f6",
      iconClass: "fas fa-box",
    },
  ];
  const kpiData = [
    {
      title: 'Total Revenue (YTD)',
      value: '₹245.8M',
      trend: 12.5,
      positive: true,
      bgColor: '#eff6ff',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Total Units Sold',
      value: '1,842',
      trend: 8.2,
      positive: true,
      bgColor: '#f0fdf4',
      icon: 'fas fa-box',
    },
    {
      title: 'Retention Rate',
      value: '84.6%',
      trend: 2.1,
      positive: false,
      bgColor: '#faf5ff',
      icon: 'fas fa-users',
    },
    {
      title: 'Revenue Growth',
      value: '15.2%',
      trend: 5.3,
      positive: true,
      bgColor: '#fefce8',
      icon: 'fas fa-chart-bar',
    },
  ];
  // Sales Revenue Chart Data
  const salesRevenueData = {
    chart: {
      type: "donut",
      height: 350,
    },
    series: [24.9, 26.6, 26.2, 22.3], // Percentages for Q1, Q2, Q3, Q4
    labels: ["Q1", "Q2", "Q3", "Q4"],
    colors: ["#007bff", "#00bfff", "#87ceeb", "#add8e6"],
    dataLabels: {
      enabled: true,
      formatter: (val) => `₹${val.toFixed(1)}%`,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    title: {
      text: "Sales Revenue",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };
  const revenueGoal = {
    currentRevenue: 15059143,
    goalRevenue: 21082800,
  };

  // Monthly Recurring Revenue (MRR) Chart Data
  const monthlyRevenueOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
      },
    },
    series: [
      {
        name: "MRR",
        data: [250050, 270200, 291000, 320500, 353800, 408900],
      },
    ],
    xaxis: {
      categories: ["Nov 2023", "Jan 2024", "Mar 2024", "May 2024", "Jul 2024", "Sep 2024"],
      title: {
        text: "Time Period",
      },
    },
    yaxis: {
      title: {
        text: "Revenue (₹)",
      },
      labels: {
        formatter: (val) => `₹${val.toLocaleString()}`,
      },
    },
    markers: {
      size: 5,
      colors: ["#007bff"],
    },
    title: {
      text: "Monthly Recurring Revenue",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
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
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Compared to last month</p>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
              <i className="fas fa-chart-line" style={{ color: '#3b82f6' }}></i>
            </div>
          </div>
        </div>

        {/* Total Units Sold */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Total Units Sold</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>1,842</h3>
              <span style={{ fontSize: '0.875rem', color: '#16a34a', display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                <i className="fas fa-arrow-up" style={{ marginRight: '0.25rem' }}></i>8.2%
              </span>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Compared to last month</p>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem' }}>
              <i className="fas fa-box" style={{ color: '#22c55e' }}></i>
            </div>
          </div>
        </div>

        {/* Retention Rate */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Retention Rate</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>84.6%</h3>
              <span style={{ fontSize: '0.875rem', color: '#dc2626', display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                <i className="fas fa-arrow-down" style={{ marginRight: '0.25rem' }}></i>2.1%
              </span>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Compared to last month</p>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#faf5ff', borderRadius: '0.5rem' }}>
              <i className="fas fa-users" style={{ color: '#a855f7' }}></i>
            </div>
          </div>
        </div>

        {/* Revenue Growth */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Revenue Growth</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>15.2%</h3>
              <span style={{ fontSize: '0.875rem', color: '#16a34a', display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                <i className="fas fa-arrow-up" style={{ marginRight: '0.25rem' }}></i>5.3%
              </span>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Compared to last month</p>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#fefce8', borderRadius: '0.5rem' }}>
              <i className="fas fa-chart-bar" style={{ color: '#eab308' }}></i>
            </div>
          </div>
        </div>
      </div>
      
      <div
        style={{
          marginTop: '1.5rem',
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
      >
      {/* Sales Revenue Section */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
        }}
      >
        <h3
          style={{
            fontWeight: '600',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Sales Revenue
        </h3>
        {/* Progress bar */}
        <div
          style={{
            marginBottom: '1rem',
            backgroundColor: '#E0E0E0',
            height: '20px',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundColor: '#4CAF50',
              height: '100%',
              borderRadius: '10px',
              width: `${(revenueGoal.currentRevenue / revenueGoal.goalRevenue) * 100}%`,
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: `${(revenueGoal.currentRevenue / revenueGoal.goalRevenue) * 100}%`,
              transform: 'translate(-50%, -50%)',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            {`₹${revenueGoal.currentRevenue.toLocaleString()}`}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#757575',
            marginBottom: '1rem',
          }}
        >
          <span>₹0</span>
          <span>{`₹${revenueGoal.goalRevenue.toLocaleString()}`}</span>
        </div>

        {/* Donut Chart */}
        <ReactApexChart
          options={{
            chart: salesRevenueData.chart,
            labels: salesRevenueData.labels,
            colors: salesRevenueData.colors,
          }}
          series={salesRevenueData.series}
          type="donut"
          height={320}
        />
        </div>
        
        {/* Monthly Recurring Revenue Chart */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <ReactApexChart
            options={monthlyRevenueOptions}
            series={monthlyRevenueOptions.series}
            type="area"
            height={350}
          />

          {/* Below the Line Chart */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1rem",
              backgroundColor: "#d8d8d8",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h4 style={{ margin: 0 }}>₹408.9k</h4>
              <p style={{ margin: 0 }}>Current MRR</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                <h4 style={{ margin: 0 }}>₹372.0k</h4>
                <h4 style={{ margin: 0, color: "#28a745" }}>+9.94%</h4>
              </div>
              <p style={{ margin: 0 }}>30 days ago</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                <h4 style={{ margin: 0 }}>₹353.8k</h4>
                <h4 style={{ margin: 0, color: "#28a745" }}>+15.6%</h4>
              </div>
              <p style={{ margin: 0 }}>60 days ago</p>
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
        {/* AI Insights Section */}
      <div style={{ marginTop: '2rem' }}>
        {insights.map((insight, index) => (
          <div
            key={index}
            style={{
              backgroundColor: insight.bgColor,
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#374151' }}>
              <i
                className={insight.iconClass}
                style={{
                  marginRight: '0.5rem',
                  fontSize: '1.5rem',
                  color: insight.iconColor,
                }}
              ></i>
              {insight.title}
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {insight.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                    {item.heading}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
export default Overview;
