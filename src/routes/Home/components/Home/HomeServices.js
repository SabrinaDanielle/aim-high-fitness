import React from 'react'
import styled from 'styled-components'
import facility from '../../../../assets/facility3.svg'

// const style = {
//   mainDiv: {},
//   headerMD: {
//     margin: 'auto',
//     width: '20%',
//     padding: 24,
//     marginTop: 25,
//     textAlign: 'center'
//   },
//   secHeader: {},
//   image: {
//     margin: 'auto',
//     paddingLeft: '140px'
//   },
//   heroImage: {
//     margin: 'auto',
//     width: '100%',
//     padding: 50
//   }
// }

const Services = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  text-align: justify;
  padding: 40px;
`
const ServiceHeader = styled.h1`
  text-align: center;
  text-decoration: underline;
`
const ServiceSection = styled.div`
  background-image: url(${facility});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-shadow: 3px 3px #000000;
  margin-bottom: 0px;
`

export const HomeServices = () => {
  return (
    <ServiceSection>
      <div>
        <div className="row">
          <div className="col s4">
            <ServiceHeader>Personal Training</ServiceHeader>
            <Services>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </Services>
          </div>
          <div className="col s4">
            <ServiceHeader>Group Workouts</ServiceHeader>
            <Services>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </Services>
          </div>
          <div className="col s4">
            <ServiceHeader>Online Subscription</ServiceHeader>
            <Services>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </Services>
          </div>
        </div>
      </div>
    </ServiceSection>
  )
}

export default HomeServices
