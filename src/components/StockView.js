// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import "../stylesheets/StockView.css"
function StockView() {
  const container = useRef();
  let runCheck = false
  useEffect(
    () => {
      if (!runCheck) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "symbols": [
              [
                "Apple",
                "AAPL|1D"
              ],
              [
                "Google",
                "GOOGL|1D"
              ],
              [
                "Microsoft",
                "MSFT|1D"
              ]
            ],
            "chartOnly": false,
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "colorTheme": "dark",
            "autosize": true,
            "showVolume": false,
            "showMA": true,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "Open Sans",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "rgba(186, 104, 200, 1)",
            "maLineWidth": 1,
            "maLength": 9,
            "backgroundColor": "rgba(0, 0, 0, 0)",
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
              "1d|1",
              "1m|30",
              "3m|60",
              "12m|1D",
              "60m|1W",
              "all|1M"
            ]
          }`;
        container.current.appendChild(script);
        runCheck = true;
    }
    },
    []
  );

  return (
    <div className="stockViewContainer">
      <p className='stockViewText fadeIn'>Intelligent Market <span className="gradientText animatedUnderline">Analysis</span></p>
      <p className='stockViewSubtext fadeIn'> Empower Your Investments with Algabay's GPT Model: Our user-friendly Algabay GPT model simplifies intricate market data, providing actionable financial insights for confident decision-making.</p>
      <div className='stockViewGraphContainer'>
        <div className="tradingview-widget-container" ref={container} id="stockCharts">
          <div className="tradingview-widget-copyright"></div>
        </div>
      </div>
    </div>
  );
}

export default memo(StockView);
