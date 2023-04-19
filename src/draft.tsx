function Draft() {
  return (
    <>
      <div className="body">
        <div className="eq-info">
          <div className="eq-name">CAT</div>
          <div className="eq-id">352</div>
          <div className="eq-type">Excavator</div>
          <div className="eq-owner">
            <div className="eq-owner-log">OI</div>
            <div>8/10</div>
          </div>
          <div className="eq-rating">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <button className="reviews-btn">Read reviews</button>
        </div>
        <div>
          <div className="photo-equipment">photo</div>
          <div className="condition-card">
            <div className="condition-title">Condition</div>
            <hr />
            <div className="condition-issue">
              <div>Owner’s</div>
              <div>8/10</div>
            </div>
            <div className="condition-issue">
              <div>Users’ average</div>
              <div>8/10</div>
            </div>
            <div className="condition-issue">
              <div>Users’ last</div>
              <div>8/10</div>
            </div>
          </div>
        </div>
        <div className="indicators-card">
          <div className="table">
            <div className="indicator-value-table">
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
            </div>
            <div className="vl"></div>
            <div className="indicator-value-table">
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
              <div className="indicator-value-table-item">
                <div>Indicator</div>
                <div>Value</div>
              </div>
            </div>
          </div>
          <div className="price-info-footer">
            <div className="price">$ 1 000 / day</div>
            <div>
              <button className="request-info-btn">Request Rent</button>
            </div>
          </div>
        </div>
      </div>
      <div className="user-owner-section">
        <div className="feedback-users"></div>

        <div className="description-owners"></div>
      </div>
    </>
  );
}
