import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";
import "./csses/slider.css"


function Imageslider () {
    let settings={
        dots:true,
        infinite:true,
        speed:200,
        slidesToShow:true,
        slidesToScroll:1,
        cssEase:"linear"
    }

  return (
      <$ImageSlider>
       <Slider {...settings}>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <$slide1/>
                    </div>
                    {/*<ul className="social-icon">*/}
                    {/*    <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-insta"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-twit"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-tlegram"></i></a></li>*/}
                    {/*</ul>*/}
                    <div className="details">
                        <h3>
                            برگزاری اولین بوت کمپ UI/UX<br/>در قم توسط استاد محمد جواد عمادی
                        </h3>
                    </div>
                </div>
            </div>
           <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <$slide3/>
                   </div>
                   <div className="details">
                       <h3>
                           برگزاری اولین بوت کمپ <br/>UI/UXدر قم توسط استاد محمد جواد عمادی
                       </h3>
                   </div>
               </div>
           </div>
           <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                   <$slide2/>
                   </div>
                   <div className="details">
                       <h3>
                           برگزاری اولین بوت کمپ
                           <br/>UI/UXدر قم توسط استاد محمد جواد عمادی
                       </h3>
                   </div>
               </div>
           </div>
       </Slider>
</$ImageSlider>
  );
}

export default Imageslider;




const $ImageSlider = styled.div`
  margin:auto;
  width:90%;
  height:40rem;
 
     .slick-dots {
          bottom :-3rem;
          li {
               button {
                    width         : 10px;
                    height        : 10px;
                    border        : 1px solid var(--dot-slider);
                    border-radius : 20px;

                    &:before {
                         position      : absolute;
                         top           : 30%;
                         left          : 30%;
                         width         : 7px;
                         height        : 7px;
                         border-radius : 10px;
                         content       : '';
                         text-align    : center;
                         opacity       : .5;
                         transform     : translate(-50%, -50%);
                         transition    : all .3s ease-in-out;
                         }
                    }

               &.slick-active, &:hover {
                 margin-top:3rem;

                 button {
                         border-color :var(--dot-slider);
                         &:before {
                              background :var(--dot-slider);
                              opacity   : 1;
                              }
                         }
              
                    }


            
               }
          }

  .slick-prev, .slick-next {
    color: var(--dot-slider);
  }
  .slick-next{
    margin-right:5rem;
  }
  .slick-prev{
    margin-left:5rem;
    z-index: 3;
  }
`

const $img=styled.img`
    width:100%;
    height:100%;
    `
const $slide1=styled.div`
  border-radius:3rem;
  width:100%;
  height:100%;
  background-color:black;
  background-image:linear-gradient(to right,black,white);

`

const $slide2=styled($slide1)`
  background-color:var(--BLUE);
  background-image:linear-gradient(to right,var(--BLUE),white);


`
const $slide3=styled($slide1)`
  background-color:var(--nav);
  background-image:linear-gradient(to right,var(--nav),white);
`