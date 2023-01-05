import React,{ Component,useState, useEffect}  from 'react'
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import Arrow from "../assets/nav/Vectorflesh.png";
import insta from "../assets/nav/instagram.png";
import I from "../assets/nav/Path 2520.png";
import Tel from "../assets/nav/Vector.png";
import Tweter from "../assets/nav/Vector-1.png";
import F from "../assets/nav/Vector-2.png";
import m from "../assets/nav/Vector-3.png";
import search from "../assets/nav/Group2.png";
import logo from "../assets/nav/web burger logo.png";
import shop from "../assets/nav/Bag.png";
import profile from "../assets/nav/Profile.png";


function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
  return (
      <$GeneralGrid>
          <$Firsrow>
          
              <div className="icon">
              <img src={insta} alt={'instagram'}/>
              <img src={I} alt={''}/>
              <img src={Tel} alt={''}/>
              <img src={Tweter} alt={''}/>
              <img src={F} alt={''}/>
              <img src={m} alt={''}/>

              </div>
          </$Firsrow>
<$secreow>

        <$search>
            <input className={"searchbox"} type={"search"} placeholder={"از میان صد ها دوره و مقاله جست و جو کن..."} />
            <img src={search} alt={'search'} className={"searchico"}/>
        </$search>
    <$logo>

        <img src={logo} alt={'logo'} className={"logo"}/>

    </$logo>


    <$col_icon>
        <span>
                    <img src={shop} alt={''}/>
                    <b>سبد خرید</b>

        </span>
        <span>
                    <img src={profile} alt={''}/>
                    <b>ورود</b>
        </span>
                <b>ثبت نام</b>

    </$col_icon>

</$secreow>



          <$thirdreow>

                      <nav>
                          {(toggleMenu )}
                          <ul className={"list"}>
                              <li  className="items">
                                  <Link  to="/">خانه</Link>
                              </li>
                              
                              <li  className="items">
                              <Link to="/Courses">دوره ها
                                  <img src={Arrow} alt={'flesh'}/>
                                  <ul>
                                 
                                    <li>انلاین</li>
                                    <li>افلاین</li>
                                    </ul> 
                                  </Link>
                                 
                              </li>
                              <li  className="items">
                                  <Link to="/Blogs">وبلاگ</Link>
                              </li>
                              <li  className="items">
                                  <Link to="/TIkT">تیکت</Link>
                              </li>
                          </ul>

                          <button onClick={toggleNav} className="btn">BTN</button>
                      </nav>


          </$thirdreow>
      </$GeneralGrid>

  );
}

export default Nav;

const $GeneralGrid = styled.section`
  
     direction             : rtl;
     display               : grid;
     grid-column-gap       : 1rem;
     grid-template-rows    :20% 4rem 4rem;
     grid-template-columns :repeat(6,1fr);
     position              : relative;
     z-index:3;



`
const $Firsrow=styled.div`
    
    grid-row:1;
    grid-column:1/-1;
    background-color:var(--c-blue);
  
  .icon{
    width:15%;
    margin:5px auto;
    display: flex;
    justify-content: space-between;
  }
  
    `
const $secreow=styled.div`
  
  grid-row:2;
  grid-column:1/-1;
  background-color:var(--c-lightblue);
  z-index:2;
  display: grid;
  grid-template-columns :repeat(6,1fr);
  
  
`
const $search=styled.div`
  grid-column:1/3;
  z-index:5;
  margin:auto 3%;
  
  .searchbox{
    padding:0.7rem 1rem;
    background-color:inherit;
    border:solid 0.5px white ;
    border-radius:1rem;
    width:75%;
    color: white;
  }
  
  .searchico{
    position: absolute;
    z-index:10;
    margin:0.6rem -2rem 0px 0px;
    
  }
`
const $logo=styled.span`
    grid-column:3/5;
    text-align: center;
    vertical-align: center;
    margin:auto 0px;
`
const $col_icon=styled.div`
  grid-column:6/7;
  width:100%;
  justify-self:end;
  color:white;
  display:flex;
  margin:auto 0px;
  span img{
    float:right;

  }
  span{
    margin-left:5%;
    h3{
      margin-top: ;
    }
  }
`



const $thirdreow=styled.div`
  text-align: center;
  grid-row:3;
  grid-column:2/6;


  .btn {
    display: none;
    position: absolute;
    right: 10px;
    top: 7px;
    padding: 5px;
    color: #000;
    font-size: 18px;
  }
nav ul{
  background-color:var(--nav);
  padding:0px 10rem;
  direction: rtl;
  border-radius:0px 0px 10px 10px;
  box-shadow:0px 0px 6px  #262a2b;
  list-style:none;
  position: relative;
  display:inline-table;
}

  nav ul li:hover ul {
    display: block;
  }

  nav ul:after {
    content: "";
    clear: both;
    display: block;
  }

  nav ul li {
    float: right;
    position: relative;
    font-weight: bold;
    img{
      padding:0px 5px;
    }
    
  }

  nav ul li:hover {
    background-color: var(--c-lightblue);
  }

  nav ul li a:active {
  }
  
  nav ul li:hover a {
    color: #fff;
  }

  nav ul li a {
    display: block;
    padding:1rem 1rem;
    color:var(--c-blue);
    text-decoration: none;
  }


  nav ul ul{
    border-radius: 0px;
    padding: 0;
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    display: none;

  }

  nav ul ul li {
    float: none;
    border-top: 1px solid #fff;
    border-bottom: 1px solid darkseagreen;
    position: relative;
    padding:1rem;
    color:darkslateblue;
  }

  nav ul ul li a {
    padding: 15px 40px;
    color: #fff;
    
  }

  nav ul ul li a:hover a{
    color:white;
  }



  @media screen and (max-width: 500px){
    .list {
      flex-direction: column;
      height: auto;
    }
    .items:nth-child(1){
      border-top: 1px solid rgba(255, 255, 255, 0.555);
      margin-top: 50px;
    }
    .items {
      width: 100%;
      border-top: 1px solid rgba(255, 255, 255, 0.555);
      text-align: center;
      margin-right: 0px;
      padding: 20px 0;
    }
 
  }
  
`
export const $LeftArrow = styled( Arrow )`
     grid-column  : 2/3;
     grid-row     : 4/5;
     width        : 2.2rem;
     justify-self : end;
     align-self   : center;
`
