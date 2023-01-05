import React from 'react'
import styled from "styled-components";
import mob from "../assets/footer/phone logo.png"
import email from "../assets/footer/email logo.png"
import locat from "../assets/footer/location logo.png"
import logo from "../assets/nav/web burger logo.png";
import insta from "../assets/nav/instagram.png";
import I from "../assets/nav/Path 2520.png";
import Tel from "../assets/nav/Vector.png";
import Tweter from "../assets/nav/Vector-1.png";
import F from "../assets/nav/Vector-2.png";
import m from "../assets/nav/Vector-3.png";
function Footer() {
  return (

      <$GeneralGrid>

          <$signinbox>
              <div>
                  <h3>عضویت در خبرنامه طراحی </h3>
                  <br/>
                  <input type={"text"} className={'email'} placeholder={'ایمیل خود را وارد کنید..'}/>
                  <br/><br/>
                  <button>
                    <h3> عضویت</h3>
                  </button>
              </div>

          </$signinbox>
        <$colums>
            <div>
                <h4>همه روزه 24 ساعته همراه شما هستیم</h4>
                <br/>
                <img src={mob}/><span>0910 293 8082</span>
                <br/>
                <img src={email}/>
                <br/>
                <img src={locat}/><span>قم ، پردیسان ، بلوار امام علی ،
                <br/>مجتمع فرهنگی امام علی  (ع) </span>
            </div>
            <div>دسترسی سریع
                <br/><br/>
            درباره ما
                <br/>
             تماس با ما
                <br/>
                اخبار
                <br/>
                مقالات
            </div>
            <div>دسترسی سریع
                <br/><br/>
                درباره ما
                <br/>
                تماس با ما
                <br/>
                اخبار
                <br/>
                مقالات</div>
            <div>دسترسی سریع
                <br/><br/>
                درباره ما
                <br/>
                تماس با ما
                <br/>
                اخبار
                <br/>
                مقالات</div>
            <div>دسترسی سریع
                <br/><br/>
                درباره ما
                <br/>
                تماس با ما
                <br/>
                اخبار
                <br/>
                مقالات</div>
        </$colums>

          <hr/>
          <img src={logo} alt={"logo"} className={"logo"}/>
            <h4 style={{padding:"1rem",gridColumn:1,gridRow:2,marginTop:"auto"}}>ایجاد شده توسط تیم <span style={{color:"red"}}>وب برگر</span></h4>

      </$GeneralGrid>
  );
}

export default Footer;


const $GeneralGrid = styled.section`
     width: 100%;
     direction:rtl;
     display               : grid;
     grid-column-gap       :1.5rem;
     grid-template-columns :repeat(5,1fr);
     grid-template-rows:15rem 25rem;
     grid-row-gap:2rem;
     background-color:var(--nav);
     border-top-left-radius:3rem;
     border-top-right-radius:3rem;
  
  .logo{
    margin-top:auto;
    grid-row:2;
    grid-column:3/4;
    justify-self: center;
    z-index: 4;
    margin-bottom:1rem;

  }
  hr{
    
    z-index:3;
    grid-row:2;
    grid-column:1/-1;
    margin:auto  5% 3rem 5%;
    height:1px;border-width:0;
    background-color: darkgray;
  }
`

const $signinbox=styled.div`
  width:50%;
  height:20rem;
  background-color: white;
  grid-row:1;
  grid-column:1/-1;
  margin:-5rem auto 0px auto;
  z-index: 2;
  text-align: center;
  border-radius:3rem;
  div{
   margin-top:10%;
    .email{
    width:60%;
    font-size:1rem;
    padding:1rem;
      border-radius:1rem;
      background-color: #F4F4F4;
      border:solid 1px #C0C0C0;

    }
  button{
    background-color:var(--btn-1);
    padding:1rem 3rem;
    border-radius:1rem;
    color:white;
    ;
  }
  
  }
  
    `
const $colums=styled.div`
  grid-row:2;
  grid-column:1/-1;
  display:flex;
  justify-content: space-between;
  padding:1px 5rem;
  
  
  div{
    line-height:40px;
    width:1fr;
    span{
      direction:ltr;
    }
  }
  
  `