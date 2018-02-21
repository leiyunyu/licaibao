import React from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
class Swipers extends React.Component{
	constructor() {
		super()
	}
	componentDidMount() {
		new Swiper('.container', {
			loop: true,
			autoplay:{
				 delay:1000
			},
			pagination:{
                el: ''
            },
		})
	}
	render() {
		return <div className="swiper-container container">
					<ul className="swiper-wrapper">
						<li className="swiper-slide">
							<img src="src/static/img/p1.jpg" alt=""/>
						</li>
						<li className="swiper-slide">
							<img src="src/static/img/p2.jpg" alt=""/>
						</li>
						<li className="swiper-slide">
							<img src="src/static/img/p3.jpg" alt=""/>
						</li>
                        <li className="swiper-slide">
							<img src="src/static/img/p6.jpg" alt=""/>
						</li>
					</ul>
				</div>
	}
}

export default Swipers;