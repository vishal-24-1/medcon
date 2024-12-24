import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

// Product data for different tabs


const Products = () => {
  const [activeTab, setActiveTab] = useState("clinical");
  const productData = {
    clinical: {
      name: "Mispa CX4",
      category: "Clinical Chemistry",
      revenue: "₹12.4M",
      units: 234,
      growth: "+15.2%",
      trend: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
    hematology: {
      name: "MISPA HX 88",
      category: "Hematology Analyzers",
      revenue: "₹9.8M",
      units: 185,
      growth: "+10.8%",
      trend: [20, 50, 38, 72, 56, 48, 67, 43, 29, 31, 45],
    },
    immunology: {
      name: "MISPA 160",
      category: "Immunology Analyzers",
      revenue: "₹11.2M",
      units: 210,
      growth: "+12.5%",
      trend: [15, 42, 35, 61, 53, 40, 56, 48, 34, 25, 38],
    },
    molecular: {
      name: "MISPA LUME",
      category: "Molecular Diagnostics",
      revenue: "₹10.5M",
      units: 200,
      growth: "+11.3%",
      trend: [18, 48, 30, 70, 52, 45, 60, 40, 33, 27, 42],
    },
    urine: {
      name: "MISPA URISKAN 100 PLUS",
      category: "Urine Analyzers",
      revenue: "₹8.9M",
      units: 175,
      growth: "+9.2%",
      trend: [12, 35, 25, 55, 47, 35, 50, 28, 20, 15, 33],
    },
  };
  
  const activeProduct = productData[activeTab] || {}; // Safe fallback
  const trendData = activeProduct.trend || []; // Safe fallback for trend data

  // Chart Options
  const chartOptions = {
    chart: { type: "line", height: 200, toolbar: { show: false } },
    stroke: { width: 2, curve: "smooth" },
    series: [{ name: "Trend", data: trendData }],
    colors: ["#3b82f6"],
    tooltip: { fixed: { enabled: true, position: "topLeft" } },
    xaxis: {
      categories: trendData.map((_, index) => `${index + 1}`), // Example: Label each point
      title: {
        text: "Days", // Label for X-axis
        style: {
          color: "#4b5563", // X-axis label color
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      title: {
        text: "Unit Sold", // Label for Y-axis
        style: {
          color: "#4b5563", // Y-axis label color
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
  };

  const insights = [
    {
      title: "Product Performance Insights",
      items: [
        {
          heading: "Momentum Progress Analysis",
          description: "Momentum for AutoLab ECR 10 increased by 15% this month due to successful advertising campaigns in South India.",
        },
        {
          heading: "Profitability Insights",
          description: "Profit margins dropped by 5% last month due to increased raw material costs.",
        },
        {
          heading: "Performance Analysis",
          description: "This product's revenue grew by 18% quarter-on-quarter, driven by increased sales in urban regions like Chennai and Bangalore.",
        },
      ],
      bgColor: "#f0fdf4",
      iconColor: "#22c55e",
      iconClass: "fas fa-box",
    },
    {
      title: "Optimization and Strategy Insights",
      items: [
        {
          heading: "Sales Optimization Opportunity ",
          description: "Mission U500 could sell 20% more units with a ₹50 price reduction in competitive markets like Hyderabad.",
        },
        {
          heading: "Stock Management Insight",
          description: "Inventory for OnCall A1c will deplete in 45 days if current sales momentum continues.",
        },
        {
          heading: "Cross-Selling Opportunities",
          description: "Customers buying EuroLab 200 also purchase 'Sample Collection Kits' 70% of the time, offering bundling potential.",
        },
      ],
      bgColor: "#eff6ff",
      iconColor: "#3b82f6",
      iconClass: "fas fa-chart-line",
    },
  ];
  const revenueDistOptions = {
    chart: { type: "donut", height: 320 },
    series: [44, 55, 13, 33,34],
    labels: ["Clinical Chemistry", "Hematology", "Immunology", "Molecular Diagnostics", "Urine Analyzers"],
    colors: ["#0ea5e9", "#22c55e", "#a855f7", "#eab308" ,"#00008B"],
  };

  const monthlyCompOptions = {
    chart: { type: "bar", height: 320 },
    series: [{ name: "Revenue", data: [44, 55, 57, 56, 61, 58] }],
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    colors: ["#0ea5e9"],
  };

  return (
    <section id="products" style={{ padding: "1.5rem" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
        {/* Tabs Section */}
        <div style={{ display: "flex", borderBottom: "1px solid #d1d5db" }}>
          {Object.keys(productData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: "1rem",
                fontWeight: "600",
                color: activeTab === tab ? "#3b82f6" : "#4b5563",
                borderBottom: activeTab === tab ? "2px solid #3b82f6" : "none",
              }}
            >
              {productData[tab].category}
            </button>
          ))}
        </div>

        {/* Product Card */}
        <div style={{ padding: "1.5rem" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "0.5rem" }}>{activeProduct.name || "Loading..."}</h3>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>{activeProduct.category || ""}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ marginBottom: "0.5rem", color: "#4b5563" }}>
                Revenue: <strong>{activeProduct.revenue || "N/A"}</strong>
              </p>
              <p style={{ marginBottom: "0.5rem", color: "#4b5563" }}>
                Units Sold: <strong>{activeProduct.units || "N/A"}</strong>
              </p>
              <p style={{ color: "#22c55e", fontWeight: "600" }}>Growth: {activeProduct.growth || "N/A"}</p>
              <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.25rem" }}>
                Compared to last month  
              </p>
            </div>
            
            <div style={{ width: "60%", height: "150px" }}>
              {trendData.length > 0 && (
                <ReactApexChart
                  key={activeTab}
                  options={chartOptions}
                  series={chartOptions.series}
                  type="line"
                  height={150}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* Revenue Distribution */}
        <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "8px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "1rem" }}>Revenue Distribution</h3>
          <ReactApexChart
            options={revenueDistOptions}
            series={revenueDistOptions.series}
            type="donut"
            height={320}
          />
        </div>

        {/* Monthly Comparison */}
        <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "8px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "1rem" }}>Monthly Progress Analysis</h3>
          {monthlyCompOptions && monthlyCompOptions.series.length > 0 ? (
            <ReactApexChart
              key={activeTab} // Force re-render when the tab changes
              options={monthlyCompOptions}
              series={monthlyCompOptions.series}
              type="bar"
              height={320}
            />
          ) : (
            <p style={{ textAlign: "center", color: "#9ca3af" }}>No data available for the chart</p>
          )}
        </div>
      </div>  
      {/* AI Insights Section */}
      <div style={{ marginTop: "2rem" }}>
        {insights.map((insight, index) => (
          <div
            key={index}
            style={{
              backgroundColor: insight.bgColor,
              padding: "1.5rem",
              borderRadius: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ display: "flex", alignItems: "center", marginBottom: "1rem", color: "#374151" }}>
              <i
                className={insight.iconClass}
                style={{
                  marginRight: "0.5rem",
                  fontSize: "1.5rem",
                  color: insight.iconColor,
                }}
              ></i>
              {insight.title}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {insight.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>
                    {item.heading}
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          ))}
          </div>
        </section>
      );
    };
    
  export default Products;