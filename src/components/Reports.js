import React from 'react';

const Reports = () => {
  return (
    <section id="reports" style={{padding:'1.5rem', display:'block'}}>
      {/* Report Builder */}
      <div style={{backgroundColor:'#ffffff', borderRadius:'0.5rem', border:'1px solid #e5e7eb'}}>
        <div style={{padding:'1.5rem', borderBottom:'1px solid #e5e7eb'}}>
          <h3 style={{fontWeight:'600'}}>Custom Report Builder</h3>
        </div>
        <div style={{padding:'1.5rem'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'1.5rem'}}>
            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              <h4 style={{fontSize:'0.875rem', fontWeight:'500'}}>Time Period</h4>
              <select style={{width:'100%', border:'1px solid #d1d5db', borderRadius:'0.5rem', padding:'0.5rem 1rem', fontSize:'0.875rem'}}>
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Last Year</option>
                <option>Custom Range</option>
              </select>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              <h4 style={{fontSize:'0.875rem', fontWeight:'500'}}>Data Sections</h4>
              <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="checkbox" defaultChecked style={{marginRight:'0.5rem'}} />
                  Sales Analytics
                </label>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="checkbox" defaultChecked style={{marginRight:'0.5rem'}} />
                  Product Performance
                </label>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="checkbox" style={{marginRight:'0.5rem'}} />
                  Regional Analysis
                </label>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="checkbox" style={{marginRight:'0.5rem'}} />
                  Customer Insights
                </label>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="checkbox" style={{marginRight:'0.5rem'}} />
                  Forecast Data
                </label>
              </div>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              <h4 style={{fontSize:'0.875rem', fontWeight:'500'}}>Export Format</h4>
              <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="radio" name="format" defaultChecked style={{marginRight:'0.5rem'}} />
                  PDF Report
                </label>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="radio" name="format" style={{marginRight:'0.5rem'}} />
                  Excel Spreadsheet
                </label>
                <label style={{display:'flex', alignItems:'center', fontSize:'0.875rem'}}>
                  <input type="radio" name="format" style={{marginRight:'0.5rem'}} />
                  CSV Data
                </label>
              </div>
            </div>
          </div>

          <div style={{marginTop:'1.5rem', display:'flex', justifyContent:'end'}}>
            <button style={{padding:'0.5rem 1rem', backgroundColor:'#2563eb', color:'#ffffff', borderRadius:'0.5rem', fontSize:'0.875rem', cursor:'pointer'}}>
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div style={{backgroundColor:'#ffffff', borderRadius:'0.5rem', border:'1px solid #e5e7eb', marginTop:'1.5rem'}}>
        <div style={{padding:'1.5rem', borderBottom:'1px solid #e5e7eb', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h3 style={{fontWeight:'600'}}>Recent Reports</h3>
          <button style={{fontSize:'0.875rem', color:'#2563eb', background:'none', border:'none', cursor:'pointer'}}>View All</button>
        </div>
        <div style={{padding:'1.5rem'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.75rem 0'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <div style={{padding:'0.5rem', backgroundColor:'#eff6ff', borderRadius:'0.5rem'}}>
                  <i className="fas fa-file-pdf" style={{color:'#3b82f6'}}></i>
                </div>
                <div style={{marginLeft:'1rem'}}>
                  <p style={{fontWeight:'500'}}>Monthly Sales Report</p>
                  <p style={{fontSize:'0.875rem', color:'#6b7280'}}>Generated on Jan 15, 2024</p>
                </div>
              </div>
              <button style={{color:'#9ca3af', background:'none', border:'none', cursor:'pointer'}}>
                <i className="fas fa-download"></i>
              </button>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.75rem 0'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <div style={{padding:'0.5rem', backgroundColor:'#ecfdf5', borderRadius:'0.5rem'}}>
                  <i className="fas fa-file-excel" style={{color:'#22c55e'}}></i>
                </div>
                <div style={{marginLeft:'1rem'}}>
                  <p style={{fontWeight:'500'}}>Q4 2023 Performance Analysis</p>
                  <p style={{fontSize:'0.875rem', color:'#6b7280'}}>Generated on Jan 10, 2024</p>
                </div>
              </div>
              <button style={{color:'#9ca3af', background:'none', border:'none', cursor:'pointer'}}>
                <i className="fas fa-download"></i>
              </button>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.75rem 0'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <div style={{padding:'0.5rem', backgroundColor:'#faf5ff', borderRadius:'0.5rem'}}>
                  <i className="fas fa-file-csv" style={{color:'#a855f7'}}></i>
                </div>
                <div style={{marginLeft:'1rem'}}>
                  <p style={{fontWeight:'500'}}>Regional Sales Data</p>
                  <p style={{fontSize:'0.875rem', color:'#6b7280'}}>Generated on Jan 5, 2024</p>
                </div>
              </div>
              <button style={{color:'#9ca3af', background:'none', border:'none', cursor:'pointer'}}>
                <i className="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Reports */}
      <div style={{backgroundColor:'#ffffff', borderRadius:'0.5rem', border:'1px solid #e5e7eb', marginTop:'1.5rem'}}>
        <div style={{padding:'1.5rem', borderBottom:'1px solid #e5e7eb'}}>
          <h3 style={{fontWeight:'600'}}>Scheduled Reports</h3>
        </div>
        <div style={{padding:'1.5rem'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.75rem 0'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <div style={{padding:'0.5rem', backgroundColor:'#eef2ff', borderRadius:'0.5rem'}}>
                  <i className="fas fa-clock" style={{color:'#4f46e5'}}></i>
                </div>
                <div style={{marginLeft:'1rem'}}>
                  <p style={{fontWeight:'500'}}>Weekly Performance Summary</p>
                  <p style={{fontSize:'0.875rem', color:'#6b7280'}}>Every Monday at 9:00 AM</p>
                </div>
              </div>
              <button style={{color:'#9ca3af', background:'none', border:'none', cursor:'pointer'}}>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.75rem 0'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <div style={{padding:'0.5rem', backgroundColor:'#eef2ff', borderRadius:'0.5rem'}}>
                  <i className="fas fa-clock" style={{color:'#4f46e5'}}></i>
                </div>
                <div style={{marginLeft:'1rem'}}>
                  <p style={{fontWeight:'500'}}>Monthly Business Review</p>
                  <p style={{fontSize:'0.875rem', color:'#6b7280'}}>1st of every month</p>
                </div>
              </div>
              <button style={{color:'#9ca3af', background:'none', border:'none', cursor:'pointer'}}>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
