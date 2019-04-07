import React from "react"

class Banner extends React.Component {
  render() {
    return(
		<section class="main-banner-wrap-layout1 bg-common overlay-dark-30 bg--gradient-top-30 c-header-bg">
            <div class="container">
                <div class="main-banner-box-layout1">
                    <p class="item-sub-title">The track is my canvas, and the car is my brush - <span class="quote-author">Graham Hill</span></p>
                    <h1 class="item-title">F1 Champions 2005 - 2015</h1>
                    <ul class="item-ctg">
                        <li>
                            <a class="item-icon" href="#2005"><i class="flaticon-down-arrow"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
	)
  }
}
export default Banner
