import React from 'react'
import styled from "styled-components";
import star from '../assets/cards/Vector.png';
function CoursesCard(props) {


  return (
      <$EduCardGrid >

          <img src = { props.profile} alt = "image" className='profile'  />
          <h3>
              {props.producer}
              <br/>
              <span>{props.producer_detil}</span>
          </h3>

          <div>
              <span>طول دوره:</span>{props.duration}<br/><br/>
              <span>سطح دوره:</span>{props.level}<br/><br/>
              <span>تعداد دانشجویان دوره:</span>{props.numberofstudent}<br/><br/>
          </div>




          <span className="title">{ props.title }</span>


          {/*{edit? <$addbtn blue onClick={()=>Editbtn(props)}>edit</$addbtn>:null}*/}

          {/*{edit? <span className="delet"><$addbtn red onClick={()=>Deletbtn(props)} >delet</$addbtn></span>:null}*/}

      </$EduCardGrid >
  );
}

export default CoursesCard;


const $EduCardGrid = styled.div`
     margin-top:4rem;
     border-radius         : 1rem;
     background-color: var(--nav);
     width                 :1fr;
     height                :15rem;
     overflow              : hidden;
  padding:2rem 0px;
  display: grid;
  grid-column-gap       :2rem;
  grid-template-columns :1% 45% 50% 1%;
  grid-template-rows:1fr 1fr;

  .title{
    grid-row:1;
    grid-column:3;
    font-size:20px;
  }
  h3
  {
    margin-right:5rem; 
    margin-top:1rem;  
    grid-row:1;
    grid-column:2;
    span{
      font-size:10px;
      margin-right:1rem;
      opacity:40%;
    }

  }
  img{
    grid-row:1;
    grid-column:2;
    border-radius:50%;
  }
  div{
    direction: rtl;
    grid-row:2;
    grid-column:2;
    font-size:85%;

span{
  margin-left:.5rem;
  font-size:95%;

}  
  
  
  .star{
    margin-left: 1px;
  }
  }

`