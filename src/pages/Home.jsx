import React from 'react'
import Group from '../assets/Group.png'
import photo from '../assets/Group 48096119.png'
import text from '../assets/pig tittle.png'
import btn from '../assets/Group 48096081.png'
import massage from '../assets/Group 48096249.png'
import styled from "styled-components";
import Hozeha from "../containers/hozeha/hozehayeamozeshi";
import Onlinecouses from "../containers/onlinecourse/onlinecourse";
import Inpersoncours from "../containers/inpersoncorse/inpersoncourse";
import Imageslider from "../components/slider/slider";
import Whyus from "../components/whyus";


function Home() {
  return (
       <$GeneralGrid2>
           <$mainphoto>

               <img src={Group} alt={'photoGroup'} className='back'/>

           </$mainphoto>

           <$text>
               <img src={text} alt={'text'} className='text'/>
           </$text>
           <$photo>
               <img src={photo} alt={'photoGroup2'} className='photo'/>
           </$photo>
            <$btn>
                <img src={btn} alt={'button'} className='btn'/>
            </$btn>
           <img src={massage} alt={'massage'} className='massage'/>

        <$row2>
            <Hozeha/>
        </$row2>

           <$row3>
               <Onlinecouses/>
           </$row3>

           <$row4>
               <Inpersoncours/>
           </$row4>

           <$row5>
               <div className="carousel">
                   <Imageslider/>
               </div>

           </$row5>

           <$row6>
               <Whyus/>
           </$row6>

       </$GeneralGrid2>


  );
}

export default Home;

export const $GeneralGrid2 = styled.section`
  
     direction             : rtl;
     display               : grid;
     grid-template-rows    :10rem 15rem 10rem 35rem repeat(2,1fr) 10rem;
     grid-template-columns :1rem repeat(10,10%);
     grid-row-gap:12rem;
  
.massage{

  grid-column:10;
  grid-row:3;
  z-index:5;
  margin-right:5rem;
  
}

`
const $mainphoto=styled.div`
  margin-top:-5rem;
  grid-column:1/-1;
  grid-row:1/3;
  z-index:0;
  
`
const $text=styled.div`
  grid-column:6;
  grid-row:1;
 

`


const $photo=styled.div`
  grid-column:2;
  grid-row:1;
  z-index:3;
  margin-top:13rem;

`

const $btn=styled.div`
  grid-column:8;
  grid-row:2;
  z-index:4;
  
`
const $row2=styled.div`
  grid-column:1/-1;
  grid-row:4;

`


const $row3=styled.div`
  grid-column:1/-1;
  grid-row:5;
  

`
const $row4=styled.div`
  grid-column:1/-1;
  grid-row:6;
  

`
const $row5=styled.div`
  grid-column:1/-1;
  grid-row:7;

`


const $row6=styled.div`
  grid-column:1/-1;
  grid-row:8;

`