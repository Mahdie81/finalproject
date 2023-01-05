import React, {useState} from 'react'
import styled from "styled-components";
import Back from "../../assets/onlinecourses/it pattern.png"
import tit from "../../assets/onlinecourses/tittle.png"
import photo from "../../assets/onlinecourses/Group 48096104.png"
import CoursesCard from "../../components/CoursesCard";
import {course_data} from "./data-course";
import pro1 from '../../img/Ellipse 347 (1).png';
import pro2 from '../../img/Ellipse 347 (2).png';
import pro3 from '../../img/Ellipse 347.png';

function Onlinecouses() {

    const [ state ,setstate] = useState( course_data )
    const count =state.length;


    return (
      <>

          <$GeneralGrid4>
              <$tit> <img src={tit} alt={'title'}/> </$tit>

                <$con><img src={photo} alt={''}/></$con>

              <$allcoursebtn><button>مشاهده ی تمام دوره ها</button></$allcoursebtn>

              <$card1>
              {state.slice( count-1 , count).map( states =>(
                  <CoursesCard key={states.id} title={states.title} {...states}  profile={pro1}/>)
              )}
              </$card1>
              <$card2>
                  {state.slice( count-2 , count-1).map( states =>(
                      <CoursesCard key={states.id} title={states.title} {...states}  profile={pro2}/>)
                  )}
              </$card2>
              <$card3>
                  {state.slice( count-3 , count-2).map( states =>(
                      <CoursesCard key={states.id} title={states.title}  {...states} profile={pro3}/>)
                  )}
              </$card3>

              <$back><img src={Back} alt={'backgrond'}/></$back>
          </$GeneralGrid4>

      </>

  );
}

export default Onlinecouses;


export const $GeneralGrid4 = styled.section`
     direction:rtl;
     display               : grid;
     grid-template-columns :2% repeat(2,1fr) 4%;
     grid-template-rows:10rem repeat(2,20rem);
    grid-row-gap: 1rem;
    grid-column-gap:1.5rem;

`
const $back=styled.div`
  grid-column:3/-1;
  grid-row:3;
  z-index:0;
  margin-top:9rem;
  margin-right:-10rem;
  
`
const $tit=styled.div`
  grid-column:2/4;
  grid-row:1;
  margin:auto;
`


const $con=styled.div`
  grid-column:2/3;
  grid-row:2;
  z-index:2;

`


const $allcoursebtn=styled.div`
  grid-column:3/4;
  justify-self:left;
  grid-row:2;
  z-index:2;
  button{
    padding:1rem 3rem;
    background:var(--btn-1);
    color:var(--btn-textcolor);
    border-radius:2rem;
  }


`

const $card1=styled.div`
  grid-column:3/4;
  grid-row:2;
  z-index:2;

`
const $card2=styled.div`
  grid-column:2/3;
  grid-row:3;
  z-index:2;

`
const $card3=styled.div`
  grid-column:3/4;
  grid-row:3;
  z-index:2;

`