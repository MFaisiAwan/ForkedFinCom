import React from "react"

class Wheader extends React.Component {
  render() {
    return(
		<header id="site-header" class="header-one">
            <div class="header-main header-sticky header-fixed">
                <div class="container-fluid">
                    <div class="mob-menu-open toggle-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <div class="row">
                        <div class="col-lg-2 col-12">
                            <div class="site-logo">
                                <a href="/" class="main-logo"><img src="/img/logo.png" alt="F1 Championship" /></a>
                                <a href="/" class="sticky-logo"><img src="/img/logo.png" alt="F1 Championship" /></a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-12 possition-static">
                            <nav class="site-nav">
                                <ul class="site-menu">
                                    <li><a href="/">Back to Home</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-1">&nbsp;</div>
                    </div>
                </div>
            </div>
        </header>
	)
  }
}
export default Wheader
