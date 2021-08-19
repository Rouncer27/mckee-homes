import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {
  H1Navy,
  H2Navy,
  H2Grey,
  H3Navy,
  H3Grey,
  H4Navy,
  H4Grey,
  B1Black,
  B1White,
  B2Black,
  B2White,
  B2Navy,
  standardWrapper,
} from "../styles/helpers"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Typography>
        <div className="wrapper">
          <h1>Aliquam tincidunt mauris eu risus.</h1>
          <br />
          <h2 className="h2Navy">Vestibulum auctor dapibus neque.</h2>
          <h2 className="h2Grey">Nunc dignissim risus id metus.</h2>
          <br />
          <h2 className="h3Navy">Vestibulum auctor dapibus neque.</h2>
          <h2 className="h3Grey">Nunc dignissim risus id metus.</h2>
          <br />
          <h2 className="h4Navy">Vestibulum auctor dapibus neque.</h2>
          <h2 className="h4Grey">Nunc dignissim risus id metus.</h2>
          <br />
          <p className="B1Black">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna
          </p>
          <p className="B1White">
            Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
            sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem.
            Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus,
            accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque
            hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu
            gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh
            feugiat est.
          </p>
          <p className="B2Black">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna
          </p>
          <p className="B2White">
            Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
            sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem.
            Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus,
            accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque
            hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu
            gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh
            feugiat est.
          </p>
          <p className="B2Navy">
            Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
            sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem.
            Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus,
            accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque
            hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu
            gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh
            feugiat est.
          </p>
        </div>
      </Typography>
    </Layout>
  )
}

const Typography = styled.div`
  .wrapper {
    ${standardWrapper};
  }
  h1 {
    ${H1Navy};
  }

  .h2Navy {
    ${H2Navy};
  }

  .h2Grey {
    ${H2Grey};
  }

  .h3Navy {
    ${H3Navy};
  }

  .h3Grey {
    ${H3Grey};
  }

  .h4Navy {
    ${H4Navy};
  }

  .h4Grey {
    ${H4Grey};
  }

  .B1Black {
    ${B1Black};
  }

  .B1White {
    ${B1White};
  }

  .B2Black {
    ${B2Black};
  }

  .B2White {
    ${B2White};
  }

  .B2Navy {
    ${B2Navy};
  }
`

export default IndexPage
