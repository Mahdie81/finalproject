import React from 'react'
import styled from "styled-components";
import back from '../assets/article/it pattern.png';
import back2 from '../assets/article/it pattern (1).png';
import back2_2 from '../assets/article/it pattern3.png';
import back3 from '../assets/article/it pattern4.png';
import title from '../assets/article/sec 4.png';
import photot1 from '../assets/article/flat vector (1).png';
import photot2 from '../assets/article/flat vector (2).png';
import photot3 from '../assets/article/flat vector (3).png';

function Whyus() {
  return (
      <$GeneralGrid5>
        <$back> <img src={back} alt='background'/></$back>
        <$tit>
            <img src={title} alt='photo'/>

        </$tit>


          <$back2> <img src={back2} alt='background'/></$back2>
          <$back2_2> <img src={back2_2} alt='background'/></$back2_2>
          <$phototext1>
              <img src={photot1} alt='background'/>
          </$phototext1>
        <$text1>
            <h2>ارائه ی گواهینامه حرفه ای فنی حرفه ای</h2>
            <br/>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استد.</span>
        </$text1>


          <$phototext2>
              <img src={photot2} alt='background'/>
          </$phototext2>
          <$text2>
              <h2>ارائه سرتیفیکیشن پایان دوره</h2>
              <br/>
              <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استد.</span>
          </$text2>

          <$back3> <img src={back3} alt='background'/></$back3>
          <$phototext3>
              <img src={photot3} alt='background'/>
          </$phototext3>
          <$text3>
              <h2>دعوت به همکاری</h2>
              <br/>
              <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استد.</span>
          </$text3>

      </$GeneralGrid5>
  );
}

export default Whyus;




const $GeneralGrid5 = styled.section`
     direction:rtl;
     display               : grid;
     grid-column-gap       :1.5rem;
     grid-template-columns :2% repeat(2,1fr) 10%;
     grid-template-rows:47rem repeat(4,28rem);
     grid-row-gap:2rem;
     
  
`
const $back=styled.div`
  grid-column:1;
  grid-row:1;
  z-index:0;
`


const $tit=styled.div`
  grid-column:2/4;
  grid-row:1;
  margin-top:25%;  
`

const $back2=styled.div`
  grid-column:3;
  grid-row:2;
  z-index:0;
  margin-right:-11rem;
`
const $back2_2=styled.div`
  grid-column:2;
  grid-row:2;
  z-index:0;
  justify-self: end;
  margin-right:-2rem;
`
const $text1=styled.div`
  grid-column:3/4;
  margin:auto 0px;
  width:80%;
  grid-row:2;
  z-index:2;
`

const $phototext1=styled.div`
  grid-column:2/3;
  grid-row:2;
  z-index:2;
`


const $text2=styled.div`
  grid-column:2/3;
  margin:auto 0px;
  width:80%;
  grid-row:3;
  z-index:2;
`

const $phototext2=styled.div`
  grid-column:3/4;
  grid-row:3;
  z-index:2;
`

const $back3=styled.div`
  grid-column:3;
  grid-row:4;
  z-index:0;
  margin-right:-5rem;
  margin-top:25%;
`

const $text3=styled.div`
  grid-column:3/4;
  width:80%;
  grid-row:4;
  z-index:2;
  margin-top:40%;

`

const $phototext3=styled.div`
  grid-column:2/3;
  grid-row:4;
  z-index:2;
`