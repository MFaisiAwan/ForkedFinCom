import React from "react"
import WHeader from "../Header/wheader"
import WBanner from "../Banner/wbanner"

class Winners extends React.Component {
// Constructor to set state	
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  champd: [],
		  items: [],
		};
	  }
//Fetch data from Ergast API
	componentDidMount() {
	const { params } = this.props.match
	 Promise.all([
            fetch(`https://ergast.com/api/f1/${params.year}/driverStandings/1.json`),
            fetch(`https://ergast.com/api/f1/${params.year}/results/1.json`)
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
			isLoaded: true,
            champd: data1.MRData, 
            items: data2.MRData
        }));
  }
 // Render Fetched Data
   render() {
	const { error, isLoaded, items, champd } = this.state;
    if (error) {
      return (
	  // Display Errors if any
	  <div>
	  	<WHeader />
		<WBanner />
		Error: {error.message}
	  </div>
	  );
    } else if (!isLoaded) {
	// Display Loader until data is fully loaded
      return (
	  	<div>
	  	<WHeader />
		<WBanner />
	  	<center><div><img src="/img/loading.gif" class="c-loader" alt="Loading..." /></div></center>
		</div>
	  );
    } else {
      return (
	// Display Winners Fetched via API	
	  	<div>
	  	<WHeader />
		<WBanner />
			<section class="event-wrap-layout3 padding-top-13 padding-bottom-7 bg--accent" id="winner_list">
            <div class="container">
                <div class="listing-box-grid">
                    <div class="row">
          {items.RaceTable.Races.map(item => (
                        <div class="col-lg-4 col-md-6">
                            <div class="product-box border-box">
								<div className={(champd.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId === item.Results[0].Driver.driverId)?'c-show-champ':'c-hide-champ'}>
								<div class="item-img bg--gradient-50">
									<div class="item-logo">
										<img src="/img/champ.png" alt="Champion" />
									</div>
								</div>
								</div>
                                <div class="item-content">
                                    <h3 class="item-title">{item.raceName}</h3>
                                    <p class="item-paragraph"><b>{item.Results[0].Driver.givenName} {item.Results[0].Driver.familyName}</b></p>
                                    <ul class="contact-info">
                                        <li><b>Constructor:</b> {item.Results[0].Constructor.name}</li>
                                        <li><b>Laps:</b> {item.Results[0].laps}</li>
										<li><b>D ID:</b> {item.Results[0].Driver.driverId}</li>
                                        <li><b>Grid:</b> {item.Results[0].grid}</li>
                                        <li><b>Time:</b> {item.Results[0].Time.time}</li>
                                        <li><b>Status:</b> {item.Results[0].status}</li>
                                        <li><b>Points:</b> {item.Results[0].points}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
          ))}
                    </div>
                </div>
            </div>
        </section>
		</div>
      );
    }
  }
}
export default Winners
