import React from "react"
import Header from "../Header"
import Banner from "../Banner"

class Winners extends React.Component {

// Constructor to set state
constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
//Fetch data from Ergast API
  componentDidMount() {
    fetch("https://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.MRData
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
// Render Fetched Data
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
	  // Display Errors if any
	  <div>
	  	<Header />
		<Banner />
		Error: {error.message}
	  </div>
	  );
    } else if (!isLoaded) {
      return (
	  // Display Loader until data is fully loaded
	  	<div>
	  	<Header />
		<Banner />
	  	<center><div><img src="/img/loading.gif" class="c-loader" alt="Loading..." /></div></center>
		</div>
	  );
    } else {
      return (
		// Display Champions Fetched via API
	  	<div>
	  	<Header />
		<Banner />
          {items.StandingsTable.StandingsLists.map(item => (
            <section class="event-wrap-layout3 bg--accent" id={item.season}>
            <div class="container">
                <div class="row padding-top-13">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-1">&nbsp;</div>
                            <div class="col-10">
                                <div class="event-box-layout3">
                                    <div class="media media-none--lg">
                                        <div class="item-thumb">
                                            <a href={"/winners/"+item.season}><img src={"/img/event/"+item.season+".jpg"} alt={"Season "+item.season} /></a>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="item-title"><a href={"/winners/"+item.season}>{item.DriverStandings[0].Driver.givenName} {item.DriverStandings[0].Driver.familyName}</a></h3>
                                            <div class="entry-meta">
                                                <p><span class="meta-title">Constructor:</span> {item.DriverStandings[0].Constructors[0].name}</p>
                                                <p><span class="meta-title">Round:</span> {item.round}</p>
                                                <p><span class="meta-title">Points:</span> {item.DriverStandings[0].points}</p>
                                                <p><span class="meta-title">Wins:</span> {item.DriverStandings[0].wins}</p>
                                            </div>
                                            <div class="hosted-info">
                                                <a href={"/winners/"+item.season} class="btn-fill">Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1">&nbsp;</div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
          ))}
		 </div>
      );
    }
  }
}
export default Winners