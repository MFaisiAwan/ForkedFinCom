import React from "react"
import WHeader from "../Header/wheader"

class NotFoundPage extends React.Component {
  render() {
    return(
		<div>
		<WHeader />
		<section class="error-page-wrap padding-top-20 padding-bottom-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="error-content-box">
                            <img src="/img/404.png" alt="404" class="img-fluid" />
                            <h2 class="item-title">Sorry! Page Was Not Found</h2>
                            <p class="item-details">The page you are looking is not available or has been removed.
                                Try going to Home Page by using the button below.</p>
                            <a href="/" class="item-btn">Go To Home Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</div>
	)
  }
}
export default NotFoundPage