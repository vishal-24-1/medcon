import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Forecast = () => {
  const revenueForecastSparkOptions = {
    chart: { type: 'line', sparkline: { enabled: true }, height: 50 },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#6366f1'],
    series: [{ data: [25,66,41,89,63,25,44,12,36,9,54] }]
  };

  const revenueTrendForecastOptions = {
    chart: { type: 'line', height: 320, toolbar: { show: false } },
    series: [
      { name: 'Historical', data: [30,40,35,50,49,60] },
      { name: 'Forecast', data: [null,null,null,65,70,78] }
    ],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    colors: ['#6366f1', '#e11d48'],
    stroke: { dashArray: [0,3] }
  };

  const scenarioImpactOptions = {
    chart: { type: 'bar', height: 320, toolbar: { show: false } },
    series: [
      { name: 'Base Case', data: [44, 55, 57, 56, 61, 58] },
      { name: 'Optimistic', data: [76, 85, 101, 98, 87, 105] }
    ],
    xaxis: { categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
    colors: ['#6366f1', '#22c55e']
  };
  const productGrowthOptions = {
    chart: {
      type: 'line',
      height: 320,
      toolbar: { show: false },
    },
    series: [
      {
        name: 'Mispa CX4',
        data: [30, 45, 50, 55, 65, 70],
      },
      {
        name: 'TBA-2000FR',
        data: [20, 25, 30, 40, 45, 55],
      },
      {
        name: 'Mispa i3',
        data: [15, 20, 25, 30, 35, 40],
      },
      {
        name: 'Mispa HX 88',
        data: [40, 42, 44, 50, 52, 60],
      },
      {
        name: 'Mispa Nano',
        data: [10, 15, 20, 25, 30, 35],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      title: { text: 'Months' },
    },
    yaxis: {
      title: { text: 'Revenue (in Millions)' },
    },
    colors: ['#3b82f6', '#f87171', '#22c55e', '#facc15', '#a855f7'],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    tooltip: {
      x: { format: 'MMM' },
    },
  };

  return (
    <section id="forecast" style={{padding:'1.5rem', display:'block'}}>
      {/* AI Confidence Banner */}
      <div style={{backgroundColor:'#eef2ff', border:'1px solid #c7d2fe', borderRadius:'0.5rem', padding:'1rem', marginBottom:'1.5rem'}}>
        <div style={{display:'flex', alignItems:'center'}}>
          <div style={{padding:'0.5rem', backgroundColor:'#e0e7ff', borderRadius:'0.5rem'}}>
            <i className="fas fa-robot" style={{color:'#4f46e5'}}></i>
          </div>
          <div style={{marginLeft:'1rem'}}>
            <h4 style={{fontWeight:'500', color:'#312e81'}}>AI Forecast Confidence: 92%</h4>
            <p style={{fontSize:'0.875rem', color:'#4338ca'}}>Based on historical data patterns and market indicators</p>
          </div>
        </div>
      </div>

      {/* Forecast KPIs */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(15rem,1fr))', gap:'1.5rem'}}>
        {/* Revenue Forecast */}
        <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
          <h3 style={{fontSize:'0.875rem', color:'#4b5563'}}>Forecasted Revenue (Next Quarter)</h3>
          <div style={{marginTop:'0.5rem', display:'flex', alignItems:'baseline'}}>
            <span style={{fontSize:'1.5rem', fontWeight:'700'}}>₹298.5M</span>
            <span style={{marginLeft:'0.5rem', fontSize:'0.875rem', color:'#16a34a'}}>+12.3%</span>
          </div>
          <div style={{marginTop:'1rem'}}>
            <ReactApexChart options={revenueForecastSparkOptions} series={revenueForecastSparkOptions.series} type="line" height={50}/>
          </div>
        </div>

        {/* Units Forecast */}
        <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
          <h3 style={{fontSize:'0.875rem', color:'#4b5563'}}>Forecasted Units (Next Quarter)</h3>
          <div style={{marginTop:'0.5rem', display:'flex', alignItems:'baseline'}}>
            <span style={{fontSize:'1.5rem', fontWeight:'700'}}>2,154</span>
            <span style={{marginLeft:'0.5rem', fontSize:'0.875rem', color:'#16a34a'}}>+8.7%</span>
          </div>
          <div style={{marginTop:'1rem'}}>
            <ReactApexChart options={revenueForecastSparkOptions} series={revenueForecastSparkOptions.series} type="line" height={50}/>
          </div>
        </div>

        {/* Growth Forecast */}
        <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
          <h3 style={{fontSize:'0.875rem', color:'#4b5563'}}>Market Growth Forecast</h3>
          <div style={{marginTop:'0.5rem', display:'flex', alignItems:'baseline'}}>
            <span style={{fontSize:'1.5rem', fontWeight:'700'}}>15.8%</span>
            <span style={{marginLeft:'0.5rem', fontSize:'0.875rem', color:'#16a34a'}}>+2.1%</span>
          </div>
          <div style={{marginTop:'1rem'}}>
            <ReactApexChart options={revenueForecastSparkOptions} series={revenueForecastSparkOptions.series} type="line" height={50}/>
          </div>
        </div>
      </div>

      {/* Forecast Charts */}
      <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'1.5rem', marginTop:'1.5rem'}}>
        {/* On large screens: 2 columns */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:'1.5rem'}}>
          {/* Revenue Trend */}
          <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
              <h3 style={{fontWeight:'600'}}>Revenue Forecast Trend</h3>
              <select style={{border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
                <option>Next 6 Months</option>
                <option>Next 12 Months</option>
                <option>Next Quarter</option>
              </select>
            </div>
            <div style={{height:'20rem'}}>
              <ReactApexChart options={revenueTrendForecastOptions} series={revenueTrendForecastOptions.series} type="line" height={320}/>
            </div>
          </div>

          {/* Product Performance Forecast */}
          <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
              <h3 style={{fontWeight:'600'}}>Product Growth Forecast</h3>
              <select style={{border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
                <option>Top 5 Products</option>
                <option>All Products</option>
              </select>
            </div>
            <div style={{height:'20rem'}}>
              {/* Replace with your chart options/series for product forecast if available */}
              <div style={{ height: '320px' }}>
                <ReactApexChart options={productGrowthOptions} series={productGrowthOptions.series} type="line" height={320} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Analysis */}
      <div style={{backgroundColor:'#ffffff', padding:'1.5rem', borderRadius:'0.5rem', border:'1px solid #e5e7eb', marginTop:'1.5rem'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem'}}>
          <h3 style={{fontWeight:'600'}}>Scenario Analysis</h3>
          <div style={{display:'flex', gap:'0.5rem'}}>
            <button style={{padding:'0.5rem 1rem', backgroundColor:'#e0e7ff', color:'#4f46e5', borderRadius:'0.5rem', fontSize:'0.875rem', cursor:'pointer'}}>
              Reset Scenarios
            </button>
            <button style={{padding:'0.5rem 1rem', backgroundColor:'#4f46e5', color:'#ffffff', borderRadius:'0.5rem', fontSize:'0.875rem', cursor:'pointer'}}>
              Apply Changes
            </button>
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'1.5rem'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <h4 style={{fontSize:'0.875rem', fontWeight:'500'}}>Growth Rate Adjustment</h4>
            <input type="range" min="0" max="100" defaultValue="50" style={{width:'100%'}} />
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.875rem', color:'#6b7280'}}>
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <h4 style={{fontSize:'0.875rem', fontWeight:'500'}}>Market Conditions</h4>
            <select style={{width:'100%', border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
              <option>Optimistic</option>
              <option>Neutral</option>
              <option>Conservative</option>
            </select>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <h4 style={{fontSize:'0.875rem', fontWeight:'500'}}>Seasonality Impact</h4>
            <select style={{width:'100%', border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
              <option>High Season</option>
              <option>Normal Season</option>
              <option>Low Season</option>
            </select>
          </div>
        </div>

        <div style={{marginTop:'1.5rem', height:'20rem'}}>
          <ReactApexChart options={scenarioImpactOptions} series={scenarioImpactOptions.series} type="bar" height={320}/>
        </div>
      </div>
    </section>
  );
};

export default Forecast;
