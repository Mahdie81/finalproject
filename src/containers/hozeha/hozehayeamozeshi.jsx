import React from 'react'
import styled from "styled-components";
import tit from '../../assets/tittle and pattern.png'
import back from "../../assets/it big pattern.png";
import {useState,useEffect} from "react";
import brand from "../../assets/hozeha/b.png"
import grafik from "../../assets/hozeha/g.png"
import web from "../../assets/hozeha/w.png"

function Hozeha() {


  return (
<$GeneralGrid3>

<$tit>
  <img src={tit} alt={'title'} />
</$tit>

  <$cards>
    <img src={grafik} alt={'background'} />
    <img src={brand} alt={'background'} />
    <img src={web} alt={'background'} />

  </$cards>

<$con>

  <img src={back} alt={'background'} />


</$con>




</$GeneralGrid3>
  );
}

export default Hozeha;


export const $GeneralGrid3 = styled.section`
     direction: ltr;
     display               : grid;
     grid-template-columns :repeat(6,16.6%);
     grid-template-rows:30% 70%;
`




const $tit=styled.div`
  grid-column:1;
  grid-row: 1;
`


const $con=styled.div`
  grid-column:1/-1;
  grid-row:2;
  z-index: 0;
  img{
    width:100%;

  }

`
const $cards=styled.div`
  margin:auto;
  grid-row:2;
  grid-column:2/5;
  z-index: 4;
  display: flex;
  justify-content:space-between;
  img{
    margin-right:2rem;
  }
`

