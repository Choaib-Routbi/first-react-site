import React from 'react';

const Pricing = () => {
  return (
    <div className='pricing-section-holder'>
    <section className="pricing-section">
      <div className="pricing-content-container">
        <h2 className="section-title">Pricing<br/><span className="subtitles">Lcons ectet urLorem ipsum dolpi sicing elit. Cumque saepe eligendi</span>
</h2>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="copper-pricing">
                <h3 className="pricing-plan-name">Essential</h3>
                <p className="price">$10<span>/mo</span></p>
            </div>
            <ul className="pricing-features">
                <li>Basic system monitoring</li>
                <li>Monthly health checks</li>
                <li>Email support</li>
                <li>Security updates</li>
                <li>Software patching</li>
                <div className='transparent'>
                <li>Software patching</li>
                <li>Software patching</li>
                </div>
            </ul>
                <li className="pricing-card-btn-li"><button className="pricing-card-btn">Choose Plan</button></li>
          </div>

          <div className="pricing-card">
            <div className="bronze-pricing">
                <h3 className="pricing-plan-name">Professional</h3>
                <p className="price">$30<span>/mo</span></p>
            </div>
            <ul className="pricing-features">
                <li>Everything in Essential</li>
                <li>24/7 system monitoring</li>
                <li>Bi-weekly maintenance</li>
                <li>Remote support (within business hours)</li>
                <li>Malware protection</li>
                <li>Backup management</li>
            </ul>
                <li className="pricing-card-btn-li"><button className="pricing-card-btn">Choose Plan</button></li>

          </div>

          <div className="pricing-card">
            <div className="gold-pricing">
                <h3 className="pricing-plan-name">Enterprise</h3>
                <p className="price">Custom</p>
            </div>
            <ul className="pricing-features">
                <li>Everything in Professional</li>
                <li>24/7 priority support</li>
                 <li>On-site visits (as needed)</li>
                <li>SLA-backed response times</li>
                <li>Network and server maintenance</li>
                <li>Custom security audits</li>
                <li>Quarterly performance reports</li>
            </ul>
                <li className="pricing-card-btn-li"><button className="pricing-card-btn">Contact Us</button></li>

          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Pricing;
