import React from 'react'
import styled from "styled-components";


function Courses() {
  return (

           <$GeneralCoursesGrid>

               hello




           </$GeneralCoursesGrid>

  );
}

export default Courses;

export const $GeneralCoursesGrid = styled.section`
background:black;
     display               : grid;
     grid-column-gap       : 1rem;
     grid-template-rows    : 1fr 1fr;
     grid-template-columns :minmax(.5rem, 3.5rem) minmax(2rem, 5.5rem) minmax(2rem, 6.5rem)
      1fr minmax(.5rem, 3.5rem)  minmax(2rem, 6.5rem) minmax(.5rem, 3.5rem);
     padding               : 2rem 0 15rem;
     grid-row-gap          : 5rem;
     position              : relative;
`